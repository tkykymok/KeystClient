<template>
  <div class="p-4">
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客コード</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客担当者名</th>
      </tr>
      <tr>
        <td v-if='registerFlg' class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='_custMaster.custCode'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td v-if='updateFlg' class="p-3 text-gray-800 border border-b text-center">{{ _custMaster.custCode }}</td>
        <td class="p-3 text-gray-800 border border-b text-center">
          <input
            v-model='_custMaster.custName'
            type="text" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input
            v-model='_custMaster.custPic'
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
    <button
      v-if='updateFlg'
      @click='update'
      class='px-4 py-2 my-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
      更新
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import _ from 'lodash';
import CustMaster from '~/classes/custMaster';
import Keyst10700SaveQ from '~/classes/form/keyst10700SaveQ';
import Keyst10700UpdateQ from '~/classes/form/keyst10700UpdateQ';
import { Keyst10700Module } from '~/store';

@Component({
  name: 'Keyst10701'
})
export default class extends Vue {
  @Prop({ required: true })
  registerFlg!: boolean;
  @Prop({ required: true })
  updateFlg!: boolean;
  @PropSync('custMaster', { required: false, default: null })
  _custMaster!: CustMaster;

  /**
   * 顧客マスタ新規保存
   */
  async save() {
    // 顧客マスタをリクエストFormに移送する。
    // state(this._custMaster)とForm(Keyst10700SaveQ)のプロパティが一致するものだけで、Form(Keyst10700SaveQ)を作成する。
    let reqForm: Keyst10700SaveQ = _.assign(new Keyst10700SaveQ(), _.pick(this._custMaster, _.keys(new Keyst10700SaveQ())));
    await Keyst10700Module.save(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    })
  }

  /**
   * 顧客マスタ更新
   */
  async update() {
    // 顧客マスタをリクエストFormに移送する。
    // state(this._custMaster)とForm(Keyst10700UpdateQ)のプロパティが一致するものだけで、Form(Keyst10700UpdateQ)を作成する。
    let reqForm: Keyst10700UpdateQ = _.assign(new Keyst10700UpdateQ(), _.pick(this._custMaster, _.keys(new Keyst10700UpdateQ())));
    await Keyst10700Module.update(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }
}
</script>

<style></style>