import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import ReserveInfo from '~/classes/reserveInfo';
import ReserveInfoHeader from '~/classes/reserveInfoHeader';
import ReserveInfoDetail from '~/classes/reserveInfoDetail';


export interface IKeyst10300 {
  reserveInfoList: ReserveInfo[],
  reserveInfoHeader: ReserveInfoHeader | null,
  reserveInfoDetailList: ReserveInfoDetail[] | null,
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10300'
})
export default class Keyst10300 extends VuexModule implements IKeyst10300 {
  /** スキルシート情報一覧 */
  private _reserveInfoList: ReserveInfo[] = [];
  /** スキルシートヘッダー  */
  private _reserveInfoHeader: ReserveInfoHeader = new ReserveInfoHeader();
  /** スキルシート明細 */
  private _reserveInfoDetailList: ReserveInfoDetail[] = [];

  get reserveInfoList(): ReserveInfo[] {
    return this._reserveInfoList;
  }

  get reserveInfoHeader(): ReserveInfoHeader {
    return this._reserveInfoHeader;
  }

  get reserveInfoDetailList(): ReserveInfoDetail[] {
    return this._reserveInfoDetailList;
  }

  @Mutation
  SET_RESERVE_INFO_LIST(value: ReserveInfo[]) {
    // スキルシート情報一覧を初期化する。
    this._reserveInfoList.splice(0);
    // サーバーから取得したスキルシート情報一覧全件を追加する。
    this._reserveInfoList.push(...value);
  }

  @Mutation
  SET_RESERVE_INFO_HEADER(value: ReserveInfoHeader) {
    Object.assign(this._reserveInfoHeader, value);
  }

  @Mutation
  SET_RESERVE_INFO_DETAIL(value: ReserveInfoDetail[]) {
    // 予約ヘッダー情報一覧を初期化する。
    this._reserveInfoDetailList.splice(0);
    // サーバーから取得した予約ヘッダー一覧全件を追加する。
    this._reserveInfoDetailList.push(...value);
  }

  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10300/initialize');
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
  }

  @Action({ rawError: true })
  public async displayReserveInfo(reserveId: number) {
    const { data } = await $axios.get(
      '/keyst10300/displayReserveInfo', {
        params: { reserveId: reserveId }
      });
    this.SET_RESERVE_INFO_HEADER(data.reserveInfoHeader);
    this.SET_RESERVE_INFO_DETAIL(data.ReserveInfoDetail);
  }
}
