// 管理側
<template>
  <div class='p-3'>
    <!-- 予約画面ヘッダー -->
    <!-- 管理者=false, ユーザー=true -->
    <keyst10304
      :loginUserInfo='loginUserInfo'
      :reserveInfoList='reserveInfoList'
      :thisMonth='thisMonth'
      :team='team'
    />

    <!-- 予約日時入力部分 -->
    <!-- 管理者のみ,日時が登録されていない場合、ログイン中の管理者が登録済みの表示する -->
    <div v-if="loginUserInfo.adminFlg == false && !reserveInfoList.length">
      <keyst10301 />
    </div>

    <!-- 予約状況 -->
    <keyst10302
      :loginUserInfo='loginUserInfo'
      :reserveInfoList='reserveInfoList'
    />

    <!-- コメント -->
    <!-- ユーザーのみ表示する -->
    <div v-if="loginUserInfo.adminFlg == true" class='mt-10'>
      <p class='py-3 font-bold text-gray-600'>コメント履歴</p>
      <keyst10303
        :loginUserInfo='loginUserInfo'
        :reserveInfoDetailList='reserveInfoDetailList'
      />
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import LoginUserInfo from '~/classes/loginUserInfo';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';
import keyst10303 from '~/components/Keyst10300/Keyst10303.vue';
import keyst10304 from '~/components/Keyst10300/Keyst10304.vue';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import ReserveInfo from '~/classes/reserveInfo';
import ReserveInfoDetail from '~/classes/reserveInfoDetail';


@Component({
  name: 'Keyst10300',
  components: {
    keyst10301,
    keyst10302,
    keyst10303,
    keyst10304
  },
  async asyncData({redirect, store}) {
    try {
      await Keyst10300Module.initialize();
    } catch (error) {
      redirect('/login')
    }
  }
})

export default class extends Vue {

  /** ログイン情報 */
  get loginUserInfo(): LoginUserInfo {
    return AuthenticationModule.loginUserInfo;
  }

  /**
   * 予約情報一覧
   */
  get reserveInfoList(): ReserveInfo[] {
    return Keyst10300Module.reserveInfoList;
  }

  /**
   * 当月
   */
  get thisMonth(): String {
    return Keyst10300Module.thisMonth;
  }

  /**
   * チーム
   */
  get team(): String {
    return Keyst10300Module.team;
  }

  /**
   * 予約詳細一覧
   */
  get reserveInfoDetailList(): ReserveInfoDetail[] {
    return Keyst10300Module.reserveInfoDetailList;
  }

}
</script>

<style></style>
