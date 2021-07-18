import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import LoginUserInfo from '~/classes/loginUserInfo';
import AuthenticationQ from '~/classes/form/authenticationQ';
import SignUpQ from '~/classes/form/signUpQ';

export interface IAuthentication {
  jwt: string,
  loginUserInfo: LoginUserInfo
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'authentication'
})
export default class Authentication extends VuexModule implements IAuthentication {
  private _jwt: string = '';
  private _loginUserInfo: LoginUserInfo = new LoginUserInfo();

  get jwt(): string {
    return this._jwt;
  }

  get loginUserInfo(): LoginUserInfo {
    return this._loginUserInfo;
  }

  @Mutation
  SET_JWT(jwt: string) {
    this._jwt = jwt;
  }

  @Mutation
  SET_LOGIN_USER_INFO(loginUserInfo: LoginUserInfo) {
    Object.assign(this._loginUserInfo, loginUserInfo);
  }

  @Mutation
  DESTROY_JWT_LOGIN_USER_INFO() {
    this._jwt = '';
    this._loginUserInfo = new LoginUserInfo();
  }


  @Action({ rawError: true })
  public async login(loginForm: AuthenticationQ) {
    this.DESTROY_JWT_LOGIN_USER_INFO();
    const { data } = await $axios.post(
      '/session/authenticate', loginForm
    );
    this.SET_JWT(data.jwt);
    this.SET_LOGIN_USER_INFO(data.loginUserInfo);
  }

  @Action({ rawError: true })
  public async signUp(signUpForm: SignUpQ) {
    this.DESTROY_JWT_LOGIN_USER_INFO();
    const { data } = await $axios.post(
      '/session/signUp', signUpForm
    );
  }
}
