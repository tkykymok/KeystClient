import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import CustMaster from '~/classes/custMaster';
import Keyst10700UpdateQ from '~/classes/form/keyst10700UpdateQ';
import Keyst10700SaveQ from '~/classes/form/keyst10700SaveQ';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

export interface IKeyst10700 {
  custMaster: CustMaster | null;
}

@Module({
  // Nuxt.jsのモジュールであることを宣言
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst10700'
})
export default class Keyst10700 extends VuexModule implements IKeyst10700 {
  /** 顧客マスタ */ 
  private _custMaster: CustMaster = new CustMaster();

  get custMaster(): CustMaster {
    return this._custMaster;
  }

  /**
   * 顧客マスタを設定する
   * @param value
   * @constructor
   */
  @Mutation
  SET_CUST_MASTER(value: CustMaster) {
    Object.assign(this._custMaster, value);
  }

  /**
   * 顧客マスタを空にする
   * @constructor
   */
  @Mutation
  RESET_CUST_MASTER() {
    Object.assign(this._custMaster, new CustMaster());
  }

  /**
   * 顧客マスタ検索
   * @param custCode
   * @return matchFlg
   */
  @Action({ rawError: true })
  public async search(custCode: string) {
    // 顧客コードリストを取得
    const { data } = await $axios.get('/selectOption/custName');
    var selectOptionList: selectOption[] = data;
    selectOptionList.shift();
    // custCodeの値が顧客コードリストに存在するかチェック
    var matchFlg = false;
    selectOptionList.forEach(option => {
      if (option.code === custCode) {
        matchFlg = true;
      }
    })
    // custCodeの値が顧客コードリストに存在する場合
    if (matchFlg) {
      const { data } = await $axios.get(
        '/keyst10700/search', {
        params: {custCode: custCode}
      });
      this.SET_CUST_MASTER(data);
    }
    return matchFlg;
  }

  /**
    * 顧客マスタ保存
    * @param reqForm
    */
  @Action({ rawError: true })
  public async save(reqForm: Keyst10700SaveQ) {
    await $axios.post('/keyst10700/save', reqForm);
  }

  /**
    * 顧客マスタ更新
    * @param reqForm
    */
  @Action({ rawError: true })
  public async update(reqForm: Keyst10700UpdateQ) {
    await $axios.put('/keyst10700/update', reqForm);
  }
}