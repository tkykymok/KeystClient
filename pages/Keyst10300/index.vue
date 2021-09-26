// 管理側
<template>
  <div class='mb-4'>
    <!-- 予約画面ヘッダー -->
    <!-- 管理者=false, ユーザー=true -->
    <keyst10304
      :reserveInfoList='reserveInfoList'
    />

    <!-- 予約日時入力部分 -->
    <!-- 管理者のみ表示する -->
    <div v-if='loginUserInfo.adminFlg'>
      <keyst10301
      />
    </div>

    <!-- 予約状況 -->
    <p class='py-3 font-bold text-gray-600'>予約状況</p>
    <keyst10302
      :reserveInfoList='reserveInfoList'
    />

    <!-- コメント履歴 一般ユーザーのみ表示する-->
    <!--  -->
    <div v-if='!loginUserInfo.adminFlg' class='mt-10'>
      <p class='py-3 font-bold text-gray-600'>コメント履歴</p>
      <keyst10303
        :commentHistoryList.sync='commentHistoryList'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';
import keyst10303 from '~/components/Keyst10300/Keyst10303.vue';
import keyst10304 from '~/components/Keyst10300/Keyst10304.vue';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import ReserveInfo from '~/classes/reserveInfo';
import CommentHistory from '~/classes/commentHistory';


@Component({
  name: 'Keyst10300',
  components: {
    keyst10301,
    keyst10302,
    keyst10303,
    keyst10304
  },
  async asyncData({ redirect, store }) {
    try {
      await Keyst10300Module.initialize();
    } catch (error) {
      redirect('/login');
    }
  }
})

export default class extends Vue {
  /** ログインユーザー情報 */
  get loginUserInfo() {
    return AuthenticationModule.loginUserInfo;
  }

  /**
   * 予約情報一覧
   */
  get reserveInfoList(): ReserveInfo[] {
    let reserveInfoList: ReserveInfo[] = [];
    Keyst10300Module.reserveInfoList.forEach(obj => {
        let reserveInfo = JSON.parse(JSON.stringify(obj));
        reserveInfoList.push(reserveInfo);
      }
    );
    return reserveInfoList;
  }

  /**
   * コメント履歴一覧
   */
  get commentHistoryList(): CommentHistory[] {
    let commentHistoryList: CommentHistory[] = [];
    Keyst10300Module.commentHistoryList.forEach(obj => {
        let commentHistory = JSON.parse(JSON.stringify(obj));
      commentHistoryList.push(commentHistory);
      }
    );
    return commentHistoryList;
  }

}
</script>

<style></style>
