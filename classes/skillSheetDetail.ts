export default class SkillSheetDetail {
  prjCode: string = '';
  prjStartDate: string = '';
  prjEndDate: string = '';
  bizInCharge: string = '';
  comment: string = '';
  devScale: string[] = [];
  os: string = '';
  db: string = '';
  fwMwTool: string[] = [];
  pgLangList: string[] = [];
  sowManagement: boolean = false;
  sowReqDefinition: boolean = false;
  sowBasicDesign: boolean = false;
  sowDetailDesign: boolean = false;
  sowImplementation: boolean = false;
  sowTest: boolean = false;
  sowMaintenanceOperation: boolean = false;
  versionExKey: number | null = null;
}
