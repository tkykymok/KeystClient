<template>
  <div class='mt-2'>
    <div class="flex">
      <!-- 管理者：常に活性  一般：常に非活性 -->
      <Month
        :selectedMonth.sync='selectedMonth'
        :disable-flag='!loginUserInfo.adminFlg'
      />

      <!-- 管理者：予約状況一覧が取れたら非活性  一般：常に非活性 -->
      <Team
        :team.sync='team'
        :disable-flag='reserveInfoList.length? true : !loginUserInfo.adminFlg'
        class='ml-4'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import ReserveInfo from '~/classes/reserveInfo';
import Month from '~/components/SelectOptions/Month.vue';
import Team from '~/components/SelectOptions/Team.vue';

@Component({
  components: {
    Month,
    Team
  }
})
export default class Keyst10304 extends Vue{
  /** 予約状況一覧 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoList!: ReserveInfo[];

  /** 選択年月 (初期値：当月) */
  get selectedMonth() {
    return Keyst10300Module.thisMonth;
  }

  set selectedMonth(selectedMonth) {
    Keyst10300Module.SET_THIS_MONTH(selectedMonth);
  }

  get team() {
    return Keyst10300Module.team;
  }

  set team(team) {
    Keyst10300Module.SET_TEAM(team);
  }


  /** ログインユーザー情報 */
  get loginUserInfo() {
    return AuthenticationModule.loginUserInfo;
  }

  /**
   * 選択年月監視関数
   */
  @Watch('selectedMonth', {immediate: false, deep: true})
  watchSelectedMonth() {
    Keyst10300Module.changeMonth(this.selectedMonth);
  }

}

</script>

<style></style>
