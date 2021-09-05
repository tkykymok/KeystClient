<template>
  <div>
    <!-- 管理者のみ表示する -->
    <div v-if="loginUserInfo.adminFlg === false" class='flex'>
      <select v-model="selectedMonth" @change="changeMonth(selectedMonth)" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
        <option v-for="month in monthList" :value="month.code" :key="month">
          {{ month.label }}
        </option>
      </select>

      <div v-if="reserveInfoList.length && reserveInfoList[0].managerId === loginUserInfo.userId" name="team" class='p-1 ml-4 border-2 border-gray-300 rounded-md'>{{ reserveInfoList[0].team }}チーム</div>
      <select v-else name="team" @change="changeTeam(selectedTeam)" v-model="selectedTeam" class='p-1 ml-4 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
        <option value="A">Aチーム</option>
        <option value="B">Bチーム</option>
        <option value="C">Cチーム</option>
      </select>

    </div>

    <!-- ユーザーのみ表示する -->
    <div v-if="loginUserInfo.adminFlg === true" class="flex w-1/5">
      <div class='w-12 p-1 text-center border-2 border-gray-300 rounded-md'>{{ thisMonth }}月</div>
      <div class='w-16 ml-4 p-1 text-center border-2 border-gray-300 rounded-md'>{{ team }}チーム</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Keyst10300Module } from '~/utils/store-accessor';
import LoginUserInfo from '~/classes/loginUserInfo';
import ReserveInfo from '~/classes/reserveInfo';

@Component({})
export default class Keyst10304 extends Vue{

data() {
   return {
     //初期値
     selectedMonth: { code: '2021'+this.thisMonth, label: '2021年'+this.thisMonth+'月' },
     //選択肢
     monthList: [
       {code: '202101', label: '2021年1月'},
       {code: '202102', label: '2021年2月'},
       {code: '202103', label: '2021年3月'},
       {code: '202104', label: '2021年4月'},
       {code: '202105', label: '2021年5月'},
       {code: '202106', label: '2021年6月'},
       {code: '202107', label: '2021年7月'},
       {code: '202108', label: '2021年8月'},
       {code: '202109', label: '2021年9月'},
       {code: '202110', label: '2021年10月'},
       {code: '202111', label: '2021年11月'},
       {code: '202112', label: '2021年12月'},
     ]
   }
 }

  /** ログイン情報 */
  @Prop({ required: true, default: null })
  loginUserInfo!: LoginUserInfo;

  /** 予約状況一覧 */
  @Prop({ required: true, default: () => ([]) })
  reserveInfoList!: ReserveInfo[];

  @Prop({ required: true, default: null })
  thisMonth!: String;

  @Prop({ required: true, default: null })
  team!: String;

  changeTeam(selectedTeam: String) {
    Keyst10300Module.changeTeam(selectedTeam);
  }

  changeMonth(selectedMonth: String) {
    Keyst10300Module.changeMonth(selectedMonth);
  }

}

</script>

<style></style>
