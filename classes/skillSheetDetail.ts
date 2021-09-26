export default class SkillSheetDetail {
  refNo: number | null = null;
  prjCode: string = '';
  prjStartDate: string = '';
  prjEndDate: string = '';
  bizInCharge: string = '';
  comment: string = '';
  devScale: string[] = ['0','0','0'];
  os: number | null = null;
  db: number | null = null;
  fwMwTool: string[] = ['','',''];
  pgLang: number[] = [];
  sowManagement: boolean = false;
  sowReqDefinition: boolean = false;
  sowBasicDesign: boolean = false;
  sowDetailDesign: boolean = false;
  sowImplementation: boolean = false;
  sowTest: boolean = false;
  sowMaintenanceOperation: boolean = false;
}
