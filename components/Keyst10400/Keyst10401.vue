<template>
  <div>
    <div class="bg-gray-200 border border-gray-300 mt-4 p-2">
      <p class="font-bold">条件を指定して検索</p>
      <div class="flex justify-around">
        <div class="w-1/4 p-4">
          <p class="font-bold">キーワード</p>
          <input v-model='keyword' @input="keywordSearchUsers()"
            type="search" name="search" placeholder="キーワードを入力" class="border border-black rounded-md p-1 mt-1 w-full">
        </div>
        <div class="w-1/4 p-4">
          <p class="font-bold">チーム</p>
          <select v-model='selectedTeam' @change="teamSearchUsers()"
            name="team" class="border border-black rounded-md p-1 mt-1 w-full">
            <option value=''>チーム一覧</option>
            <option v-for='(team, idx) of filtering.teamList' :key='idx' :value='team'>
              {{ team }}
            </option>
          </select>
        </div>
        <div class="w-1/4 p-4">
          <p class="font-bold">スキル</p>
          <select v-model='selectedSkill' @change="skillSearchUsers()"
            name="skill" class="border border-black rounded-md p-1 mt-1 w-full">
            <option value=''>スキル一覧</option>
            <option v-for='(skillName, idx) of filtering.skillNameList' :key='idx' :value='skillName'>
              {{ skillName }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <Keyst10402 
      :userInfoList.sync='userInfoList'
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import Keyst10402 from '~/components/Keyst10400/Keyst10402.vue';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';
import Filtering4Keyst10400 from '~/classes/filtering4Keyst10400';
import { Keyst10400Module } from '~/store';

@Component({
  name: 'Keyst10401',
  components: {
    Keyst10402
  }
})
export default class extends Vue {
  @PropSync('userInfoList', { required: true, default: () => ([]) })
  _userInfoList!: UserInfo4Keyst10400[];
  @Prop({ required: true })
  filtering!: Filtering4Keyst10400;

  public keyword: string = '';
  public selectedTeam: string = '';
  public selectedSkill: string = '';

  /**
   * キーワードでユーザー情報リスト絞り込む
   */
  async tempKeywordSearchUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      if (user.userName.indexOf(this.keyword) !== -1 || user.userNameKana.indexOf(this.keyword) !== -1) {
        users.push(user);
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }

  /**
   * チームでユーザー情報リストを絞り込む
   */
  async tempTeamSearchUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      if (user.team !== null && user.team !== '') {
        if (user.team.indexOf(this.selectedTeam) !== -1) {
          users.push(user);
        }
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }

  /**
   * スキルでユーザー情報リストを絞り込む
   */
  async tempSkillSearchUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      if (user.skillList !== null && user.skillList !== []) {
        for (var skill of user.skillList) {
          if (skill.skillName.indexOf(this.selectedSkill) !== -1) {
            users.push(user);
            break;
          }
        }
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }
  
  /**
   * キーワード入力イベント
   */
  async keywordSearchUsers() {
    await Keyst10400Module.initialize();
    if (this.selectedTeam !== '') {
      this.tempTeamSearchUsers();
    }
    if (this.selectedSkill !== '') {
      this.tempSkillSearchUsers();
    }
    this.tempKeywordSearchUsers();
  }

  /**
   * チーム変更イベント
   */
  async teamSearchUsers() {
    await Keyst10400Module.initialize();
    if (this.keyword !== '') {
      this.tempKeywordSearchUsers();
    }
    if (this.selectedSkill !== '') {
      this.tempSkillSearchUsers();
    }
    this.tempTeamSearchUsers();
  }

  /**
   * スキル変更イベント
   */
  async skillSearchUsers() {
    await Keyst10400Module.initialize();
    if (this.keyword !== '') {
      this.tempKeywordSearchUsers();
    }
    if (this.selectedTeam !== '') {
      this.tempTeamSearchUsers();
    }
    this.tempSkillSearchUsers();
  }
}
</script>

<style></style>