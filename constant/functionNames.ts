export const FunctionNames = {
  Keyst10200: { id: 'Keyst10200', name: 'スキルシート' }
} as const;

type FunctionNames = typeof FunctionNames[keyof typeof FunctionNames];
