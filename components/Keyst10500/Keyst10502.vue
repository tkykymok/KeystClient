<template>
  <div class="pt-12">
    <p class="pb-4">参画者一覧</p>
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-8 m-2">
          <font-awesome-icon
            icon='plus-circle'
            class='cursor-pointer text-green-600 hover:text-green-400'
            @click='addRow4PrjUserAllocation'
          />
        </th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-40 m-2">ユーザー名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-40 m-2">契約単価</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-40 m-2">稼働開始日</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-40 m-2">稼働終了日</th>
      </tr>
      <tr v-for='(prjUserAllocation, idx) in _prjUserAllocationList' :key="idx">
        <td class="p-3 text-gray-800 border border-b text-center">
          <font-awesome-icon
            icon='times-circle'
            class='cursor-pointer text-red-600 hover:text-red-400'
            @click='removeRow4PrjUserAllocation(idx)'
          />
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <UserName
            :userId.sync='prjUserAllocation.userId'
          />
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='prjUserAllocation.contractPrice'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='prjUserAllocation.prjStartDate'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='prjUserAllocation.prjEndDate'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
      </tr>
    </table>
    <button
      @click='update'
      class='px-4 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
      更新
    </button>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import PrjMaster from '~/classes/prjMaster';
import PrjUserAllocation from '~/classes/prjUserAllocation';
import UserName from '~/components/SelectOptions/UserName.vue';
import _ from 'lodash';
import { Keyst10500Module } from '~/store';
import Keyst10500UpdateQ from '~/classes/form/keyst10500UpdateQ';
import Keyst10500UpdateQ1 from '~/classes/form/keyst10500UpdateQ1';
import Keyst10500UpdateQ2 from '~/classes/form/keyst10500UpdateQ2';

@Component({
  name: 'Keyst10502',
  components: {
    UserName
  },
})
export default class extends Vue {
  @PropSync('prjMaster', { required: false, default: null })
  _prjMaster!: PrjMaster;
  @PropSync('prjUserAllocationList', { required: true, default: () => ([]) })
  _prjUserAllocationList!: PrjUserAllocation[];

  /**
   * 案件割当明細部行追加イベント
   */
  addRow4PrjUserAllocation() {
    Keyst10500Module.ADD_ROW_4_PRJ_USER_ALLOCATION();
  }

  /**
   * 案件割当明細部行削除イベント
   * @param idx
   */
  removeRow4PrjUserAllocation(idx: number) {
    Keyst10500Module.REMOVE_ROW_4_PRJ_USER_ALLOCATION(idx);
  }

  /**
   * 案件マスタ・案件割当明細更新
   */
  async update() {
    // 案件マスタをリクエストFormに移送する。
    // state(this._prjMaster)とForm(Keyst10500UpdateQ1)のプロパティが一致するものだけで、Form(Keyst10500UpdateQ1)を作成する。
    let reqForm: Keyst10500UpdateQ = new Keyst10500UpdateQ();
    let prjMaster: Keyst10500UpdateQ1 = _.assign(new Keyst10500UpdateQ1(), _.pick(this._prjMaster, _.keys(new Keyst10500UpdateQ1())));
    reqForm.prjMaster = prjMaster;
    // 案件割当明細をリクエストFormに移送する。
    // state(this._prjUserAllocationList)とForm(Keyst10500UpdateQ2)のプロパティが一致するものだけで、Form(Keyst10500UpdateQ2)を作成する。
    this._prjUserAllocationList.forEach(obj => {
      let prjUserAllocation: Keyst10500UpdateQ2 = _.assign(new Keyst10500UpdateQ2(), _.pick(obj, _.keys(new Keyst10500UpdateQ2())));
      reqForm.prjUserAllocationList.push(prjUserAllocation);
    })
    await Keyst10500Module.update(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }
}
</script>

<style></style>
