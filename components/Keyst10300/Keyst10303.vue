// 1on1コメント
<template>
  <div class='flex'>
    <table class=''>
      <tbody>
        <div v-for='reserveInfoDetail in reserveInfoDetailList' :key='reserveInfoDetail.reserveId' class='mt-5'>
          <tr class=''>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>実施日:{{ reserveInfoDetail.reserveDate }}</th>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>担当者:{{ reserveInfoDetail.userName }}</th>
          </tr>
          <tr class=''>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>自身のコメント</th>
            <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>担当者のコメント</th>
          </tr>
          <tr>
            <th class='bg-gray-200 border border-gray-300'>
              <textarea v-model="reserveInfoDetail.userComment" rows="5" cols="60" class='border border-gray-300 bg-white' />
            </th>
            <th class='bg-gray-200 border border-gray-300'>
              <textarea v-model="reserveInfoDetail.managerComment" rows="5" cols="60" disabled class='border border-gray-300 bg-white' />
            </th>
          </tr>
          <button v-if="reserveInfoDetail.userComment == null" class='p-1 mt-2 mb-2 float-right text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'
            @click="saveComment(reserveInfoDetail.reserveId,
              reserveInfoDetail.reserveDate,
              reserveInfoDetail.reserveTime,
              reserveInfoDetail.userComment)">
            登録
          </button>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import LoginUserInfo from '~/classes/loginUserInfo';
import ReserveInfoDetail from '~/classes/reserveInfoDetail';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';

@Component({})
export default class Keyst10303 extends Vue{

  /** ログイン情報 */
  @Prop({ required: true, default: null })
  loginUserInfo!: LoginUserInfo;

  /** 予約詳細情報 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoDetailList!: ReserveInfoDetail[];

  saveComment(reserveId: number,
              reserveDate: string,
              reserveTime: string,
              userComment: string) {
    try {
      let reqForm: Keyst10300UpdateQ = new Keyst10300UpdateQ();
      reqForm.reserveId = reserveId;
      reqForm.reserveDate = reserveDate;
      reqForm.reserveTime = reserveTime;
      reqForm.userComment = userComment;
      Keyst10300Module.saveComment(reqForm);
    } catch (error) {
    }
  }

}
</script>

<style></style>
