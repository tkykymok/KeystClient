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
import Keyst10200InitS from '~/classes/resform/keyst10200InitS';

export interface IKeyst10200 {
  skillSheetInfoList: SkillSheetInfo[],
  skillSheetHeader: SkillSheetHeader | null,
  skillSheetDetail: SkillSheetDetail[] | null,
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
  private _skillSheetDetail: SkillSheetDetail[] = [];

  get skillSheetInfoList(): SkillSheetInfo[] {
    return this._skillSheetInfoList;
  }

  get skillSheetHeader(): SkillSheetHeader {
    return this._skillSheetHeader;
  }

  get skillSheetDetail(): SkillSheetDetail[] {
    return this._skillSheetDetail;
  }

  @Mutation
  SET_SKILL_SHEET_INFO_LIST(value: SkillSheetInfo[]) {
    this._skillSheetInfoList = value;
  }

  @Mutation
  SET_SKILL_SHEET_HEADER(value: SkillSheetHeader) {
    Object.assign(this._skillSheetHeader, value);
  }

  @Mutation
  SET_USER_BASIC_INFO(value: SkillSheetHeader) {
    Object.assign(this._skillSheetHeader, value);
    this._skillSheetHeader.qualificationList = value.qualificationList;
  }

  @Mutation
  SET_SKILL_SHEET_DETAIL(value: SkillSheetDetail[]) {
    this._skillSheetDetail = value;
  }

  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get('/keyst10200');
    // レスポンスデータをinitSに移送する。
    let resForm: Keyst10200InitS = new Keyst10200InitS();
    Object.assign(resForm, data);
    await this.SET_SKILL_SHEET_INFO_LIST(resForm.skillSheetInfoList);
    await this.SET_USER_BASIC_INFO(resForm.userBasicInfo);
  }
}
