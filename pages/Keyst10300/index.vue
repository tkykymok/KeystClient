// 管理側
<template>
  <div class='p-3'>
    <!-- 予約画面ヘッダー -->
    <!-- 管理者=false, ユーザー=true -->
    <keyst10304
      :loginUserInfo='loginUserInfo'
      :reserveInfoList='reserveInfoList'
      :thisMonth='thisMonth'
      :implYearMonthList='implYearMonthList'
      :team.sync='selectedTeam'
    />

    <!-- 予約日時入力部分 -->
    <!-- 管理者のみ,日時が登録されていない場合、ログイン中の管理者が登録済みの表示する -->
    <div v-if="loginUserInfo.adminFlg == false && !reserveInfoList.length">
      <keyst10301
        :team.sync='selectedTeam'
      />
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

  public selectedTeam: string = '';

  /** ログイン情報 */
  get loginUserInfo(): LoginUserInfo {
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
   * 当月
   */
  get thisMonth(): String {
    return Keyst10300Module.thisMonth;
  }

  /**
   * 実施月リスト
   */
  get impleYearMonthList(): String[] {
    return Keyst10300Module.implYearMonthList;
  }

  /**
   * チーム
   */
  get team(): String {
    return Keyst10300Module.team;
  }

    /**
   * 予約情報一覧
   */
  get reserveInfoDetailList(): ReserveInfoDetail[] {
    let reserveInfoDetailList: ReserveInfoDetail[] = [];
    Keyst10300Module.reserveInfoDetailList.forEach(obj => {
        let ReserveInfoDetail = JSON.parse(JSON.stringify(obj));
        reserveInfoDetailList.push(ReserveInfoDetail);
      }
    );
    return reserveInfoDetailList;
  }

}
</script>

<style></style>
