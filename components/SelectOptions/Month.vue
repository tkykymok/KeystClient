<template>
  <div>
    <select
      v-model='_selectedMonth'
      class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
      :class="disableFlag? 'bg-gray-200': ''"
      :disabled='disableFlag'
    >
      <option v-for='option in selectOptionList' :value='option.code' :key='option.code' v-text='option.name' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';
import { Keyst10300Module } from '~/utils/store-accessor';

@Component({})
export default class Month extends SelectOptionBase {
  /** 入力パラメータ 月 */
  @PropSync('selectedMonth', { required: true })
  _selectedMonth!: string;
  @Prop({ required: false, default: false })
  disableFlag!: boolean;


  created() {
    this.getMonthOptions();
  }

  async getMonthOptions() {
    const { data } = await $axios.get('/selectOption/month');
    this.selectOptionList = data;
  }

  //   changeMonth(selectedMonth: String) {
  //   Keyst10300Module.changeMonth(selectedMonth);
  // }
}
</script>

<style></style>
