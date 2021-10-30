export const FunctionNames = {
  KEYST10000: { id: 'KEYST10000', name: 'ダッシュボード' },
  KEYST10100: { id: 'KEYST10100', name: 'プロフィール' },
  KEYST10200: { id: 'KEYST10200', name: 'スキルシート' },
  KEYST10300: { id: 'KEYST10300', name: '1on1予約' },
  KEYST10400: { id: 'KEYST10400', name: 'メンバー一覧' },
  KEYST10500: { id: 'KEYST10500', name: '案件マスタ登録・一覧' },
  KEYST10600: { id: 'KEYST10600', name: 'お知らせ' },
  KEYST10700: { id: 'KEYST10700', name: '顧客マスタ登録' },
} as const;

type FunctionNames = typeof FunctionNames[keyof typeof FunctionNames];
