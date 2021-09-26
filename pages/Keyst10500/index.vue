<template>
  <div class="p-4">
    <div class="p-4 flex justify-center items-center">
      <div class="mr-5">
        <span class="mr-1">登録</span>
        <input type="radio" name="search" value="register" v-model='radioValue' @change='PrjCodeDisplay'>
      </div>
      <div class="mr-10">
        <span class="mr-1">更新・詳細</span>
        <input type="radio" name="search" value="update" v-model='radioValue' ref="target" @change='PrjCodeDisplay'>
      </div>
      <PrjCode
        v-if='PrjCodeFlg'
        :prjCode.sync='prjMaster.prjCode'
      />
      <button
        @click='Decision(prjMaster.prjCode)'
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
      v-if='registerFlg || updateFlg'
      :registerFlg='this.registerFlg'
      :updateFlg='this.updateFlg'
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
import PrjCode from '~/components/SelectOptions/PrjCode.vue';
import { Keyst10500Module } from '~/store';
import { $axios } from '~/utils/api';
import { Context } from '@nuxt/types';

@Component({
  name: 'Keyst10500',
  components: {
    Keyst10501,
    PrjCode
  },
  async asyncData(context: Context) {
    const queryParam4PrjCode: string | (string | null)[] = context.route.query.prjCode;
    if (queryParam4PrjCode) {
      let prjCode = queryParam4PrjCode.toString();
      await Keyst10500Module.search(prjCode);
    }
  }
})
export default class extends Vue {
  // 案件マスタ (initializeメソッドがないので空で取得する) (syncを使い子コンポーネントでstateの値を書き換える為JSON.parseを使用する)
  get prjMaster(): PrjMaster {
    return JSON.parse(JSON.stringify(Keyst10500Module.prjMaster));
  }
  // 案件割当明細一覧 (initializeメソッドがないので空で取得する) (syncを使い子コンポーネントでstateの値を書き換える為JSON.parseを使用する)
  get prjUserAllocationList(): PrjUserAllocation[] {
    let prjUserAllocationList: PrjUserAllocation[] = [];
    Keyst10500Module.prjUserAllocationList.forEach(obj => {
      let prjUserAllocation = JSON.parse(JSON.stringify(obj));
      prjUserAllocationList.push(prjUserAllocation);
    });
    return prjUserAllocationList;
  }

  public radioValue: string = '';
  public PrjCodeFlg: boolean = false;
  public registerFlg: boolean = false;
  public updateFlg: boolean = false;

  PrjCodeDisplay() {
    if (this.radioValue === 'register') {
      this.PrjCodeFlg = false;
      this.registerFlg = false;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      this.PrjCodeFlg = true;
      this.registerFlg = false;
      this.updateFlg = false;
    }
  }

  Decision(prjCode: string) {
    if (this.radioValue === 'register') {
      Keyst10500Module.reset();
      this.registerFlg = true;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      Keyst10500Module.search(prjCode);
      this.registerFlg = false;
      this.updateFlg = true;
    }
  }

  check() {
    console.log('PrjMaster', this.prjMaster);
    console.log('PrjUserAllocationList', this.prjUserAllocationList);
    console.log('パラメータ', this.$route.query.prjCode);
  }

  mounted() {
    if (this.$route.query.prjCode) {
      this.PrjCodeFlg = true;
      this.registerFlg = false;
      this.updateFlg = true;
      let element: any = this.$refs.target;
      element.checked = true;
    }
  }
}
</script>

<style></style>
