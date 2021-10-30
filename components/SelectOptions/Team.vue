<template>
  <div>
    <select
      v-model='_team'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
      :class="disableFlag? 'bg-gray-200': ''"
      :disabled='disableFlag'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.name' v-text='option.name' :disabled='option.disableFlg' />
    </select>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class Team extends SelectOptionBase {
  /** 入力パラメータ team */
  @PropSync('team', { required: false, default: null })
  _team!: string;
  @Prop({ required: false, default: false })
  disableFlag!: boolean;


  created() {
    this.getTeamOptions();
  }

  async getTeamOptions() {
    const { data } = await $axios.get('/selectOption/team');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
