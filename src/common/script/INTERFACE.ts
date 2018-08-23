const SLD = {
    backend: '//naeditor.com',
}

const prefix = '/api'

const INTERFACE = {
    uploadImage: `${SLD.backend}${prefix}/uploadImage`,
    getImageList: `${SLD.backend}${prefix}/getImageList`,
    getAllModule: `${SLD.backend}${prefix}/getAllModule`,
    getModuleList: `${SLD.backend}${prefix}/getModuleList`,
    addModule: `${SLD.backend}${prefix}/addModule`,
    removeModule: `${SLD.backend}${prefix}/removeModule`,
    positionModule: `${SLD.backend}${prefix}/positionModule`,
    updateModule: `${SLD.backend}${prefix}/updateModule`,
    getPageList: `${SLD.backend}${prefix}/getPageList`, // 获取页面列表
    addPage: `${SLD.backend}${prefix}/addPage`, // 新建页面
    deletePage: `${SLD.backend}${prefix}/deletePage`, // 删除页面
}

export default INTERFACE;