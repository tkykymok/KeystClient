<template>
  <div class="p-4 pb-12">
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件コード</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">エンド顧客名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">備考</th>
      </tr>
      <tr v-if='registerFlg'>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
      </tr>
      <tr v-if='updateFlg'>
        <td class="p-3 text-gray-800 border border-b text-center">{{ _prjMaster.prjCode }}</td>
        <td class="p-3 text-gray-800 border border-b">
          <input :value='_prjMaster.prjName' type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input :value='_prjMaster.custCode' type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input :value='_prjMaster.endCustName' type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input :value='_prjMaster.remark' type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
      </tr>
    </table>
    <button
      v-if='registerFlg'
      class='px-4 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
      登録
    </button>
    <button
      v-if='updateFlg'
      class='px-4 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
      更新
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import PrjMaster from '~/classes/prjMaster';

@Component({
  name: 'Keyst10501',
})
export default class extends Vue {
  @Prop({ required: true })
  registerFlg!: boolean;
  @Prop({ required: true })
  updateFlg!: boolean;
  @PropSync('prjMaster', { required: false, default: null })
  _prjMaster!: PrjMaster;
}
</script>

<style></style>
