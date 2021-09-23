// 予約状況テーブル
<template>
  <div class='mt-5'>
    <table class='w-full'>
      <thead>
        <p class='py-3 font-bold text-gray-600'>予約状況</p>
      </thead>
      <tbody class=''>
        <div v-for='reserveInfo in reserveInfoList' :key='reserveInfo.reserveId'>
          <tr class='flex'>
            <th class='w-1/5 p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 block text-left'>{{ reserveInfo.reserveDate }} {{ reserveInfo.reserveTime }}</th>
            <td class='w-1/6 p-2 text-gray-800 border border-b block'>
              {{ reserveInfo.userName }}
              <div v-if="loginUserInfo.adminFlg == false" class="mt-2">
                <img v-if="reserveInfo.feeling == 1" src="/_nuxt/assets/img/sun.png" alt="" class="w-5 h-5">
                <img v-if="reserveInfo.feeling == 2" src="/_nuxt/assets/img/cloud.png" alt="" class="w-5 h-5">
                <img v-if="reserveInfo.feeling == 3" src="/_nuxt/assets/img/rain.png" alt="" class="w-5 h-5">
            </div>
            </td>
            <td v-if="loginUserInfo.adminFlg == false" class='w-1/3 bg-gray-200 border border-gray-300'>
              <div class='font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>備考</div>
              <textarea v-model="reserveInfo.remark" disabled class='w-full bg-white border border-gray-300' rows="4" />
            </td>
            <td v-if="loginUserInfo.adminFlg == false" class='w-1/3 bg-gray-200 border border-gray-300'>
              <div class='font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>ユーザーコメント</div>
              <textarea v-model="reserveInfo.userComment" disabled class='w-full bg-white border border-gray-300' rows="4" />
            </td>
            <td v-if="loginUserInfo.adminFlg == false" class='w-1/3 bg-gray-200 border border-gray-300'>
              <div class='font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 text-left'>担当コメント</div>
              <textarea v-model="reserveInfo.managerComment" class='w-full border border-gray-300' rows="4" />
            </td>

            <!-- 管理者は登録ボタン、削除ボタン -->
            <td v-if="loginUserInfo.adminFlg == false" class='text-center p-2 text-gray-800 border border-b block'>
              <button class='mt-4 p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'
                @click="saveComment(reserveInfo.reserveId,
                  reserveInfo.reserveDate,
                  reserveInfo.reserveTime,
                  reserveInfo.managerComment
                  )">
                登録
              </button>
              <button class='mt-4 p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer' @click="delReserve">削除</button>
            </td>
            <!-- ユーザーは登録ボタンor削除ボタン -->
            <td v-if="loginUserInfo.adminFlg == true" class='w-16 p-2 text-center text-gray-800 border border-b block'>
              <button v-if="reserveInfo.userId === null" class='p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'
                @click="show(
                  reserveInfo.reserveId,
                  reserveInfo.reserveDate,
                  reserveInfo.reserveTime
                )">
                登録
              </button>
              <button v-else-if="reserveInfo.userId === loginUserInfo.userId" class='p-1 text-sm font-bold text-gray-200 bg-red-500 border rounded-lg cursor-pointer'
                @click="delReserve(
                  reserveInfo.reserveId,
                  reserveInfo.reserveDate,
                  reserveInfo.reserveTime
                  )">
                削除
              </button>
            </td>
          </tr>
        </div>

        <modal name="modal-content">
          <div class="p-10">
            <div class='flex justify-center'>
              <input type="radio" name="feeling" id="sun" value="1" v-model="feeling" class="hidden">
                <label for="sun" class="cursor-pointer checked:bg-gray-900">
                  <img src="/_nuxt/assets/img/sun.png" alt="" class="w-30 h-30">
                </label>
              <input type="radio" name="feeling" id="cloud" value="2" v-model="feeling" class="hidden">
                <label for="cloud" class="cursor-pointer checked:bg-gray-900">
                  <img src="/_nuxt/assets/img/cloud.png" alt="" class="w-30 h-30 ml-8">
                </label>
              <input type="radio" name="feeling" id="rain" value="3" v-model="feeling" class="hidden">
                <label for="rain" class="cursor-pointer checked:bg-gray-900">
                  <img src="/_nuxt/assets/img/rain.png" alt="" class="w-30 h-30 ml-8">
                </label>
            </div>
            <div class='text-center mt-8'>
              <textarea class='w-full border border-gray-300' v-model="remark" />
              <button class='p-1 mt-2 font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer'
                @click="reserve(
                  feeling,
                  remark
                )">
                OK
              </button>
            </div>
          </div>
        </modal>

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
import Keyst10300SaveQ1 from '~/classes/form/keyst10300SaveQ1';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';


@Component({})
export default class Keyst10302 extends Vue{

  public modalReserveId: number | null = null;
  public modalReserveDate: string = '';
  public modalReserveTime: string = '';

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

  /**
   * 面談日時登録（ユーザー）
   */
  reserve(feeling: string,
          remark: string) {
    try {
      let reqForm: Keyst10300SaveQ1 = new Keyst10300SaveQ1();
      reqForm.reserveId = this.modalReserveId;
      reqForm.reserveDate = this.modalReserveDate;
      reqForm.reserveTime = this.modalReserveTime;
      reqForm.feeling = feeling;
      reqForm.remark = remark;
      Keyst10300Module.reserve(reqForm);
      this.hide();
    } catch (error) {
    }
  }

  show(reserveId: number,
      reserveDate: string,
      reserveTime: string) {
    this.modalReserveId = reserveId;
    this.modalReserveDate = reserveDate;
    this.modalReserveTime = reserveTime;
    this.$modal.show("modal-content");
  }
  hide() {
    this.$modal.hide("modal-content");
  }

  saveComment(reserveId: number,
              reserveDate: string,
              reserveTime: string,
              managerComment: string) {
    try {
      let reqForm: Keyst10300UpdateQ = new Keyst10300UpdateQ();
      reqForm.reserveId = reserveId;
      reqForm.reserveDate = reserveDate;
      reqForm.reserveTime = reserveTime;
      reqForm.managerComment = managerComment;
      Keyst10300Module.saveComment(reqForm);
    } catch (error) {
    }
  }

  delReserve(reserveId: number,
            reserveDate: string,
            reserveTime: string,) {
    try {
      let reqForm: Keyst10300UpdateQ = new Keyst10300UpdateQ();
      reqForm.reserveId = reserveId;
      reqForm.reserveDate = reserveDate;
      reqForm.reserveTime = reserveTime;
      Keyst10300Module.delReserve(reqForm);
    } catch (error) {
    }
  }

}
</script>

<style></style>
