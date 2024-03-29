import PrjInfo from "./prjInfo";
import Skill from "./skill";

export default class UserInfo4Keyst10400 {
  userId: number | null = null;
  userName: string = '';
  userNameKana: string = '';
  team: string = '';
  prfImgStrgDrctry: string = '';
  skillList: Skill[] = [];
  prjInfoList: PrjInfo[] = [];
}
