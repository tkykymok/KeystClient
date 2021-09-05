// 予約状況テーブル
<template>
  <div class='mt-5'>
    <table class='w-9/12'>
      <thead>
        <p class='py-3 font-bold text-gray-600'>予約状況</p>
      </thead>
      <tbody class=''>
        <div v-for='reserveInfo in reserveInfoList' :key='reserveInfo.reserveId'>
          <tr class='flex'>
            <th class='w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>{{ reserveInfo.reserveDate }} {{ reserveInfo.reserveTime }}</th>
            <!-- <td v-if="loginUserInfo.adminFlg == false" class='w-1/6 p-2 text-gray-800 border border-b block'>{{ reserveInfo.userName }}</td> -->
            <td class='w-1/6 p-2 text-gray-800 border border-b block'>{{ reserveInfo.userName }}</td>
            <td v-if="loginUserInfo.adminFlg == false" class='w-1/3 bg-gray-200 border border-gray-300'>
              <div class='font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>ユーザーコメント</div>
              <textarea class='w-full border border-gray-300'>{{ reserveInfo.userComment }}</textarea>
            </td>
            <td v-if="loginUserInfo.adminFlg == false" class='w-1/3 bg-gray-200 border border-gray-300'>
              <div class='font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>担当コメント</div>
              <textarea class='w-full border border-gray-300'>{{ reserveInfo.managerComment }}</textarea>
            </td>

            <!-- 管理者は登録ボタン、削除ボタン -->
            <td v-if="loginUserInfo.adminFlg == false" class='p-2 text-gray-800 border border-b block'>
              <button class='p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'>登録</button>
            </td>
            <td v-if="loginUserInfo.adminFlg == false" class='p-2 text-gray-800 border border-b block'>
              <button class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'>削除</button>
            </td>
            <!-- ユーザーは登録ボタンor削除ボタン -->
            <td v-if="loginUserInfo.adminFlg == true" class='w-16 p-2 text-center text-gray-800 border border-b block'>
              <button v-if="reserveInfo.userId === null" class='p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'>登録</button>
              <button v-else-if="reserveInfo.userId === loginUserInfo.userId" class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'>削除</button>
            </td>
          </tr>
        </div>
      </tbody>
    </table>

  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import LoginUserInfo from '~/classes/loginUserInfo';
import ReserveInfo from '~/classes/reserveInfo';
import ReserveInfoDetail from '~/classes/reserveInfoDetail';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';


@Component({})
export default class Keyst10302 extends Vue{
  /** ログイン情報 */
  @Prop({ required: true, default: null })
  loginUserInfo!: LoginUserInfo;

  /** 予約状況一覧 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoList!: ReserveInfo[];

    /**
   * 予約詳細一覧
   */
  get reserveInfoDetailList(): ReserveInfoDetail[] {
    return Keyst10300Module.reserveInfoDetailList;
  }

}
</script>

<style></style>
