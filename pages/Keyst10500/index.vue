<template>
  <div class="p-4">
    <div class="p-4 flex justify-center items-center">
      <div class="mr-5">
        <span class="mr-1">登録</span><input type="radio" name="search">
      </div>
      <div class="mr-10">
        <span class="mr-1">更新・詳細</span><input type="radio" name="search">
      </div>
      <PrjCode
        :prjCode.sync='prjMaster.prjCode'
      />
      <button
        class='px-4 py-2 ml-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>決定</button>
    </div>
    <Keyst10501 
    />
    <Keyst10502 
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PrjMaster from '~/classes/prjMaster';
import PrjUserAllocation from '~/classes/prjUserAllocation';
import Keyst10501 from '~/components/Keyst10500/Keyst10501.vue';
import Keyst10502 from '~/components/Keyst10500/Keyst10502.vue';
import PrjCode from '~/components/SelectOptions/PrjCode.vue';
import { Keyst10500Module } from '~/store';

@Component({
  name: 'Keyst10500',
  components: {
    Keyst10501,
    Keyst10502,
    PrjCode
  },
})
export default class extends Vue {
  // 案件マスタ
  get prjMaster(): PrjMaster {
    return Keyst10500Module.prjMaster;
  }
  // 案件割当明細一覧
  get prjUserAllocation(): PrjUserAllocation[] {
    return Keyst10500Module.prjUserAllocation;
  }
}
</script>

<style></style>
