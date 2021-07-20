// 予約状況テーブル
<template>
  <div class='mt-5'>
    <table class=''>
      <thead>
        <p class='py-3 font-bold text-gray-600'>予約状況</p>
      </thead>
      <tbody class=''>
        <tr class='flex'>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>5/20</th>
          <td class='w-2/5 p-2 text-gray-800 border border-b block' @click='show'>17：00 ～ 17：30 田中 田中ああああああ</td>
          <td class='p-2 text-gray-800 border border-b block'><button class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'>削除</button></td>
        </tr>
        <tr class='flex'>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>5/20</th>
          <td class='w-2/5 p-2 text-gray-800 border border-b block' @click='show'>17：30 ～ 18：00</td>
          <td class='p-2 text-gray-800 border border-b block'><button class='p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'>予約</button></td>
        </tr>
        <tr class='flex'>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>5/22</th>
          <td class='w-2/5 p-2 text-gray-800 border border-b block' @click='show'>17：00 ～ 17：30 佐藤　ああああああああああああああああああああああああああああああ</td>
          <td class='p-2 text-gray-800 border border-b block'><button class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'>削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class Keyst10302 extends Vue{
      show() {
    this.$modal.show('modal-content');
  }
  hide() {
    this.$modal.hide('modal-content');
  }
}
</script>

<style></style>
