import Qualification from '~/classes/qualification';

export default class SkillSheetHeader {
  userId: number | null = null;
  userName: string = '';
  userNameKana: string = '';
  gender: string = '';
  age: number | null = null;
  birthday: string = '';
  nationality: string = '';
  partnerFlg: string = '';
  nearestStation: string = '';
  finalEducationDate: string = '';
  finalEducationContent: string = '';
  skillList: string[] = [];
  qualificationList: Qualification[] = [];
  skillSheetId: number | null = null;
  strongArea: string = '';
  pr: string = '';
  evaluationOfSales: string = '';
  versionExKey: number | null = null;

}
