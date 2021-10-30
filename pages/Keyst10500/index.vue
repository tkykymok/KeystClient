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
      <PrjCodeSuggest
        v-if='prjCodeFlg'
        :prjCode.sync='prjMaster.prjCode'
      />
      <button
        @click='Decision(prjMaster.prjCode)'
        class='px-4 py-2 ml-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
        決定
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
import PrjCodeSuggest from '~/components/SelectOptions/PrjCodeSuggest.vue';
import { Keyst10500Module } from '~/store';
import { Context } from '@nuxt/types';
import { AuthenticationModule } from '~/utils/store-accessor';

@Component({
  name: 'Keyst10500',
  components: {
    Keyst10501,
    PrjCode,
    PrjCodeSuggest
  },
  async asyncData(context: Context) {
    // 管理者の場合
    if (AuthenticationModule.loginUserInfo.adminFlg) {
      const queryParam4PrjCode: string | (string | null)[] = context.route.query.prjCode;
      let prjCode: string = '';
      // クエリストリングに値が設定されている場合
      if (queryParam4PrjCode) {
        prjCode = queryParam4PrjCode.toString();
      }
      await Keyst10500Module.search(prjCode).catch(error => {
        if (error.response.status === 401 || error.response.status === 403) {
          context.redirect('/login');
        }
      });
    } else {
      context.redirect('/login');
    }
  }
})
export default class extends Vue {
  /**
   * 案件マスタ
   * @return Keyst10500Module.prjMaster
   */
  get prjMaster(): PrjMaster {
    return JSON.parse(JSON.stringify(Keyst10500Module.prjMaster));
  }
  
  /**
   * 案件割当明細リスト
   * @return Keyst10500Module.prjUserAllocationList
   */
  get prjUserAllocationList(): PrjUserAllocation[] {
    let prjUserAllocationList: PrjUserAllocation[] = [];
    Keyst10500Module.prjUserAllocationList.forEach(obj => {
      let prjUserAllocation = JSON.parse(JSON.stringify(obj));
      prjUserAllocationList.push(prjUserAllocation);
    });
    return prjUserAllocationList;
  }

  public radioValue: string = '';
  public prjCodeFlg: boolean = false;
  public registerFlg: boolean = false;
  public updateFlg: boolean = false;

  /**
   * prjCodeFlg、registerFlg、updateFlgの真偽値を変更する
   */
  PrjCodeDisplay() {
    if (this.radioValue === 'register') {
      this.prjCodeFlg = false;
      this.registerFlg = false;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      this.prjCodeFlg = true;
      this.registerFlg = false;
      this.updateFlg = false;
    }
  }

  /**
   * 案件マスタ・案件割当明細リスト検索イベント
   */
  Decision(prjCode: string) {
    if (this.radioValue === 'register') {
      Keyst10500Module.RESET_PRJ_MASTER();
      this.registerFlg = true;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      var result = Keyst10500Module.search(prjCode);
      result.then(matchFlg => {
        // prjCodeの値が案件コードリストに存在する場合、案件マスタを表示する
        if (matchFlg) {
          this.registerFlg = false;
          this.updateFlg = true;
        }
      })
    }
  }

  mounted() {
    // クエリストリングに値が設定されている場合
    if (this.$route.query.prjCode) {
      this.prjCodeFlg = true;
      this.registerFlg = false;
      this.updateFlg = true;
      let element: any = this.$refs.target;
      element.checked = true;
      this.radioValue = 'update';
    }
  }
}
</script>

<style></style>
