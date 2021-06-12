<template>
  <div class='flex-auto'>
    <div class='mx-2 p-2 text-center text-gray-800 font-bold bg-teal-400 rounded-md shadow-md'>スキルシート一覧</div>
    <div class='mx-2 p-2 mt-1 shadow-md cursor-pointer hover:bg-teal-100 rounded-md'
         v-for='skillSheet in skillSheetInfoList' :key='skillSheet.skillSheetId'>
      {{ skillSheet.skillSheetRegDatetime.slice(0, 19).replace('T', ' ') }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import SkillSheetInfo from '~/classes/skillSheetInfo';

@Component({})
export default class Keyst10203 extends Vue {
  /** 入力パラメータ スキルシート情報一覧 */
  @Prop({ required: true, default: [] })
  skillSheetInfoList!: SkillSheetInfo[];
}
</script>

<style></style>
