<template>
  <div class='pt-4'>
    <div class='flex justify-end w-full'>
      <button
        @click="createPrj"
        class='px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'>
        新規作成
      </button>
    </div>
    <div
      v-show="createFlg"
      class="flex justify-center items-center pt-4">
      <table class="w-full ml-12 table-fixed shadow-md">
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2'>案件名</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>顧客名</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>契約単価</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>稼働開始年月日</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>稼働終了年月日</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>備考</th>
          <td
            :value="xxx"
            class='p-3 text-gray-800 border border-b'>
            <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
          </td>
        </tr>
      </table>
    </div>
    <div 
      v-show="createFlg"
      class='pt-4 pb-8'>
      <button
        @click="savePrj"
        class='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
      >新規保存
      </button>
      <button
        class='px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-400 active:outline-none focus:outline-none'
        @click="cancelCreatePrj"
      >キャンセル
      </button>
    </div>
    <div class="mt-4 mb-8">
      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center mr-8">
          <p class="mb-2 font-bold">1</p>
          <button class="text-sm active:outline-none focus:outline-none">
            <font-awesome-icon
              @click="editPrj"
              icon='edit' class="text-blue-500 hover:text-blue-400 mb-2"/>
          </button>
          <button class="text-sm active:outline-none focus:outline-none">
            <font-awesome-icon
              @click="deletePrj"
              icon='trash-alt' class="text-gray-500 hover:text-gray-400"/>
          </button>
        </div>
        <table class="w-full table-fixed shadow-md">
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2'>案件名</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>案件名1</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>顧客名</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>山田 太郎</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>契約単価</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>500000円</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>稼働開始年月日</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>2020/04/01</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>稼働終了年月日</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>2021/03/30</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
          <tr>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>備考</th>
            <td
              v-show="!editFlg"
              class='p-5 text-gray-800 border border-b'>なし</td>
            <td
              :value="xxx"
              v-show="editFlg"
              class='p-3 text-gray-800 border border-b'>
              <input type="text" contenteditable="true" class="w-full p-2 active:outline-none focus:outline-none" >
            </td>
          </tr>
        </table>
      </div>
      <div class='py-4'>
        <button
          @click="updatePrj"
          v-show="editFlg"
          class='px-4 py-2 ml-2 bg-green-500 text-white rounded-md hover:bg-green-400 active:outline-none focus:outline-none'
        >更新
        </button>
        <button
          class='px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-400 active:outline-none focus:outline-none'
          @click="cancelEditPrj"
          v-show="editFlg"
        >キャンセル
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Keyst10500Module } from '~/utils/store-accessor';

@Component({
  name: 'Keyst10500',
  // async asyncData() {
  //   await Keyst10500Module.initialize();
  // }
})
export default class extends Vue {
  public createFlg: boolean = false;
  public editFlg: boolean = false;

  createPrj() {
    this.createFlg = true;
  }

  editPrj() {
    this.editFlg = true;
  }

  deletePrj() {
    confirm('本当に削除しますか？');
  }

  savePrj() {
    this.createFlg = false;
  }

  updatePrj() {
    this.editFlg = false;
  }

  cancelCreatePrj() {
    this.createFlg = false;
  }

  cancelEditPrj() {
    this.editFlg = false;
  }
}
</script>

<style></style>
