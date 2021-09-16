<template>
  <div>
    <table class="w-full mt-16">
      <tr class="flex justify-between border-t-2 border-b-2">
        <th @click="sortBy('name'); sortNameUsers" :class="addClass('name')" class="w-1/6 cursor-pointer">
          名前
        </th>
        <th @click="sortBy('team'); sortTeamUsers" :class="addClass('team')" class="w-1/6 cursor-pointer">
          チーム
        </th>
        <th class="w-1/6">
          スキル
        </th>
        <th class="w-1/6">
          案件・スキルシート
        </th>
      </tr>
      <tr v-for='(userInfo, idx) in _userInfoList' :key='idx'
        class="p-2 flex justify-between items-center border-b-2">
        <th class="w-1/6 flex justify-center items-center">
          <button @click="showImageModal(userInfo.userId)">
            <img :src="require('~/assets/img/' + userInfo.prfImgStrgDrctry)" alt="" class="w-12 h-12 rounded-full border-none shadow-lg">
          </button>
          <p class="ml-4 font-normal">{{ userInfo.userName }}</p>
        </th>
        <th class="w-1/6 font-normal">{{ userInfo.team }}</th>
        <th class="w-1/6 font-normal">
          <span v-for='skill in userInfo.skillList' :key="skill.skillCode">{{ skill.skillName }} </span>
        </th>
        <th class="w-1/6 font-normal">
          <button class='px-2 py-1 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none' @click="showModal(userInfo.userId)">案件</button>
          <button
            @click='$router.push({ path: "/keyst10200"})'
            class='px-2 py-1 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'>
            スキルシート
          </button>
        </th>
        <Keyst10403
          :prjInfo.sync='userInfo.prjInfo'
          :userId='userInfo.userId'
          ref='keyst10403Refs'
        />
        <Keyst10404
          :userInfo='userInfo'
          :userId='userInfo.userId'
          ref='keyst10404Refs'
        />
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue, Ref } from 'nuxt-property-decorator';
import Keyst10403 from '~/components/Keyst10400/Keyst10403.vue';
import Keyst10404 from '~/components/Keyst10400/Keyst10404.vue';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';

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

  showModal(userId: number) {
    const target: Keyst10403 | undefined = this.keyst10403Refs.find(obj => obj.userId === userId);
    target?.open();
  }

  showImageModal(userId: number) {
    const target: Keyst10404 | undefined = this.keyst10404Refs.find(obj => obj.userId === userId);
    target?.openImage();
  }

  public sortKey: string = '';
  public sortAsc: boolean = true;

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
    }
    this.sortKey = key;
  }

  addClass(key: string) {
    if (this.sortKey === key && this.sortAsc) {
      return 'asc';
    }
    if (this.sortKey === key && !this.sortAsc) {
      return 'desc';
    }
  }

  get sortNameUsers(): UserInfo4Keyst10400[] {
    if (this.sortKey != '') {
      var set = 1;
      if (this.sortAsc) {
        set = 1;
      } else {
        set = -1;
      }
      this.$store.commit('keyst10400/SORT_NAME_USER_INFO_LIST', set);
      return this._userInfoList;
    } else {
      return this._userInfoList;
    }
  }

  get sortTeamUsers(): UserInfo4Keyst10400[] {
    if (this.sortKey != '') {
      var set = 1;
      if (this.sortAsc) {
        set = 1;
      } else {
        set = -1;
      }
      this.$store.commit('keyst10400/SORT_TEAM_USER_INFO_LIST', set);
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
