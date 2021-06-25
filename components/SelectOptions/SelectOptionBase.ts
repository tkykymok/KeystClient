import { Vue } from 'nuxt-property-decorator';

export default class SelectOptionBase extends Vue {
  /** 選択肢一覧 */
  public selectOptionList: selectOption[] = [];
}

export type selectOption = {
  code: string,
  name: string
}
