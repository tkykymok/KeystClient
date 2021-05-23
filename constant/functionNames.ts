export const FunctionNames= {
  index: '',
  Keyst10200: "スキルシート",
} as const;

type FunctionNames = typeof FunctionNames[keyof typeof FunctionNames];
