// 1on1コメント
<template>
  <div class='flex overflow-y-scroll scroll'>
    <table class='w-full'>
      <thead>
          <tr class=''>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>実施日</th>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>担当者</th>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>自身のコメント</th>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 text-left'>1on1担当者のコメント</th>
            <th class='p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300'></th>
          </tr>
      </thead>
      <tbody >
          <tr v-for='(commentHistory, idx) of _commentHistoryList' :key='idx'>
            <td class='w-1/8 border border-gray-300'>{{ commentHistory.reserveDate }}</td>
            <td class='w-2/8 border border-gray-300'>{{ commentHistory.managerName }}</td>
            <td class='w-3/8 border border-gray-300'>
              <textarea
                v-model='commentHistory.userComment'
                class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                rows='3'
                :disabled='commentHistory.managerComment'
              />
            </td>
            <td class='w-3/8 border border-gray-300'>
              <textarea
                v-model='commentHistory.managerComment'
                class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                rows='3'
                disabled
              />
            </td>
            <td class='w-3/8 border border-gray-300 text-center'>
              <button
                v-if='!commentHistory.managerComment'
                class='px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
                @click='saveComment(commentHistory)'
              >
                登録
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import Keyst10300UpdateQ from '~/classes/form/keyst10300UpdateQ';
import CommentHistory from '~/classes/commentHistory';
import _ from 'lodash';

@Component({})
export default class Keyst10303 extends Vue{
  /** コメント履歴一覧 */
  @PropSync('commentHistoryList', { required: true })
  _commentHistoryList!: CommentHistory[];

  /** ログインユーザー情報 */
  get loginUserInfo() {
    return AuthenticationModule.loginUserInfo;
  }

  /** 当月 */
  get thisMonth() {
    return Keyst10300Module.thisMonth;
  }

  /**
   * コメント登録（一般ユーザー）
   * @param commentHistory
   */
  saveComment(commentHistory: CommentHistory) {
    try {
      let reqForm: Keyst10300UpdateQ =
        _.assign(new Keyst10300UpdateQ(), _.pick(commentHistory, _.keys(new Keyst10300UpdateQ())));
      Keyst10300Module.saveComment(reqForm);
    } catch (error) {
    }
  }

}
</script>

<style scoped>
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
