export const Gender = {
  def: {
    Male: { code: 1, name: '男' },
    FeMale: { code: 2, name: '女' }
  },
  getGenderByCode(code: number) {
    return Object.values(this.def).find(obj => obj.code === code)?.name;
  }
} as const;

type Gender = typeof Gender[keyof typeof Gender];

