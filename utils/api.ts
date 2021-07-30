/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AuthenticationModule } from '~/utils/store-accessor';

let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
  $axios.setBaseURL('http://localhost:8080/api');
  $axios.onRequest(config => {
    config.headers.Authorization =  'Bearer ' + AuthenticationModule.jwt;
  })
}

export { $axios };
