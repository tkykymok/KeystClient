<template>
  <div>
    <select
      v-model='_userId'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' v-text='option.name' :disabled='option.disableFlg' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class UserName extends SelectOptionBase {
  /** 入力パラメータ userName */
  @PropSync('userId', { required: false, default: null })
  _userId!: number;

  created() {
    this.getUserNameOptions();
  }

  async getUserNameOptions() {
    const { data } = await $axios.get('/selectOption/userName');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
