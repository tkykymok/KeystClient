import Skill from "./skill";

export default class MemberInfo {
  userId: number | null = null;
  userName: string = '';
  userNameKana: string = '';
  email: string = '';
  loginId: string = '';
  loginPw: string = '';
  gender: string = '';
  age: number | null = null;
  birthday: string = '';
  nationality: string = '';
  partnerFlg: boolean = false;
  nearestStation: string = '';
  finalEducationDate: string = '';
  finalEducationContent: string = '';
  postalCode: string = '';
  address: string = '';
  phoneNumber: string = '';
  bankName: string = '';
  branchName: string = '';
  branchId: number | null = null;
  accountType: string = '';
  accountNumber: number | null = null;
  accountName: string = '';  
  prfImgStrgDrctry: string = '';
  skillList: Skill[] = [];
}
