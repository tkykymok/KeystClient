import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import SkillSheetInfo from '~/classes/skillSheetInfo';
import SkillSheetHeader from '~/classes/skillSheetHeader';
import SkillSheetDetail from '~/classes/skillSheetDetail';
import Keyst10200SaveQ from '~/classes/form/keyst10200SaveQ';
import Keyst10200UpdateQ from '~/classes/form/keyst10200UpdateQ';

export interface IKeyst10200 {
  skillSheetInfoList: SkillSheetInfo[],
  skillSheetHeader: SkillSheetHeader | null,
  skillSheetDetailList: SkillSheetDetail[] | null,
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'keyst10200'
})
export default class Keyst10200 extends VuexModule implements IKeyst10200 {
  /** スキルシート情報一覧 */
  private _skillSheetInfoList: SkillSheetInfo[] = [];
  /** スキルシートヘッダー  */
  private _skillSheetHeader: SkillSheetHeader = new SkillSheetHeader();
  /** スキルシート明細 */
  private _skillSheetDetailList: SkillSheetDetail[] = [];

  get skillSheetInfoList(): SkillSheetInfo[] {
    return this._skillSheetInfoList;
  }

  get skillSheetHeader(): SkillSheetHeader {
    return this._skillSheetHeader;
  }

  get skillSheetDetailList(): SkillSheetDetail[] {
    return this._skillSheetDetailList;
  }

  @Mutation
  SET_SKILL_SHEET_INFO_LIST(value: SkillSheetInfo[]) {
    // スキルシート情報一覧を初期化する。
    this._skillSheetInfoList.splice(0);
    // サーバーから取得したスキルシート情報一覧全件を追加する。
    this._skillSheetInfoList.push(...value);
  }

  @Mutation
  SET_SKILL_SHEET_HEADER(value: SkillSheetHeader) {
    Object.assign(this._skillSheetHeader, value);
  }

  @Mutation
  SET_USER_BASIC_INFO(value: SkillSheetHeader) {
    Object.assign(this._skillSheetHeader, value);
  }

  @Mutation
  SET_SKILL_SHEET_DETAIL(value: SkillSheetDetail[]) {
    // スキルシート明細一覧を初期化する。
    this._skillSheetDetailList.splice(0);
    // サーバーから取得したスキルシート明細一覧全件を追加する。
    this._skillSheetDetailList.push(...value);
  }

  @Mutation
  ADD_ROW_4_SKILL_SHEET_DETAIL() {
    let newRow: SkillSheetDetail = new SkillSheetDetail();
    this._skillSheetDetailList.push(newRow);
  }

  @Mutation
  REMOVE_ROW_4_SKILL_SHEET_DETAIL(idx: number) {
    this._skillSheetDetailList.splice(idx, 1);
  }

  @Mutation
  ADD_ROW_4_FW_MW_TOOL(idx: number) {
    this._skillSheetDetailList[idx].fwMwTool.push('');
  }

  @Mutation
  CREATE_NEW_SKILL_SHEET() {
    // スキルシート明細一覧を初期化する。
    this._skillSheetDetailList.splice(0);
    // スキルシートヘッダーのユーザー基本情報以外を初期化する。
    this._skillSheetHeader.skillSheetId = null; // スキルシートID
    this._skillSheetHeader.strongArea = ''; // 得意分野
    this._skillSheetHeader.pr = ''; // PR
    this._skillSheetHeader.evaluationOfSales = ''; // 営業評価
  }

  /**
   * 初期表示
   */
  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10200/initialize');
    this.SET_SKILL_SHEET_INFO_LIST(data.skillSheetInfoList);
    this.SET_USER_BASIC_INFO(data.userBasicInfo);
  }

  /**
   * スキルシート表示
   * @param skillSheetId
   */
  @Action({ rawError: true })
  public async displaySkillSheet(skillSheetId: number) {
    const { data } = await $axios.get(
      '/keyst10200/displaySkillSheet', {
        params: { skillSheetId: skillSheetId }
      });
    this.SET_SKILL_SHEET_HEADER(data.skillSheetHeader);
    this.SET_SKILL_SHEET_DETAIL(data.skillSheetDetail);
  }

  /**
   * スキルシート新規保存
   * @param reqForm
   */
  @Action({ rawError: true })
  public async save(reqForm: Keyst10200SaveQ) {
    const { data } = await $axios.post(
      '/keyst10200/save', reqForm
    );

    // await this.displaySkillSheet(data.skillSheetId);
  }

  /**
   * スキルシート更新
   * @param reqForm
   */
  @Action({ rawError: true })
  public async update(reqForm: Keyst10200UpdateQ) {
    const { data } = await $axios.post(
      '/keyst10200/update', reqForm
    );

  }

}
