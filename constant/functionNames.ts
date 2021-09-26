export const FunctionNames = {
  KEYST10100: { id: 'KEYST10100', name: 'プロフィール' },
  KEYST10200: { id: 'KEYST10200', name: 'スキルシート' },
  KEYST10300: { id: 'KEYST10300', name: '1on1予約' },
  KEYST10400: { id: 'KEYST10400', name: 'メンバー一覧' },
} as const;

type FunctionNames = typeof FunctionNames[keyof typeof FunctionNames];
