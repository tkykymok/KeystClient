import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import MemberInfo from '~/classes/memberInfo';
import Keyst10100SaveQ from '~/classes/form/keyst10100SaveQ';

export interface IKeyst10100 {
  MemberInfo: MemberInfo
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10100'
})
export default class Keyst10100 extends VuexModule implements IKeyst10100 {
  /** メンバー情報 */
  private _MemberInfo: MemberInfo = new MemberInfo();

  get MemberInfo(): MemberInfo {
    return this._MemberInfo;
  }

  @Mutation
  SET_USER_BASIC_INFO(value: MemberInfo) {
    Object.assign(this._MemberInfo, value);
  }

  /**
   * 初期表示
   */
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10100/initialize');
    this.SET_USER_BASIC_INFO(data.userBasicInfo);
    this.SET_USER_BASIC_INFO(data);
  }

  /**
   * プロフィール登録
   * @param reqForm
   */
     @Action({ rawError: true })
     public async save(reqForm: Keyst10100SaveQ) {
       await $axios.post(
         '/keyst10100/save', reqForm
       ).then(({ data }) => {
         this.initialize();
       });
     }
   
   

}
