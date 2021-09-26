<template>
  <div class='mt-2'>
    <div class="flex">
      <!-- 管理者：常に活性  一般：常に非活性 -->
      <Month
        :selectedMonth.sync='selectedMonth'
        :disable-flag='!loginUserInfo.adminFlg'
      />

      <!-- TODO 選択リスト部品に置き換える -->
      <!-- 管理者：予約状況一覧が取れたら非活性  一般：常に非活性 -->
      <select
        name="team"
        v-model="team"
        class='p-1 ml-4 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
        :disabled='reserveInfoList.length? true : !loginUserInfo.adminFlg'
        :class="reserveInfoList.length? 'bg-gray-200': ''"
      >
        <option value=''>チーム選択</option>
        <option value="A">Aチーム</option>
        <option value="B">Bチーム</option>
        <option value="C">Cチーム</option>
      </select>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { AuthenticationModule, Keyst10300Module } from '~/utils/store-accessor';
import ReserveInfo from '~/classes/reserveInfo';
import Month from '~/components/SelectOptions/Month.vue';

@Component({
  components: {
    Month
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
