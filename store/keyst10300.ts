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
import Keyst10300SaveQ from '~/classes/form/keyst10300SaveQ';
import Keyst10300SaveQ1 from '~/classes/form/keyst10300SaveQ1';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';



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
  /** 実施月リスト */
  private _implYearMonthList: String[] = [];
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

  get implYearMonthList(): String[] {
    return this._implYearMonthList;
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
  SET_IMPL_YEAR_MONTH_LIST(value: string[]) {
    this._implYearMonthList.splice(0);
    this._implYearMonthList.push(...value);
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
    if(data.implYearMonthList != null) {
      this.SET_IMPL_YEAR_MONTH_LIST(data.implYearMonthList);
    }
  }

  /**
   *チーム変更時に該当チームの予約状況を取得
   * @param team
   */
  @Action({ rawError: true })
  public async changeTeam(team: String) {
    const { data } = await $axios.get('/keyst10300/changeTeam', {
      params: { team: team }
    });
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
  }

  /**
   * 実施月変更時に該当月の予約状況を取得
   * @param month
   */
  @Action({ rawError: true })
  public async changeMonth(month: String) {
    const { data } = await $axios.get('/keyst10300/changeMonth', {
      params: { month: month }
    });
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
    this.SET_TEAM(data.teams);
  }

  /**
   * 面談時間登録
   * @param reqForm
   */
     @Action({ rawError: true })
     public async save(reqForm: Keyst10300SaveQ) {
       const { data } = await $axios.post(
         '/keyst10300/save', reqForm
       );
       await this.initialize();
     }

   /**
   * 面談予約
   * @param reqForm
   */
     @Action({ rawError: true })
     public async reserve(reqForm: Keyst10300SaveQ1) {
       const { data } = await $axios.post(
         '/keyst10300/reserve', reqForm
       );
       await this.initialize();
     }

   /**
   * コメント登録
   * @param reqForm
   */
     @Action({ rawError: true })
     public async saveComment(reqForm: Keyst10300UpdateQ) {
       const { data } = await $axios.post(
         '/keyst10300/saveComment', reqForm
       );
       await this.initialize();
     }

  /**
   * 予約削除
   * @param reqForm
   */
     @Action({ rawError: true })
     public async delReserve(reqForm: Keyst10300UpdateQ) {
       const { data } = await $axios.post(
         '/keyst10300/delReserve', reqForm
       );
       await this.initialize();
     }

}
