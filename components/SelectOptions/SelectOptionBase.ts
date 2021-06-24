import { Vue } from 'nuxt-property-decorator';

export default class SelectOptionBase extends Vue {
  /** 選択肢一覧 */
  public selectOptionList: selectOption[] = [];
  /** 選択済み */
  public selected: string = '';
}

export type selectOption = {
  code: string,
  name: string
}
