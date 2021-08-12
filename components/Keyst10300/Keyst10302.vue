// 予約状況テーブル
<template>
  <div class='mt-5'>
    <table class='w-1/2'>
      <thead>
        <p class='py-3 font-bold text-gray-600'>予約状況</p>
      </thead>
      <tbody class=''>
        <div v-for='reserveInfo in reserveInfoList' :key='reserveInfo.reserveId'>
          <tr class='flex'>
            <th class='w-1/3 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>{{ reserveInfo.reserveDate }} {{ reserveInfo.reserveTime }}</th>
            <td class='w-1/5 p-2 text-gray-800 border border-b block' @click='show'>{{ reserveInfo.userName }}</td>
            <!-- ユーザーなら登録ボタン。管理者なら削除ボタン -->
            <td class='p-2 text-gray-800 border border-b block'><button class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'>削除</button></td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ReserveInfo from '~/classes/reserveInfo';

@Component({})
export default class Keyst10302 extends Vue{
    /** 予約状況一覧 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoList!: ReserveInfo[];

  show() {
    this.$modal.show('modal-content');
  }
  hide() {
    this.$modal.hide('modal-content');
  }
}
</script>

<style></style>
