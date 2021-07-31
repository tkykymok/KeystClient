import Skill from "./skill";

export default class UserBasicInfo {
  userId: number | null = null;
  userName: string = '';
  team: string = '';
  prfImgStrgDrctry: string = '';
  skillList: Skill[] = [];
}
