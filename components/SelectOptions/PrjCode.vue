<template>
  <div>
    <select
      v-model='_prjCode'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' :disabled='option.disableFlg' >
        {{ option.code }}　{{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class PrjCode extends SelectOptionBase {
  /** 入力パラメータ prjCode */
  @PropSync('prjCode', { required: false, default: null })
  _prjCode!: string;

  created() {
    this.getPrjCodeOptions();
  }

  async getPrjCodeOptions() {
    const { data } = await $axios.get('/selectOption/prjCode');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
