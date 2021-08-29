<template>
  <div>
    <!-- 管理者のみ表示する -->
    <div v-if="loginUserInfo.adminFlg === false" class='flex'>
      <!-- <select name="month" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
        <option v-for="n in 12" :key="n">{{ n }}月</option>
      </select> -->
      <div class='p-1 border-2 border-gray-300 rounded-md'>{{ thisMonth }}月</div>

      <div v-if="reserveInfoList.length && reserveInfoList[0].managerId === loginUserInfo.userId" name="team" class='p-1 ml-4 border-2 border-gray-300 rounded-md'>{{ reserveInfoList[0].team }}チーム</div>
      <select v-else name="team" @change="changeTeam(selected)" v-model="selected" class='p-1 ml-4 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
        <option value="A">Aチーム</option>
        <option value="B">Bチーム</option>
        <option value="C">Cチーム</option>
      </select>


    </div>

    <!-- ユーザーのみ表示する -->
    <div v-if="loginUserInfo.adminFlg === true" class="flex w-1/5">
      <div class='w-1/5 p-1 text-center border-2 border-gray-300 rounded-md'>{{ thisMonth }}月</div>
      <div class='w-1/3 ml-4 p-1 text-center border-2 border-gray-300 rounded-md'>{{ team }}チーム</div>
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

  selected = "";

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

  changeTeam(selected: String) {
    Keyst10300Module.changeTeam(selected);
  }

}

</script>

<style></style>
