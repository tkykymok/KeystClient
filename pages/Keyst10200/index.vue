<template>
  <div>
    <div class='pt-4 flex z-0'>
      <!-- スキルシートヘッダー部 -->
      <Keyst10201
        :skillSheetHeader.sync='skillSheetHeader'
      />
      <!-- スキルシート一覧-->
      <Keyst10203
        :skillSheetInfoList='skillSheetInfoList'
      />
    </div>

    <div class='pt-12 overflow-x-auto'>
      <div class='mb-2'>
        <font-awesome-icon
          icon='plus-circle'
          class='mr-2 text-green-600 cursor-pointer hover:text-green-400'
        />
      </div>
      <!-- スキルシート明細部 -->
      <Keyst10202
        :skillSheetDetailList.sync='skillSheetDetailList'
      />
    </div>
    <div class='py-4'>
      <button
        class='px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'
        @click='test'
      >保存
      </button>
    </div>
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
import SkillSheetDetail from '~/classes/skillSheetDetail';

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
    return Object.assign(new SkillSheetHeader(), Keyst10200Module.skillSheetHeader);
  }

  /**
   * スキルシート明細一覧
   */
  get skillSheetDetailList(): SkillSheetDetail[] {
    let skillSheetDetailList: SkillSheetDetail[] = [];
    Keyst10200Module.skillSheetDetailList.forEach(obj => {
        let skillSheetDetail = new SkillSheetDetail();
        Object.assign(skillSheetDetail, obj);
        skillSheetDetailList.push(skillSheetDetail);
      }
    );
    return skillSheetDetailList;
  }

  test() {
    console.log(this.skillSheetHeader);
    console.log(this.skillSheetDetailList[0]);
  }


}
</script>

<style></style>
