<template>
  <div class='p-4'>
    <div class="border border-black rounded-md text-center p-2 w-1/5">
      ユーザー一覧
    </div>
    <Keyst10401 />
    <Keyst10402 
      :userInfoList.sync='userInfoList'
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10401 from '~/components/Keyst10400/Keyst10401.vue';
import Keyst10402 from '~/components/Keyst10400/Keyst10402.vue';
import { Keyst10400Module } from '~/utils/store-accessor';
import userInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';

@Component({
  name: 'Keyst10400',
  components: {
    Keyst10401,
    Keyst10402,
  },
  async asyncData() {
    await Keyst10400Module.initialize();
  }
})
export default class extends Vue {
  // メンバー情報一覧
  get userInfoList(): userInfo4Keyst10400[] {
    return Keyst10400Module.userInfoList;
  }

  mounted() {
    console.log("---Keyst10400---");
    console.log(Keyst10400Module.userInfoList);
    console.log("---Keyst10400---");
  }
}
</script>

<style></style>