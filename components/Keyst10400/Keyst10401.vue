<template>
  <div>
    <div class="bg-gray-200 border border-gray-300 mt-4 p-2">
      <p class="font-bold">条件を指定して検索</p>
      <div class="flex justify-around">
        <div class="w-1/4 p-4">
          <p class="font-bold">キーワード</p>
          <input v-model='keyword' @input="filteredCheckKeyword()"
            type="search" name="search" placeholder="キーワードを入力" class="border border-black rounded-md p-1 mt-1 w-full">
        </div>
        <div class="w-1/4 p-4">
          <p class="font-bold">チーム</p>
          <select v-model='selectedTeam' @change="filteredCheckSelectedTeam()"
            name="team" class="border border-black rounded-md p-1 mt-1 w-full">
            <option value=''>チーム一覧</option>
            <option v-for='(team, idx) of filtering.teamList' :key='idx' :value='team'>
              {{ team }}
            </option>
          </select>
        </div>
        <div class="w-1/4 p-4">
          <p class="font-bold">スキル</p>
          <select v-model='selectedSkill' @change="filteredCheckSelectedSkill()"
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

  async filteredCheckKeyword(): Promise<UserInfo4Keyst10400[]> {
    if (this.selectedTeam === '' && this.selectedSkill === '') {
      await Keyst10400Module.initialize();
      this.filteredUsers();
      console.log('チームなし、スキルなし');
      return this._userInfoList;
    }
    if (this.selectedTeam !== '' && this.selectedSkill === '') {
      await Keyst10400Module.initialize();
      this.selectedTeamUsers();
      this.filteredUsers();
      console.log('チームあり、スキルなし');
      return this._userInfoList;
    }
    if (this.selectedTeam === '' && this.selectedSkill !== '') {
      await Keyst10400Module.initialize();
      this.selectedSkillUsers();
      this.filteredUsers();
      console.log('チームなし、スキルあり');
      return this._userInfoList;
    } 
    if (this.selectedTeam !== '' && this.selectedSkill !== '') {
      await Keyst10400Module.initialize();
      this.selectedTeamUsers();
      this.selectedSkillUsers();
      this.filteredUsers();
      console.log('チームあり、スキルあり');
      return this._userInfoList;
    }
    return this._userInfoList;
  }

  async filteredCheckSelectedTeam(): Promise<UserInfo4Keyst10400[]> {
    if (this.keyword === '' && this.selectedSkill === '') {
      await Keyst10400Module.initialize();
      this.selectedTeamUsers();
      console.log('キーワードなし、スキルなし');
      return this._userInfoList;
    }
    if (this.keyword !== '' && this.selectedSkill === '') {
      await Keyst10400Module.initialize();
      this.filteredUsers();
      this.selectedTeamUsers();
      console.log('キーワードあり、スキルなし');
      return this._userInfoList;
    }
    if (this.keyword === '' && this.selectedSkill !== '') {
      await Keyst10400Module.initialize();
      this.selectedSkillUsers();
      this.selectedTeamUsers();
      console.log('キーワードなし、スキルあり');
      return this._userInfoList;
    } 
    if (this.keyword !== '' && this.selectedSkill !== '') {
      await Keyst10400Module.initialize();
      this.filteredUsers();
      this.selectedSkillUsers();
      this.selectedTeamUsers();
      console.log('キーワードあり、スキルあり');
      return this._userInfoList;
    }
    return this._userInfoList;
  }

  async filteredCheckSelectedSkill(): Promise<UserInfo4Keyst10400[]> {
    if (this.keyword === '' && this.selectedTeam === '') {
      await Keyst10400Module.initialize();
      this.selectedSkillUsers();
      console.log('キーワードなし、チームなし');
      return this._userInfoList;
    }
    if (this.keyword !== '' && this.selectedTeam === '') {
      await Keyst10400Module.initialize();
      this.filteredUsers();
      this.selectedSkillUsers();
      console.log('キーワードあり、チームなし');
      return this._userInfoList;
    }
    if (this.keyword === '' && this.selectedTeam !== '') {
      await Keyst10400Module.initialize();
      console.log(this._userInfoList);
      this.selectedTeamUsers();
      console.log(this._userInfoList);
      this.selectedSkillUsers();
      console.log(this._userInfoList);
      // console.log('キーワードなし、チームあり', this.selectedTeam);
      return this._userInfoList;
    } 
    if (this.keyword !== '' && this.selectedTeam !== '') {
      await Keyst10400Module.initialize();
      this.filteredUsers();
      this.selectedTeamUsers();
      this.selectedSkillUsers();
      console.log('キーワードあり、チームあり');
      return this._userInfoList;
    }
    return this._userInfoList;
  }

  filteredUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      for (var skill of user.skillList) {
        if (skill.skillName.indexOf(this.keyword) !== -1 ||
          user.userName.indexOf(this.keyword) !== -1 ||
          user.userNameKana.indexOf(this.keyword) !== -1 ||
          user.team.indexOf(this.keyword) !== -1) {
          users.push(user);
          break;
        }
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
    return this._userInfoList
  }

  selectedTeamUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      if (user.team.indexOf(this.selectedTeam) !== -1) {
        users.push(user);
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
    return this._userInfoList
  }

  selectedSkillUsers() {
    var users: UserInfo4Keyst10400[] = [];
    for (var user of this._userInfoList) {
      for (var skill of user.skillList) {
        if (skill.skillName.indexOf(this.selectedSkill) !== -1) {
          users.push(user);
          break;
        }
      }
    }
    Keyst10400Module.SET_USER_INFO_LIST(users);
    return this._userInfoList
  }
}
</script>

<style></style>