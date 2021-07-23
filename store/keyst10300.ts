import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import ResrveHeader from '~/classes/reserveHeader';


export interface IKeyst10300 {
  resrveHeaderList: ResrveHeader[],
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10300'
})
export default class Keyst10300 extends VuexModule implements IKeyst10300 {
  /** スキルシート情報一覧 */
  private _resrveHeaderList: ResrveHeader[] = [];

  get resrveHeaderList(): ResrveHeader[] {
    return this._resrveHeaderList;
  }

  @Mutation
  SET_RESERVE_HEADER_LIST(value: ResrveHeader[]) {
    // 予約ヘッダー情報一覧を初期化する。
    this._resrveHeaderList.splice(0);
    // サーバーから取得した予約ヘッダー一覧全件を追加する。
    this._resrveHeaderList.push(...value);
  }

  @Action({ rawError: true })
  public async initialize() {
    alert('aaa');
    // const { data } = await $axios.get('/keyst10300/initialize');
    // await this.SET_RESERVE_HEADER_LIST(data.resrveHeaderList);
  }

}
