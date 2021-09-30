// 予約状況テーブル
<template>
  <div
    :class="loginUserInfo.adminFlg? 'w-full': 'w-2/5 overflow-y-scroll scroll'"
    :style="loginUserInfo.adminFlg? 'height :auto': 'height: 400px'"
  >
    <p
      v-if='reserveInfoList.length'
      class='py-3 font-bold text-gray-600'>予約状況</p>
    <table
      v-if='reserveInfoList.length'
      class='shadow-md w-full table-fixed' style='height: auto'
    >
      <thead>
        <tr>
          <th class='w-1/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left scr'>開始日時</th>
          <th class='w-2/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>氏名</th>
          <th class='w-3/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left' v-if='loginUserInfo.adminFlg'>備考</th>
          <th class='w-3/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left' v-if='loginUserInfo.adminFlg'>内容</th>
          <th class='w-3/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left' v-if='loginUserInfo.adminFlg'>1on1担当者コメント</th>
          <th class='w-1/12 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'></th>
        </tr>
      </thead>
      <tbody class='overflow-y-scroll' style='height: 300px'>
        <tr v-for='(reserveInfo, idx) in reserveInfoList' :key='idx'>
          <!-- 開始日時 -->
          <td
            class='p-3 font-bold uppercase text-gray-600 border border-gray-300 text-left'
            :class="loginUserInfo.adminFlg? 'w-24': 'w-32'"
          >
            {{ convertDateToMonthDay(reserveInfo.reserveDate) }} {{ reserveInfo.reserveTime }}
          </td>
          <!-- 氏名 -->
          <td class='p-3 text-gray-800 border border-b'>
            <div class='mt-2 flex'>
              <template v-if='loginUserInfo.adminFlg'>
                <img v-if='reserveInfo.feeling === 1' src='/_nuxt/assets/img/sun.png' alt='' class='w-5 h-6'>
                <img v-if='reserveInfo.feeling === 2' src='/_nuxt/assets/img/cloud.png' alt='' class='w-5 h-6'>
                <img v-if='reserveInfo.feeling === 3' src='/_nuxt/assets/img/rain.png' alt='' class='w-5 h-6'>
              </template>
              <span class='px-2'>{{ reserveInfo.userName }}</span>
            </div>
          </td>
          <!-- 備考 -->
          <td v-if='loginUserInfo.adminFlg' class='p-1 border border-gray-300'>
            <textarea
              v-model='reserveInfo.remark'
              class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              disabled
              rows='4'
            />
          </td>
          <!-- 内容 -->
          <td v-if='loginUserInfo.adminFlg' class='p-1 border border-gray-300'>
            <textarea
              v-model='reserveInfo.userComment'
              class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              disabled
              rows='4'
            />
          </td>
          <!-- 1on1担当者コメント -->
          <td v-if='loginUserInfo.adminFlg' class='p-1 border border-gray-300'>
            <textarea
              v-model='reserveInfo.managerComment'
              class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              :disabled='!reserveInfo.userComment'
              rows='4'
            />
          </td>
          <!-- 管理者 -->
          <td v-if='loginUserInfo.adminFlg' class='text-center p-2 text-gray-800 border border-b'>
            <!-- 内容(ユーザーコメント)が未入力の場合表示 -->
            <button
              v-if='!reserveInfo.userComment'
              class='px-2 py-1 ml-2 bg-red-500 text-white rounded-md hover:bg-red-400 active:outline-none focus:outline-none'
              @click='deleteLine(reserveInfo)'
            >
              行削除
            </button>
            <!-- 内容(ユーザーコメント)が入力済の場合表示 -->
            <button
              v-if='reserveInfo.userComment'
              class='px-2 py-1 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
              @click='saveComment(reserveInfo)'
            >
              登録
            </button>
          </td>
          <!-- 一般ユーザー -->
          <td v-if='!loginUserInfo.adminFlg'
              class='p-2 text-center text-gray-800 border border-b'
              :class="loginUserInfo.adminFlg? 'w-10': 'w-20'"
          >
            <button
              v-if='!reserveInfo.userId && !reserveInfoList.some(obj => obj.userId === loginUserInfo.userId)'
              class='px-2 py-1 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
              @click='show(reserveInfo)'
            >
              登録
            </button>
            <button
              v-else-if='reserveInfo.userId === loginUserInfo.userId'
              class='px-2 py-1 ml-2  text-white rounded-md '
              :class="isAbleToCancel(reserveInfo)? 'bg-red-300': 'bg-red-500 hover:bg-red-400 active:outline-none focus:outline-none'"
              @click='cancelReserve(reserveInfo)'
              :disabled='isAbleToCancel(reserveInfo)'
            >
              取消
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <modal name='modal-content'>
      <div class='p-8'>
        <div class='flex justify-center'>
          <input
            type='radio'
            name='feeling'
            id='sun'
            :value='1'
            v-model='selectedReserveInfo.feeling'
            class='hidden'
          >
          <label for='sun' class='cursor-pointer checked:bg-gray-900'>
            <img src='/_nuxt/assets/img/sun.png' alt=''
                 :class="selectedReserveInfo.feeling === 1?'bg-yellow-200' : ''"
            >
          </label>
          <input
            type='radio'
            name='feeling'
            id='cloud'
            :value='2'
            v-model='selectedReserveInfo.feeling'
            class='hidden'
          >
          <label for='cloud' class='cursor-pointer checked:bg-gray-900'>
            <img src='/_nuxt/assets/img/cloud.png' alt='' class='w-30 h-30 ml-8'
                 :class="selectedReserveInfo.feeling === 2?'bg-yellow-200' : ''"
            >
          </label>
          <input
            type='radio'
            name='feeling'
            id='rain'
            :value='3'
            v-model='selectedReserveInfo.feeling'
            class='hidden'
          >
          <label for='rain' class='cursor-pointer checked:bg-gray-900'>
            <img src='/_nuxt/assets/img/rain.png' alt='' class='w-30 h-30 ml-8'
                 :class="selectedReserveInfo.feeling === 3?'bg-yellow-200' : ''"
            >
          </label>
        </div>
        <div class='text-center mt-3'>
          <textarea
            v-model='selectedReserveInfo.remark'
            class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          />
          <button
            class='px-4 py-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
            @click='reserve()'>
            OK
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ReserveInfo from '~/classes/reserveInfo';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import Keyst10300ReserveQ from '~/classes/form/keyst10300ReserveQ';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';
import { convertDateToMonthDay, getToday } from '~/utils/converter';
import _ from 'lodash';
import Keyst10300DeleteQ from '~/classes/form/keyst10300DeleteQ';
import Keyst10300CancelQ from '~/classes/form/keyst10300CancelQ';


@Component({})
export default class Keyst10302 extends Vue {
  /** 予約状況一覧 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoList!: ReserveInfo[];

  public selectedReserveInfo: ReserveInfo = new ReserveInfo();
  public convertDateToMonthDay = convertDateToMonthDay;

  /** ログインユーザー情報 */
  get loginUserInfo() {
    return AuthenticationModule.loginUserInfo;
  }

  /** 今日の日付 */
  get today () {
    return  getToday();
  }

  /**
   * 面談日時登録（ユーザー）
   */
  reserve() {
    try {
      // 選択中の予約情報をレスポンスFormに移送する。
      let reqForm: Keyst10300ReserveQ =
        _.assign(new Keyst10300ReserveQ(), _.pick(this.selectedReserveInfo, _.keys(new Keyst10300ReserveQ())));
      Keyst10300Module.reserve(reqForm);
      this.hide();
    } catch (error) {
    }
  }

  /**
   * コメント登録（管理者）
   * @param reserveInfo
   */
  saveComment(reserveInfo: ReserveInfo) {
    try {
      let reqForm: Keyst10300UpdateQ =
        _.assign(new Keyst10300UpdateQ(), _.pick(reserveInfo, _.keys(new Keyst10300UpdateQ())));
      Keyst10300Module.saveComment(reqForm);
    } catch (error) {
    }
  }

  /**
   * 行削除(管理者)
   * @param reserveInfo
   */
  deleteLine(reserveInfo: ReserveInfo) {
    try {
      const reqForm: Keyst10300DeleteQ =
        _.assign(new Keyst10300DeleteQ(), _.pick(reserveInfo, _.keys(new Keyst10300DeleteQ())));
      Keyst10300Module.deleteLine(reqForm);
    } catch (error) {
    }
  }

  /**
   * 予約取消(ユーザー)
   * @param reserveInfo
   */
  cancelReserve(reserveInfo: ReserveInfo) {
    try {
      const reqForm: Keyst10300CancelQ =
        _.assign(new Keyst10300CancelQ(), _.pick(reserveInfo, _.keys(new Keyst10300CancelQ())));
      Keyst10300Module.cancelReserve(reqForm);
    } catch (error) {
    }
  }

  isAbleToCancel(reserveInfo: ReserveInfo) {
    return new Date(reserveInfo.reserveDate) < new Date(this.today);
  }

  /**
   * モーダル表示
   * @param reserveInfo
   */
  show(reserveInfo: ReserveInfo) {
    this.selectedReserveInfo = reserveInfo;
    this.$modal.show('modal-content');
  }

  /**
   * モーダル非表示
   */
  hide() {
    this.$modal.hide('modal-content');
  }

}
</script>

<style>
.scroll {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-w: none;
}
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
