import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import MemberInfoList from '~/classes/memberInfoList';
import PrjInfoList from '~/classes/prjInfoList';

export interface IKeyst10400 {
  memberInfoList: MemberInfoList[];
  prjInfoList: PrjInfoList[];
}

@Module({
  // Nuxt.jsのモジュールであることを宣言
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst10400'
})
export default class Keyst10400 extends VuexModule implements IKeyst10400 {
  // Stateを作成
  // メンバー情報一覧
  private _memberInfoList: MemberInfoList[] = [];
  // 案件情報一覧
  private _prjInfoList: PrjInfoList[] = [];

  // 上記のStateにアクセスするgetterを作成
  get memberInfoList(): MemberInfoList[] {
    return this._memberInfoList;
  }

  get prjInfoList(): PrjInfoList[] {
    return this._prjInfoList;
  }

  @Mutation
  SET_MEMBER_INFO_LIST(value: MemberInfoList[]) {
    // メンバー情報一覧を初期化する
    this._memberInfoList.splice(0);
    // サーバーから取得したメンバー情報一覧全件を追加する
    this._memberInfoList.push(...value);
  }

  @Mutation
  SET_PRJ_INFO_LIST(value: PrjInfoList[]) {
    // サーバーから取得した案件情報一覧全件を追加する。
    this._prjInfoList.push(...value);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10400/initialize');
    await this.SET_MEMBER_INFO_LIST(data.memberInfoList);
    await this.SET_PRJ_INFO_LIST(data.prjInfoList);
  }
}

