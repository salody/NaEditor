import React, { Component, Fragment } from 'react';
import { Row, Col, Upload, Input, Button, Icon, Modal, Card } from 'antd';
const Search = Input.Search;

import INTERFACE from '@common/script/INTERFACE';

const uploadProps = {
    name: 'file',
    action: INTERFACE.uploadImage,
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        console.log(info);
    }
}


class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            imgList: [
            ]
        }
    }


    // 选择某图片
    selectImg = (index) => {
        const { imgList: oldImgList } = this.state;
        const imgList = oldImgList.map((v, i) => {
            if (i === index) {
                v.isActive = true;
            } else {
                v.isActive = false;
            }
            return v;
        })
        this.setState({
            imgList,
        })
        this.props.selectedImgChange(imgList.filter(v => v.isActive));
    }

    componentDidMount() {
        fetch(INTERFACE.getImageList, {
            headers: new Headers({
                'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
            })
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                if (res.success) {
                    this.setState({
                        imgList: res.list,
                    })
                }
            })

    }

    render() {
        const { imgList } = this.state;
        return (
            <div className='d-content'>
                <Row>
                    <Col span={4}>
                        <Search
                            placeholder="输入图片名称或关键字"
                        />
                    </Col >
                    <Col span={2} offset={18}>
                        <Upload {...uploadProps}>
                            <Button className='d-upload-img'
                                type='primary'>
                                上传图片
                            </Button>
                        </Upload>
                    </Col >
                </Row>
                <Row>
                    {imgList.map((v, i) => (
                        <Col span={3} key={i}>
                            <div className={`d-img-container ${v.isActive ? 'active' : null}`}
                                onClick={() => { this.selectImg(i) }}>
                                <div className='d-image'
                                    style={{ backgroundImage: "url(" + v.url + ")" }}
                                >
                                </div>
                                <div className='d-img-mask'></div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}




class SourceManage extends Component {
    constructor(props) {
        super();
        this.state = {
            isVisiable: false,
            selectedImg: '',
        }
    }

    handleOk = (e) => {
        const { onChange } = this.props;
        onChange(this.state.selectedImg)
        this.close();
    }

    open = () => {
        this.setState({
            isVisiable: true,
        })
    }

    close = () => {
        this.setState({
            isVisiable: false,
        })
    }

    selectedImgChange = (imageList) => {
        const [{ url }] = imageList;
        this.setState({
            selectedImg: url,
        })
    }

    render() {

        const Title = (
            <Fragment>
                <span className='d-title'>图片选择器</span>
                <span className='d-desc'>(支持格式为xxx)</span>
            </Fragment>
        )

        const { isVisiable: visible } = this.state;

        return (
            <Fragment>
                <Button onClick={this.open}>打开图片管理</Button>
                <Modal
                    className='d-source-manage'
                    visible={visible}
                    title={Title}
                    width={1100}
                    onOk={this.handleOk}
                    onCancel={this.close}
                >
                    <Content selectedImgChange={this.selectedImgChange} />
                </Modal>
            </Fragment>

        )
    }

}

export default SourceManage;