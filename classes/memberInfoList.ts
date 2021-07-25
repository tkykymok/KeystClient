import Skill from "./skill";

export default class MemberInfoList {
  userId: number | null = null;
  userName: string = '';
  team: string = '';
  prfImgStrgDrctry: string = '';
  skillList: Skill[] = [];
}
