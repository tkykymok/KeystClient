<template>
  <div>
    <select
      v-model='_skills'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.name' v-text='option.name' :disabled='option.disableFlg' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class Skills extends SelectOptionBase {
  /** 入力パラメータ skills */
  @PropSync('skills', { required: false, default: null })
  _skills!: string;

  created() {
    this.getSkillsOptions();
  }

  async getSkillsOptions() {
    const { data } = await $axios.get('/selectOption/skills');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
