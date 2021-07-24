export default class SkillSheetDetail {
  refNo: number | null = null;
  prjCode: string = '';
  prjStartDate: string = '';
  prjEndDate: string = '';
  bizInCharge: string = '';
  comment: string = '';
  devScale: string[] = ['','',''];
  os: string = '';
  db: string = '';
  fwMwTool: string[] = ['','',''];
  pgLang: string[] = [];
  sowManagement: boolean = false;
  sowReqDefinition: boolean = false;
  sowBasicDesign: boolean = false;
  sowDetailDesign: boolean = false;
  sowImplementation: boolean = false;
  sowTest: boolean = false;
  sowMaintenanceOperation: boolean = false;
  versionExKey: number | null = null;
}
