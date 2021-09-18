<template>
  <div>
    <select
      v-model='_custCode'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' v-text='option.name' :disabled='option.disableFlg' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class CustName extends SelectOptionBase {
  /** 入力パラメータ 使用言語リスト */
  @PropSync('custCode', { required: false, default: null })
  _custCode!: string;

  created() {
    this.getCustNameOptions();
  }

  async getCustNameOptions() {
    const { data } = await $axios.get('/selectOption/custName');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
