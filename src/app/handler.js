import store from './Redux/store';
import axios from 'axios';
import { objValidator } from 'Utility';

let USER_ID = null;

export default (location) => new Promise((resolve, reject) => {
    USER_ID = location.params.id;
    initApp()
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
});

function initApp() {
    return new Promise((resolve, reject) => {
        document.title = 'Loading...';
        /* initConfiguration(store.getState().appConfig.firstStep); */
        getRegistry(USER_ID)
            .then((resp) => {
                document.title = resp.user.description;
                setRegistry(resp);
                setModels(resp);
                resolve();
            })
            .catch((error) => reject(error));
        /* getConfiguration(USER_ID)
            .then((resp) => {
                setConfiguration(resp)
                    .then(() => {
                        resolve();
                    })
                    .catch((error) => reject(error));
            })
            .catch((error) => reject(error)); */
    });
}

function getRegistry(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'http://localhost:3000/server/registry/' + id + '.json',
            method: 'get',
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then((response) => {
            if (response && response.status == 200) {
                const result = objValidator(response, 'data');
                resolve(result);
            } else {
                resolve([]);
            }
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}

function setRegistry(payload) {
    store.dispatch({
        type: 'USER/INIT_DATA',
        payload: payload.user
    });
}

function setModels(payload) {
    store.dispatch({
        type: 'MODELS/INIT_DATA',
        payload: payload
    });
}

function getConfiguration(id) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'http://localhost:3000/server/configurations/' + id + '.json',
            method: 'get',
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then((response) => {
            if (response && response.status == 200) {
                const result = objValidator(response, 'data');
                resolve(result);
            } else {
                resolve([]);
            }
        }).catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}

function initConfiguration(payload) {
    store.dispatch({
        type: 'SECTIONS/INIT_DATA',
        payload: payload
    });
}

function setConfiguration(payload) {
    return new Promise((resolve) => {
        store.dispatch({
            type: 'SECTIONS/SET_DATA',
            payload
        });
        /* store.dispatch({
            type: 'SUMMARY/SET_DATA',
            payload: payload.views
        }); */

        resolve();
    });
}