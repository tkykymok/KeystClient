<template>
  <div>
    <table class="w-full mt-16">
      <thead>
      <tr class="flex justify-around border-t-2 border-b-2">
        <th @click="sortBy('name'); sortNameUsers" :class="addClass('name')" class="w-1/6 cursor-pointer">
          名前
        </th>
        <th @click="sortBy('team'); sortTeamUsers" :class="addClass('team')" class="w-1/6 cursor-pointer">
          チーム
        </th>
        <th class="w-1/6">
          スキル
        </th>
        <th v-if='loginUserInfo.adminFlg'
          class="w-1/6">
          案件・スキルシート
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='(userInfo, idx) in _userInfoList' :key='idx'
        class="p-2 flex justify-around items-center border-b-2">
        <td class="w-1/6 flex">
          <button @click="showImageModal(userInfo.userId)">
            <img
              :src="userInfo.prfImgStrgDrctry? userInfo.prfImgStrgDrctry: require('@/assets/img/user.png')"
              alt=""
              class="w-12 h-12 rounded-full border-none shadow-lg"
            >
          </button>
          <div>
            <p class="ml-4 font-normal text-xs">{{ userInfo.userNameKana }}</p>
            <p class="ml-4 font-normal">{{ userInfo.userName }}</p>
          </div>
        </td>
        <td class="w-1/6 font-normal text-center">{{ userInfo.team }}</td>
        <td class="w-1/6 font-normal">
          <span v-for='(skill, idx) in userInfo.skillList' :key='idx'>{{ skill.skillName }} </span>
        </td>
        <td v-if='loginUserInfo.adminFlg'
          class="w-1/6 font-normal text-center">
          <button class='px-2 py-1 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none' @click="showPrjModal(userInfo.userId)">案件</button>
          <button
            @click='$router.push({ path: `/keyst10200?userId=${userInfo.userId}`})'
            class='px-2 py-1 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'>
            スキルシート
          </button>
        </td>
        <Keyst10403
          :prjInfoList.sync='userInfo.prjInfoList'
          :userId='userInfo.userId'
          ref='keyst10403Refs'
        />
        <Keyst10404
          :userInfo='userInfo'
          :userId='userInfo.userId'
          ref='keyst10404Refs'
        />
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue, Ref } from 'nuxt-property-decorator';
import Keyst10403 from '~/components/Keyst10400/Keyst10403.vue';
import Keyst10404 from '~/components/Keyst10400/Keyst10404.vue';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';
import { Keyst10400Module } from '~/store';
import { Gender } from '~/constant/gender';
import { AuthenticationModule } from '~/utils/store-accessor';
import LoginUserInfo from '~/classes/loginUserInfo';

@Component({
  name: 'Keyst10402',
  components: {
    Keyst10403,
    Keyst10404,
  },
})
export default class Keyst10402 extends Vue {
  @PropSync('userInfoList', { required: true, default: () => ([]) })
  _userInfoList!: UserInfo4Keyst10400[];
  @Ref() keyst10403Refs!: Keyst10403[];
  @Ref() keyst10404Refs!: Keyst10404[];

  /** ログインユーザー情報 */
  public loginUserInfo: LoginUserInfo = AuthenticationModule.loginUserInfo;
  public genderConstant = Gender;

  /**
   * 案件情報モーダル表示イベント
   * @param userId
   */
  showPrjModal(userId: number) {
    const target: Keyst10403 | undefined = this.keyst10403Refs.find(obj => obj.userId === userId);
    target?.openPrjModal();
  }

  /**
   * プロフィール画像モーダル表示イベント
   * @param userId
   */
  showImageModal(userId: number) {
    const target: Keyst10404 | undefined = this.keyst10404Refs.find(obj => obj.userId === userId);
    target?.openImageModal();
  }

  public sortKey: string = '';
  public sortAsc: boolean = true;

  /**
   * sortKeyに値(name or team)をセットし、sortAscの真偽値を変更する
   * @param key
   */
  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
    }
    this.sortKey = key;
  }

  /**
   * 昇順(▲)降順(▼)アイコン表示イベント
   * @param key
   */
  addClass(key: string) {
    if (this.sortKey === key && this.sortAsc) {
      return 'asc';
    }
    if (this.sortKey === key && !this.sortAsc) {
      return 'desc';
    }
  }

  /**
   * ユーザー情報リストを名前順で並び替えイベント
   */
  get sortNameUsers(): UserInfo4Keyst10400[] {
    if (this.sortKey != '') {
      var set = 1;
      if (this.sortAsc) {
        set = 1;
      } else {
        set = -1;
      }
      Keyst10400Module.SORT_NAME_USER_INFO_LIST(set);
      return this._userInfoList;
    } else {
      return this._userInfoList;
    }
  }

  /**
   * ユーザー情報リストをチーム順で並び替えイベント
   */
  get sortTeamUsers(): UserInfo4Keyst10400[] {
    if (this.sortKey != '') {
      var set = 1;
      if (this.sortAsc) {
        set = 1;
      } else {
        set = -1;
      }
      Keyst10400Module.SORT_TEAM_USER_INFO_LIST(set);
      return this._userInfoList;
    } else {
      return this._userInfoList;
    }
  }
}
</script>

<style>
  .asc::after {
    content: "▲";
  }

  .desc::after {
    content: "▼";
  }
</style>
