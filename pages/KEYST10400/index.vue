<template>
  <div class='p-4'>
    <div class="border border-black rounded-md text-center p-2 w-1/5">
      メンバー一覧
    </div>
    <keyst10401 />
    <Keyst10402 
      :userBasicInfoList.sync='userBasicInfoList'
      :prjInfoList.sync='prjInfoList'
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10401 from '~/components/Keyst10400/Keyst10401.vue';
import Keyst10402 from '~/components/Keyst10400/Keyst10402.vue';
import { Keyst10400Module } from '~/utils/store-accessor';
import UserBasicInfo from '~/classes/userBasicInfo';
import PrjInfoList from '~/classes/prjInfo';

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
  get userBasicInfoList(): UserBasicInfo[] {
    return Keyst10400Module.userBasicInfoList;
  }

  // 案件情報一覧
  get prjInfoList(): PrjInfoList[] {
    return Keyst10400Module.prjInfoList;
  }
}
</script>

<style></style>