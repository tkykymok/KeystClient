<template>
  <div>
    <div class='p-4 flex'>
      <!-- スキルシートヘッダー部 -->
      <Keyst10201
        :skillSheetHeader='skillSheetHeader'
      />
      <!-- スキルシート一覧-->
      <Keyst10203
        :skillSheetInfoList='skillSheetInfoList'
      />
    </div>
    <!-- スキルシート明細部 -->
    <Keyst10202 />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';
import Keyst10202 from '~/components/Keyst10200/Keyst10202.vue';
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';
import { Keyst10200Module } from '~/utils/store-accessor';
import SkillSheetInfo from '~/classes/skillSheetInfo';
import SkillSheetHeader from '~/classes/skillSheetHeader';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10202,
    Keyst10203
  },
  async asyncData() {
    await Keyst10200Module.initialize();
  }
})
export default class extends Vue {
  /**
   * スキルシート情報一覧
   */
  get skillSheetInfoList(): SkillSheetInfo[] {
    return Keyst10200Module.skillSheetInfoList;
  }

  /**
   * スキルシートヘッダー
   */
  get skillSheetHeader(): SkillSheetHeader {
    return Keyst10200Module.skillSheetHeader;
  }

}
</script>

<style></style>
