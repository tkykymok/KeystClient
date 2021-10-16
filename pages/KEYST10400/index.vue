<template>
  <div class='p-4'>
    <Keyst10401 
      :filtering='filtering'
      :userInfoList.sync='userInfoList'
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10401 from '~/components/Keyst10400/Keyst10401.vue';
import { Keyst10400Module } from '~/utils/store-accessor';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';
import Filtering4Keyst10400 from '~/classes/filtering4Keyst10400';

@Component({
  name: 'Keyst10400',
  components: {
    Keyst10401
  },
  async asyncData() {
    await Keyst10400Module.initialize();
    await Keyst10400Module.initializeFiltering();
  }
})
export default class extends Vue {
  /**
   * ユーザー情報リスト
   * @return Keyst10400Module.userInfoList
   */
  get userInfoList(): UserInfo4Keyst10400[] {
    let userInfoList: UserInfo4Keyst10400[] = [];
    Keyst10400Module.userInfoList.forEach(obj => {
      let userInfo = JSON.parse(JSON.stringify(obj));
      userInfoList.push(userInfo);
    })
    return userInfoList;
  }
  /**
   * フィルタリング
   * @return Keyst10400Module.filtering
   */
  get filtering(): Filtering4Keyst10400 {
    return Keyst10400Module.filtering;
  }
}
</script>

<style></style>