import Qualification from '~/classes/qualification';
import Skill from '~/classes/skill';

export default class SkillSheetHeader {
  userId: number | null = null;
  userName: string = '';
  userNameKana: string = '';
  gender: number | null = null;
  age: number | null = null;
  birthday: string = '';
  nationality: string = '';
  partnerFlg: boolean = false;
  nearestStation: string = '';
  finalEducationDate: string = '';
  finalEducationContent: string = '';
  skillList: Skill[] = [];
  qualificationList: Qualification[] = [];
  skillSheetId: number | null = null;
  strongArea: string = '';
  pr: string = '';
  evaluationOfSales: string = '';
  versionExKey: number | null = null;
}
