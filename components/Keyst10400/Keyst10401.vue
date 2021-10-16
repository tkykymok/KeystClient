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
   * カタカナをひらがなに変換する
   * @param kata
   * @return hira
   */
  formatKataToHira(kata: string): string {
    var hira = kata.replace(/[\u30A1-\u30FA]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60)
    );
    return hira;
  }

  /**
   * キーワードでユーザー情報一覧を絞り込む
   * @param users
   * @return tempUsers
   */
  tempKeywordSearchUsers(users: UserInfo4Keyst10400[]): UserInfo4Keyst10400[] {
    var tempUsers: UserInfo4Keyst10400[] = [];
    for (var user of users) {
      // ユーザー名(カタカナ)をユーザー名(ひらがな)に変換する
      var userNameHira = this.formatKataToHira(user.userNameKana);
      // キーワードに「ユーザー名」か「ユーザ名(カタカナ)」か「ユーザー名(ひらがな)」が含まれる場合
      if (user.userName.indexOf(this.keyword) !== -1 ||
      user.userNameKana.indexOf(this.keyword) !== -1 ||
      userNameHira.indexOf(this.keyword) !== -1) {
        tempUsers.push(user);
      }
    }
    return tempUsers;
  }

  /**
   * チームでユーザー情報一覧を絞り込む
   * @param users
   * @return tempUsers
   */
  tempTeamSearchUsers(users: UserInfo4Keyst10400[]): UserInfo4Keyst10400[] {
    var tempUsers: UserInfo4Keyst10400[] = [];
    for (var user of users) {
      if (user.team !== null && user.team !== '') {
        // 選択したチームとユーザーの「チーム」が一致する場合
        if (user.team === this.selectedTeam) {
          tempUsers.push(user);
        }
        // チームを選択しない場合
        else if (this.selectedTeam === '') {
          return users;
        }
      }
    }
    return tempUsers;
  }

  /**
   * スキルでユーザー情報一覧を絞り込む
   * @param users
   * @return tempUsers
   */
  tempSkillSearchUsers(users: UserInfo4Keyst10400[]): UserInfo4Keyst10400[] {
    var tempUsers: UserInfo4Keyst10400[] = [];
    for (var user of users) {
      if (user.skillList !== null && user.skillList !== []) {
        for (var skill of user.skillList) {
          // 選択したスキルとユーザーの「スキル」が一致する場合
          if (skill.skillName === this.selectedSkill) {
            tempUsers.push(user);
            break;
          }
          // スキルを選択しない場合
          else if (this.selectedSkill === '') {
            return users;
          }
        }
      }
    }
    return tempUsers;
  }
  
  /**
   * キーワード入力イベント
   */
  async keywordSearchUsers() {
    await Keyst10400Module.initialize();
    var users: UserInfo4Keyst10400[] = this._userInfoList;
    // チームを選択している場合
    if (this.selectedTeam !== '') {
      users = this.tempTeamSearchUsers(users);
    }
    // スキルを選択している場合
    if (this.selectedSkill !== '') {
      users = this.tempSkillSearchUsers(users);
    }
    users = this.tempKeywordSearchUsers(users);
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }

  /**
   * チーム変更イベント
   */
  async teamSearchUsers() {
    await Keyst10400Module.initialize();
    var users: UserInfo4Keyst10400[] = this._userInfoList;
    // キーワードを入力している場合
    if (this.keyword !== '') {
      users = this.tempKeywordSearchUsers(users);
    }
    // スキルを選択している場合
    if (this.selectedSkill !== '') {
      users = this.tempSkillSearchUsers(users);
    }
    users = this.tempTeamSearchUsers(users);
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }

  /**
   * スキル変更イベント
   */
  async skillSearchUsers() {
    await Keyst10400Module.initialize();
    var users: UserInfo4Keyst10400[] = this._userInfoList;
    // キーワードを入力している場合
    if (this.keyword !== '') {
      users = this.tempKeywordSearchUsers(users);
    }
    // チームを選択している場合
    if (this.selectedTeam !== '') {
      users = this.tempTeamSearchUsers(users);
    }
    users = this.tempSkillSearchUsers(users);
    Keyst10400Module.SET_USER_INFO_LIST(users);
  }

}
</script>

<style></style>