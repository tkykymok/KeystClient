import Skill from "./skill";

export default class MemberInfoList {
  userId: number | null = null;
  userName: string = '';
  team: string = '';
  profileImageDirectory: string = '';
  skillList: Skill[] = [];
  projectName: string = '';
  contractPrice: string = '';
  projectStartDate: string = '';
}
