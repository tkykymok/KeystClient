<template>
  <div>
    <select
      v-model='_db'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' v-text='option.name' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class Db extends SelectOptionBase {
  /** 入力パラメータ 使用言語リスト */
  @PropSync('db', { required: false, default: null })
  _db!: string;

  created() {
    this.getOsOptions();
  }

  async getOsOptions() {
    const { data } = await $axios.get('/selectOption/db');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
