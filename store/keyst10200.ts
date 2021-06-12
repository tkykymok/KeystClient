import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';

export type SkillSheetInfo = {
  skillSheetId: number | null,
  skillSheetRegDatetime: string
}

export type SkillSheetHeader = {
  userId: number | null,
  userName: string,
  userNameKana: string,
  gender: string,
  age: number | null,
  birthday: string,
  nationality: string,
  partnerFlg: string,
  nearestStation: string,
  finalEducationDate: string,
  finalEducationContent: string,
  skills: string[],
  qualificationList: Qualification[],
  skillSheetId: number | null,
  strongArea: string,
  pr: string,
  evaluationOfSales: string,
  deleteFlg: string,
  versionExKey: number | null,
}

export type SkillSheetDetail = {
  prjCode: string,
  prjStartDate: string,
  prjEndDate: string,
  bizInCharge: string,
  comment: string,
  devScale: string,
  os: string,
  db: string,
  fwMwTool: string[],
  pgLang: string,
  scopeOfWork: string,
  versionExKey: number | null
}

export type Qualification = {
  qualifiedDate: string,
  qualificationContent: string
}

export interface IKeyst10200 {
  skillSheetInfoList: SkillSheetInfo[],
  skillSheetHeader: SkillSheetHeader | null,
  SkillSheetDetail: SkillSheetDetail | null,
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
  private _skillSheetHeader: SkillSheetHeader | null = null;
  /** スキルシート明細 */
  private _SkillSheetDetail: SkillSheetDetail | null = null;

  get skillSheetInfoList(): SkillSheetInfo[] {
    return this._skillSheetInfoList;
  }

  get skillSheetHeader(): SkillSheetHeader | null {
    return this._skillSheetHeader;
  }

  get SkillSheetDetail(): SkillSheetDetail | null {
    return this._SkillSheetDetail;
  }

  @Mutation
  SET_SKILL_SHEET_INFO_LIST(value: SkillSheetInfo[]) {
    this._skillSheetInfoList = value;
  }

  @Mutation
  SET_SKILL_SHEET_HEADER(value: SkillSheetHeader | null) {
    this._skillSheetHeader = value;
  }

  @Mutation
  SET_SKILL_SHEET_DETAIL(value: SkillSheetDetail | null) {
    this._SkillSheetDetail = value;
  }

  @Action({ rawError: true })
  public async initialize() {
    const { data } = await $axios.get(
      'http://localhost:8080/api/keyst10200'
    );
    await this.SET_SKILL_SHEET_INFO_LIST(data.skillSheetInfoList);
  }
}
