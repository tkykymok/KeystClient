import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import MemberInfoList from '~/classes/memberInfoList';

export interface IKeyst10400 {
  memberInfoList: MemberInfoList[];
}

@Module({
  // Vuexをモジュールモードで扱うために指定
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst400'
})

export default class Keyst10400 extends VuexModule implements IKeyst10400 {
  // メンバー情報一覧
  private _memberInfoList: MemberInfoList[] = [];

  // メンバー情報一覧にアクセスする為のgetter
  get memberInfoList(): MemberInfoList[] {
    return this._memberInfoList;
  }

  @Mutation
  SET_MEMBER_INFO_LIST(value: MemberInfoList[]) {
    // メンバー情報一覧を初期化する
    this._memberInfoList.splice(0);
    // サーバーから取得したメンバー情報一覧全件を追加する
    this._memberInfoList.push(...value);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    await this.SET_MEMBER_INFO_LIST(data.memberInfoList);
  }
}

