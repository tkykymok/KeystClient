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
        @click='searchPrjCode(prjMaster.prjCode)'
        class='px-4 py-2 ml-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
        決定
      </button>
      <button
        @click='check'
        class='px-4 py-2 ml-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
        check
      </button>
    </div>
    <Keyst10501
      :prjMaster.sync='prjMaster'
    />
    <Keyst10502
      :prjMaster.sync='prjMaster'
      :prjUserAllocationList.sync='prjUserAllocationList'
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
  // 案件マスタ (initializeメソッドがなので空で取得する) (syncを使い子コンポーネントでstateの値を書き換える為JSON.parseを使用する)
  get prjMaster(): PrjMaster {
    return JSON.parse(JSON.stringify(Keyst10500Module.prjMaster));
  }
  // 案件割当明細一覧 (initializeメソッドがなので空で取得する) (syncを使い子コンポーネントでstateの値を書き換える為JSON.parseを使用する)
  get prjUserAllocationList(): PrjUserAllocation[] {
    let prjUserAllocationList: PrjUserAllocation[] = [];
    Keyst10500Module.prjUserAllocationList.forEach(obj => {
      let prjUserAllocation = JSON.parse(JSON.stringify(obj));
      prjUserAllocationList.push(prjUserAllocation);
    });
    return prjUserAllocationList;
  }

  searchPrjCode(prjCode: string) {
    Keyst10500Module.search(prjCode);
  }

  check() {
    console.log('PrjMaster', this.prjMaster);
    console.log('PrjUserAllocationList', this.prjUserAllocationList);
  }
}
</script>

<style></style>
