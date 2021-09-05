import {
  VuexModule,
  Module,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import PrjMaster from '~/classes/prjMaster';
import PrjUserAllocation from '~/classes/prjUserAllocation';

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

  @Mutation
  SET_PRJ_MASTER(value: PrjMaster) {
    Object.assign(this._prjMaster, value);
  }

  @Mutation
  SET_PRJ_USER_ALLOCATION_LIST(value: PrjUserAllocation[]) {
    // 案件割当明細一覧を初期化する
    this._prjUserAllocationList.splice(0);
    // サーバーから取得した案件割当明細一覧全件を追加する
    value.forEach(obj => {
      this._prjUserAllocationList.push(obj);
    })
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
}