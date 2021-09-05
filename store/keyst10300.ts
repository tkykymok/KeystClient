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
  /** 予約情報一覧 */
  private _reserveInfoList: ReserveInfo[] = [];
  /** 予約ヘッダー  */
  private _reserveInfoHeader: ReserveInfoHeader = new ReserveInfoHeader();
  /** 予約詳細 */
  private _reserveInfoDetailList: ReserveInfoDetail[] = [];
  /** 当月 */
  private _thisMonth: String = '';
  /** ユーザー基本情報 */
  private _team: String = '';

  get reserveInfoList(): ReserveInfo[] {
    return this._reserveInfoList;
  }

  get reserveInfoHeader(): ReserveInfoHeader {
    return this._reserveInfoHeader;
  }

  get reserveInfoDetailList(): ReserveInfoDetail[] {
    return this._reserveInfoDetailList;
  }

  get thisMonth(): String {
    return this._thisMonth;
  }

  get team(): String {
    return this._team;
  }

  @Mutation
  SET_RESERVE_INFO_LIST(value: ReserveInfo[]) {
    // 予約情報一覧を初期化する。
    this._reserveInfoList.splice(0);
    // サーバーから取得した予約情報一覧全件を追加する。
    this._reserveInfoList.push(...value);
  }

  @Mutation
  SET_RESERVE_INFO_DETAIL_LIST(value: ReserveInfoDetail[]) {
    // 予約詳細情報一覧を初期化する。
    this._reserveInfoDetailList.splice(0);
    // サーバーから取得した予約詳細情報一覧全件を追加する。
    this._reserveInfoDetailList.push(...value);
  }
  @Mutation
  SET_THIS_MONTH(value: String) {
    // 当月をセットする
    this._thisMonth = value;
  }
  @Mutation
  SET_TEAM(value: String) {
    // ユーザー基本情報をセットする
    this._team = value;
  }

  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10300/initialize');
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
    this.SET_RESERVE_INFO_DETAIL_LIST(data.reserveDetailList);
    this.SET_TEAM(data.team)
    this.SET_THIS_MONTH(data.thisMonth);
  }

  @Action({ rawError: true })
  public async viewComment(userId: number) {
    const { data } = await $axios.get('/keyst10300/viewComment', {
      params: { userId: userId }
    });
    this.SET_RESERVE_INFO_DETAIL_LIST(data.reserveDetailList);
  }

  @Action({ rawError: true })
  public async changeTeam(team: String) {
    const { data } = await $axios.get('/keyst10300/changeTeam', {
      params: { team: team }
    });
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
  }

  @Action({ rawError: true })
  public async changeMonth(month: String) {
    const { data } = await $axios.get('/keyst10300/changeMonth', {
      params: { month: month }
    });
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
  }

}
