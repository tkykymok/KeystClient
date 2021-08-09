<template>
  <div>
    <table class="w-full mt-16">
      <tr class="flex justify-between border-t-2 border-b-2">
        <th class="w-1/6">
          名前
          <button @click="buttonU" v-if="showButtonU">▲</button>
          <button @click="buttonD" v-if="showButtonD">▼</button>
        </th>
        <th class="w-1/6">
          チーム
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          スキル
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          案件
          <button>▲</button>
          <button>▼</button>
        </th>
      </tr>
      <tr v-for='(userInfo, index) in _userInfoList' :key='userInfo.userId'
        class="p-2 flex justify-between items-center border-b-2">
        <th class="w-1/6 flex justify-center items-center">
          <button @click="showImage=true">
            <img src="/_nuxt/assets/img/user.png" alt="" class="w-12 h-12 rounded-full border-none shadow-lg">
          </button>
          <p class="ml-4 font-normal">{{ userInfo.userName }}</p>
        </th>
        <th class="w-1/6 font-normal">{{ userInfo.team }}</th>
        <th class="w-1/6 font-normal">
          <span v-for='skill in userInfo.skillList' :key="skill.skillCode">{{ skill.skillName }} </span>
        </th>
        <th class="w-1/6 font-normal">
          <button class="bg-gray-300 border border-gray-300 rounded-md px-2 py-2" @click="showModal(userInfo.userId)">案件</button>
          <a href="/keyst10200" class="bg-gray-300 border border-gray-300 rounded-md px-2 py-2">スキルシート</a>
        </th>
        <Keyst10403
          :prjInfo.sync='userInfo.prjInfo'
          :userId='userInfo.userId'
          ref='keyst10403Refs'
        />
        <Keyst10404
          @closeModalImage="showImage=false" v-if="showImage"
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

  showModal(userId: number) {
    console.log('一覧', this.keyst10403Refs); // 確認用
    const target: Keyst10403 | undefined = this.keyst10403Refs.find(obj => obj.userId === userId);
    console.log(target); // 確認用
    target?.open()
  }

  public show = false;
  public showImage = false;
  public showButtonU = false;
  public showButtonD = true;

  buttonU() {
    this.showButtonU = false;
    this.showButtonD = true;
  }
  buttonD() {
    this.showButtonU = true;
    this.showButtonD = false;
  }
}
</script>

<style></style>
