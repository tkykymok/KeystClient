import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import ReserveInfo from '~/classes/reserveInfo';
import Keyst10300SaveQ from '~/classes/form/keyst10300SaveQ';
import Keyst10300ReserveQ from '~/classes/form/keyst10300ReserveQ';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';
import CommentHistory from '~/classes/commentHistory';
import Keyst10300DeleteQ from '~/classes/form/keyst10300DeleteQ';
import Keyst10300CancelQ from '~/classes/form/keyst10300CancelQ';


export interface IKeyst10300 {
  reserveId: number | null,
  thisMonth: string,
  team: string,
  reserveInfoList: ReserveInfo[],
  commentHistoryList: CommentHistory[]
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10300'
})
export default class Keyst10300 extends VuexModule implements IKeyst10300 {
  /** 予約ID */
  private _reserveId: number | null = null;
  /** 選択月 */
  private _thisMonth: string = '';
  /** チーム */
  private _team: string = '';
  /** 予約情報一覧 */
  private _reserveInfoList: ReserveInfo[] = [];
  /** コメント履歴一覧 */
  private _commentHistoryList: CommentHistory[] = [];


  get reserveId(): number | null {
    return this._reserveId;
  }

  get reserveInfoList(): ReserveInfo[] {
    return this._reserveInfoList;
  }

  get thisMonth(): string {
    return this._thisMonth;
  }

  get team(): string {
    return this._team;
  }

  get commentHistoryList(): CommentHistory[] {
    return this._commentHistoryList;
  }

  @Mutation
  SET_RESERVE_ID(value: number | null) {
    // 当月をセットする
    this._reserveId = value;
  }

  @Mutation
  SET_THIS_MONTH(value: string) {
    // 当月をセットする
    this._thisMonth = value;
  }

  @Mutation
  SET_TEAM(value: string) {
    if (value) {
      // チームをセットする
      this._team = value;
    } else {
      this._team = '';
    }
  }

  @Mutation
  SET_RESERVE_INFO_LIST(value: ReserveInfo[]) {
    // 予約情報一覧を初期化する。
    this._reserveInfoList.splice(0);
    // サーバーから取得した予約情報一覧全件を追加する。
    this._reserveInfoList.push(...value);
  }

  @Mutation
  SET_COMMENT_HISTORY_LIST(value: CommentHistory[]) {
    if (value && value.length) {
      // コメント履歴一覧を初期化する。
      this._commentHistoryList.splice(0);
      // サーバーから取得した予約情報一覧全件を追加する。
      this._commentHistoryList.push(...value);
    } else {
      this._commentHistoryList.splice(0);
    }
  }

  @Action({ rawError: true })
  public async initialize() {
<<<<<<< HEAD
    const { data } = await $axios.get('/keyst10300/initialize');
    this.SET_RESERVE_ID(data.reserveId)
    this.SET_TEAM(data.team);
    this.SET_THIS_MONTH(data.thisMonth);
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
    this.SET_COMMENT_HISTORY_LIST(data.commentHistoryList);
  }

  /**
   * 実施月変更時に該当月の予約状況を取得
   * @param yearMonth
   */
  @Action({ rawError: true })
  public async changeMonth(yearMonth: string) {
    const { data } = await $axios.get('/keyst10300/initialize', {
      params: { yearMonth: yearMonth }
    });
    this.SET_RESERVE_ID(data.reserveId)
    this.SET_TEAM(data.team);
    this.SET_RESERVE_INFO_LIST(data.reserveInfoList);
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
  public async reserve(reqForm: Keyst10300ReserveQ) {
    const { data } = await $axios.put(
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
   * 行削除(管理者)
   * @param reqForm
   */
  @Action({ rawError: true })
  public async deleteLine(reqForm: Keyst10300DeleteQ) {
    const { data } = await $axios.post(
      '/keyst10300/deleteLine', reqForm
    );
    await this.initialize();
  }

  /**
   * 予約取消(一般ユーザー)
   * @param reqForm
   */
  @Action({ rawError: true })
  public async cancelReserve(reqForm: Keyst10300CancelQ) {
    const { data } = await $axios.post(
      '/keyst10300/cancelReserve', reqForm
    );
    await this.initialize();
=======
    alert('aaa');
    // const { data } = await $axios.get('/keyst10300/initialize');
    // await this.SET_RESERVE_HEADER_LIST(data.resrveHeaderList);
>>>>>>> dbの値を渡す
  }

}
