<template>
  <div class="p-4">
    <div class="p-4 flex justify-center items-center">
      <div class="mr-5">
        <span class="mr-1">登録</span>
        <input type="radio" name="search" value="register" v-model='radioValue' @change='CustCodeDisplay'>
      </div>
      <div class="mr-10">
        <span class="mr-1">更新・詳細</span>
        <input type="radio" name="search" value="update" v-model='radioValue' @change='CustCodeDisplay'>
      </div>
      <CustCodeSuggest
        v-if='custCodeFlg'
        :custCode.sync='custMaster.custCode'
      />
      <button
        @click='Decision(custMaster.custCode)'
        class='px-4 py-2 ml-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'>
        決定
      </button>
    </div>
    <Keyst10701
      v-if='registerFlg || updateFlg'
      :registerFlg='this.registerFlg'
      :updateFlg='this.updateFlg'
      :custMaster.sync='custMaster'
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import CustMaster from '~/classes/custMaster';
import CustCode from '~/components/SelectOptions/CustCode.vue';
import CustCodeSuggest from '~/components/SelectOptions/CustCodeSuggest.vue';
import Keyst10701 from '~/components/Keyst10700/Keyst10701.vue';
import { Keyst10700Module } from '~/store';
import { Context } from '@nuxt/types';
import { AuthenticationModule } from '~/utils/store-accessor';

@Component({
  name: 'Keyst10700',
  components: {
    Keyst10701,
    CustCode,
    CustCodeSuggest
  },
  async asyncData(context: Context) {
    // 管理者ではない場合
    if (!AuthenticationModule.loginUserInfo.adminFlg) {
      context.redirect('/login');
    }
  }
})
export default class extends Vue {
  /**
   * 顧客マスタ
   * @return Keyst10700Module.custMaster
   */
  get custMaster(): CustMaster {
    return JSON.parse(JSON.stringify(Keyst10700Module.custMaster));
  }
  
  public radioValue: string = '';
  public custCodeFlg: boolean = false;
  public registerFlg: boolean = false;
  public updateFlg: boolean = false;

  /**
   * custCodeFlg、registerFlg、updateFlgの真偽値を変更する
   */
  CustCodeDisplay() {
    if (this.radioValue === 'register') {
      this.custCodeFlg = false;
      this.registerFlg = false;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      this.custCodeFlg = true;
      this.registerFlg = false;
      this.updateFlg = false;
    }
  }

  /**
   * 顧客マスタ検索イベント
   * @param custCode
   */
  Decision(custCode: string) {
    if (this.radioValue === 'register') {
      Keyst10700Module.RESET_CUST_MASTER();
      this.registerFlg = true;
      this.updateFlg = false;
    }
    if (this.radioValue === 'update') {
      Keyst10700Module.search(custCode);
      this.registerFlg = false;
      this.updateFlg = true;
    }
  }
}
</script>

<style></style>
