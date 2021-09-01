/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AuthenticationModule, MessagesModule } from '~/utils/store-accessor';

let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
  $axios.setBaseURL('http://localhost:8080/api');
  $axios.onRequest(config => {
    MessagesModule.CLEAR_MESSAGE_LIST();
    config.headers.Authorization =  'Bearer ' + AuthenticationModule.jwt;
  })
  $axios.onResponseError(error => {
    MessagesModule.SET_MESSAGE_LIST(error.response?.data.messageList);
    console.log(error.response?.data); // TODO 確認用
  })
}

export { $axios };
