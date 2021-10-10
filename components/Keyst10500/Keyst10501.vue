<template>
  <div class="p-4">
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件コード<span class="text-red-500">*</span></th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件名<span class="text-red-500">*</span></th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客名<span class="text-red-500">*</span></th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">エンド顧客名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">備考</th>
      </tr>
      <tr>
        <td v-if='registerFlg' class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='_prjMaster.prjCode'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td v-if='updateFlg' class="p-3 text-gray-800 border border-b text-center">{{ _prjMaster.prjCode }}</td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='_prjMaster.prjName'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <CustName
            :custCode.sync='_prjMaster.custCode'
          />
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input
            v-model='_prjMaster.endCustName'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='_prjMaster.remark'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
      </tr>
    </table>
    <button
      v-if='registerFlg'
      @click='save'
      class='px-4 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
      登録
    </button>
    <Keyst10502
      v-if='updateFlg'
      :prjMaster.sync='_prjMaster'
      :prjUserAllocationList.sync='_prjUserAllocationList'
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import PrjMaster from '~/classes/prjMaster';
import PrjUserAllocation from '~/classes/prjUserAllocation';
import CustName from '~/components/SelectOptions/CustName.vue';
import Keyst10502 from '~/components/Keyst10500/Keyst10502.vue';
import _ from 'lodash';
import Keyst10500SaveQ from '~/classes/form/keyst10500SaveQ';
import { Keyst10500Module } from '~/store';

@Component({
  name: 'Keyst10501',
  components: {
    Keyst10502,
    CustName
  }
})
export default class extends Vue {
  @Prop({ required: true })
  registerFlg!: boolean;
  @Prop({ required: true })
  updateFlg!: boolean;
  @PropSync('prjMaster', { required: false, default: null })
  _prjMaster!: PrjMaster;
  @PropSync('prjUserAllocationList', { required: true, default: () => ([]) })
  _prjUserAllocationList!: PrjUserAllocation[];

  /**
   * 案件マスタ新規保存
   */
  async save() {
    // 案件マスタをリクエストFormに移送する。
    // state(this._prjMaster)とForm(Keyst10500SaveQ)のプロパティが一致するものだけで、Form(Keyst10500SaveQ)を作成する。
    let reqForm: Keyst10500SaveQ = _.assign(new Keyst10500SaveQ(), _.pick(this._prjMaster, _.keys(new Keyst10500SaveQ())));
    await Keyst10500Module.save(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }
}
</script>

<style></style>
