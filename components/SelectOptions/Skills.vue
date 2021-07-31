<template>
    <select
      v-model='_skills'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' v-text='option.name' />
    </select>
</template>

<script lang='ts'>
import { Component, PropSync, Vue, Emit } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class Skills extends SelectOptionBase {
  /** 入力パラメータ 保有スキルリスト */
  @PropSync('skills', { required: false, default: null })
  _skills!: string;

  created() {
    this.getSkillsOptions();
  }

  async getSkillsOptions() {
    const { data } = await $axios.get('/selectOption/skills');
    this.selectOptionList = data;
    await this.submitSkillOptions();
  }

  /**
   * サーバーから取得したスキル選択肢一覧を親コンポーネントに渡す
   */
  @Emit()
  submitSkillOptions() {
    return this.selectOptionList;
  }
}
</script>

<style></style>
