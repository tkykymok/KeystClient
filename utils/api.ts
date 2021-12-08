/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AuthenticationModule, MessagesModule } from '~/utils/store-accessor';
import { MessageType } from '~/constant/messageType';

let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
  $axios.setBaseURL('http://localhost:8080/api');
  $axios.onRequest(config => {
    config.headers.Authorization = 'Bearer ' + AuthenticationModule.jwt;
  });
  $axios.onResponse(response => {
    if (response.data.messageList) {
      MessagesModule.SET_MESSAGE_LIST(response.data.messageList);
      if (response.status === 200) {
        MessagesModule.SET_MESSAGE_TYPE(MessageType.Success.name);
      }

      setTimeout(() => {
        MessagesModule.CLEAR_MESSAGE_LIST();
      }, 5000);
    }
  });
  $axios.onResponseError(error => {
    if (error.response?.data.messageList) {
      MessagesModule.SET_MESSAGE_LIST(error.response.data.messageList);
      MessagesModule.SET_MESSAGE_TYPE(MessageType.Danger.name);
      setTimeout(() => {
        MessagesModule.CLEAR_MESSAGE_LIST();
      }, 5000);
    }
  });
}

export { $axios };
