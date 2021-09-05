<template>
  <div>
    <select
      v-model="selectedMonth"
      @change="changeMonth(selectedMonth)"
      class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for="month in monthList" :value="month.code" :key="month" v-text='month.name' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';
import { Keyst10300Module } from '~/utils/store-accessor';

@Component({})
export default class Month extends SelectOptionBase {
  /** 入力パラメータ 月 */
  @PropSync('os', { required: false, default: null })
  _month!: string;

  created() {
    this.getMonthOptions();
  }

  async getMonthOptions() {
    const { data } = await $axios.get('/selectOption/month');
    this.selectOptionList = data;
  }

    changeMonth(selectedMonth: String) {
    Keyst10300Module.changeMonth(selectedMonth);
  }
}
</script>

<style></style>
