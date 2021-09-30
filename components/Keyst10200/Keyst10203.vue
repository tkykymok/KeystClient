<template>
  <div class='flex-auto'>
    <div class='mx-2 p-2 text-center text-gray-800 font-bold bg-gray-200 rounded-md shadow-md'>スキルシート一覧</div>
    <div class='overflow-y-scroll scroll' style='height: 600px'>
      <div
        v-for='skillSheet in skillSheetInfoList' :key='skillSheet.skillSheetId'
        class='mx-2 p-2 mt-1 shadow-md cursor-pointer rounded-md'
        :class="selectedSkillSheetId === skillSheet.skillSheetId? 'bg-yellow-200':'hover:bg-yellow-100'"
        @click='displaySkillSheet(skillSheet.skillSheetId)'
      >
        {{ skillSheet.skillSheetRegDatetime }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Keyst10200Module } from '~/utils/store-accessor';
import SkillSheetInfo from '~/classes/skillSheetInfo';

@Component({})
export default class Keyst10203 extends Vue {
  /** 入力パラメータ スキルシート情報一覧 */
  @Prop({ required: true, default: () => ([]) })
  skillSheetInfoList!: SkillSheetInfo[];

  // 選択中のスキルシートID
  get selectedSkillSheetId(): number | null {
    return Keyst10200Module.skillSheetHeader.skillSheetId;
  }

  /**
   * スキルシート表示イベント
   * @param skillSheetId
   */
  async displaySkillSheet(skillSheetId: number) {
    await Keyst10200Module.displaySkillSheet(skillSheetId).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }

}
</script>

<style>
.scroll {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-w: none;
}
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
