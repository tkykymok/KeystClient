import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import PrjMaster from '~/classes/prjMaster';
import PrjUserAllocation from '~/classes/prjUserAllocation';
import Keyst10500SaveQ from '~/classes/form/keyst10500SaveQ';
import Keyst10500UpdateQ from '~/classes/form/keyst10500UpdateQ';

export interface IKeyst10500 {
  prjMaster: PrjMaster | null;
  prjUserAllocationList: PrjUserAllocation[]; 
}

@Module({
  // Nuxt.jsのモジュールであることを宣言
  stateFactory: true,
  // それぞれのモジュールに自動的に名前空間を付与
  namespaced: true,
  name: 'keyst10500'
})
export default class Keyst10500 extends VuexModule implements IKeyst10500 {
  // Stateを作成
  // 案件マスタ
  private _prjMaster: PrjMaster = new PrjMaster();
  // 案件割当明細一覧
  private _prjUserAllocationList: PrjUserAllocation[] = [];

  // 上記のStateにアクセスするgetterを作成
  get prjMaster(): PrjMaster {
    return this._prjMaster;
  }

  get prjUserAllocationList(): PrjUserAllocation[] {
    return this._prjUserAllocationList;
  }

  /**
   * 案件マスタを設定する。
   * @param value
   * @constructor
   */
  @Mutation
  SET_PRJ_MASTER(value: PrjMaster) {
    Object.assign(this._prjMaster, value);
  }

  /**
   * 案件割当明細を設定する。
   * @param value
   * @constructor
   */
  @Mutation
  SET_PRJ_USER_ALLOCATION_LIST(value: PrjUserAllocation[]) {
    // 案件割当明細一覧を初期化する
    this._prjUserAllocationList.splice(0);
    // サーバーから取得した案件割当明細一覧全件を追加する
    value.forEach(obj => {
      this._prjUserAllocationList.push(obj);
    })
  }

  /**
   * 案件マスタを空にする。
   * @constructor
   */
  @Mutation
  RESET_PRJ_MASTER() {
    Object.assign(this._prjMaster, new PrjMaster());
  }

  /**
   * 行追加(案件割当明細)
   * @constructor
   */
  @Mutation
  ADD_ROW_4_PRJ_USER_ALLOCATION() {
    let newRow: PrjUserAllocation = new PrjUserAllocation();
    this._prjUserAllocationList.push(newRow);
  }

  /**
   * 行削除(案件割当明細)
   * @param idx
   * @constructor
   */
  @Mutation
  REMOVE_ROW_4_PRJ_USER_ALLOCATION(idx: number) {
    this._prjUserAllocationList.splice(idx, 1);
  }

  // actionメソッド内のerrorをthrowしたい場合は「rawError: true」を記述する
  /**
   * 案件割当明細検索
   * @param prjCode
   */
  @Action({ rawError: true })
  public async search(prjCode: string) {
    if (prjCode != '') {
      const { data } = await $axios.get(
        '/keyst10500/search', {
        params: {prjCode: prjCode}
      });
      this.SET_PRJ_MASTER(data.prjMaster);
      this.SET_PRJ_USER_ALLOCATION_LIST(data.prjUserAllocation);
    }
  }

  /**
   * 案件マスタリセット
   */
  @Action({ rawError: true })
  public async reset() {
    this.RESET_PRJ_MASTER();
  }

  /**
   * 案件マスタ新規保存
   * @param reqForm
   */
  @Action({ rawError: true })
  public async save(reqForm: Keyst10500SaveQ) {
    await $axios.post('/keyst10500/save', reqForm);
    // 取得APIを書いていないので、画面的には変わらない
  }

  /**
   * 案件マスタ・案件割当明細更新
   * @param reqForm
   */
  @Action({ rawError: true })
  public async update(reqForm: Keyst10500UpdateQ) {
    await $axios.put('/keyst10500/update', reqForm);
    // 取得APIを書いていないので、画面的には変わらない
  }
}