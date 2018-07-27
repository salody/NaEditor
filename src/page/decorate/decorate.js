import React from "react";
import ReactDOM from 'react-dom';
import localforage from 'localforage';
import { Provider } from 'react-redux'
import _ from 'lodash';

import App from '@component/App';
import * as Actions from '../../actions';
import '@component/Messager';
import Action from '@common/script/action';
import '../../db/createStore';
import ConfigDialog from '@component/ConfigDialog';
import ModuleList from '@component/ModuleList';
import ModuleBar from '@component/ModuleBar';
import ModuleTagList from '@component/ModuleTagList';
import Canvas from '@component/Canvas';
import DBInit from '@db/dataInitial';
import CanvasWarp from "@component/CanvasWrap";
import ModuleNav from '@component/ModuleNav';
import store from '@store';


window.resizeIframe = _.debounce(() => {
    let height = document.querySelector('.J_canvas').contentWindow.document.body.scrollHeight + 'px';
    document.querySelector('iframe.J_canvas').style.height = height;
}, 50);


window.addEventListener('load', () => {

    ReactDOM.render(
        (<Provider store={store} >
            <Canvas />
        </Provider>),
        document.querySelector('.J_canvas').contentDocument.querySelector('#Container'));


    ReactDOM.render(
        (
            <Provider store={store}>
                <ConfigDialog store={store} />
            </Provider >
        ),
        document.querySelector('.J_configDialog')
    )


    ReactDOM.render(
        <Provider store={store}>
            <ModuleList />
        </Provider >,
        document.querySelector('.J_moduleList')
    )

    ReactDOM.render(
        <Provider store={store}>
            <ModuleBar />
        </Provider>,
        document.querySelector('.J_ModuleBar')
    )

    ReactDOM.render(
        <Provider store={store}>
            <ModuleTagList />
        </Provider>,
        document.querySelector('.J_moduleTagList')
    )


    ReactDOM.render(
        <Provider store={store}>
            <ModuleNav />
        </Provider>,
        document.querySelector('.J_moduleNav')
    )




    document.addEventListener('DOMContentLoaded', () => {
        store.dispatch(Actions.fetchModuleList(pageId));
    })





    document.querySelector('.J_removeModule').addEventListener('click', (e) => {
        let moduleId = document.querySelector('.J_removeModuleInput').value;
        moduleId = Number.parseInt(moduleId.trim());
        store.dispatch(Actions.removeModuleRequest({
            moduleId,
            pageId,
        }))
    })


    document.querySelector('.J_addModule').addEventListener('click', (e) => {
        let moduleTypeId = document.querySelector('.J_addModuleInput').value;
        moduleTypeId = Number.parseInt(moduleTypeId.trim());

        store.dispatch(Actions.addModuleRequest({
            moduleTypeId,
            pageId,
        }));
    })

    document.querySelector('.J_dbInitial').addEventListener('click', (e) => {
        DBInit();
    })


    document.querySelector('.J_refresh').onclick = () => {
        // Messager.trigger('refreshModules')
        store.dispatch(Actions.fetchModuleList(window.BASE_DATA.pageId));
    }



})