<template>
  <div>
    <div class='pt-4 flex z-0'>
      <!-- スキルシートヘッダー部 -->
      <Keyst10201
        :skillSheetHeader.sync='skillSheetHeader'
      />
      <!-- スキルシート情報一覧-->
      <Keyst10203
        :skillSheetInfoList='skillSheetInfoList'
      />
    </div>

    <div class='pt-12 overflow-x-auto'>
      <!-- スキルシート明細部 -->
      <Keyst10202
        :skillSheetDetailList.sync='skillSheetDetailList'
      />
    </div>
    <div class='py-4'>
      <button
        class='px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'
        @click='save'
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

import _ from 'lodash';
import Keyst10200SaveQ from '~/classes/form/keyst10200SaveQ';
import Keyst10200SaveQ1 from '~/classes/form/keyst10200SaveQ1';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10202,
    Keyst10203
  },
  async asyncData({redirect, store}) {
    try {
      await Keyst10200Module.initialize();
    } catch (error) {
      redirect('/login')
    }
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
    return JSON.parse(JSON.stringify(Keyst10200Module.skillSheetHeader));
  }

  /**
   * スキルシート明細一覧
   */
  get skillSheetDetailList(): SkillSheetDetail[] {
    let skillSheetDetailList: SkillSheetDetail[] = [];
    Keyst10200Module.skillSheetDetailList.forEach(obj => {
        let skillSheetDetail = JSON.parse(JSON.stringify(obj));
        skillSheetDetailList.push(skillSheetDetail);
      }
    );
    return skillSheetDetailList;
  }

  save() {
    // スキルシートヘッダー部をリクエストFormに移送する。
    let reqForm: Keyst10200SaveQ = _.assign(new Keyst10200SaveQ(), _.pick(this.skillSheetHeader, _.keys(new Keyst10200SaveQ())));
    // スキルシート明細部をリクエストFormに移送する。
    this.skillSheetDetailList.forEach(obj => {
      let skillSheetDetail: Keyst10200SaveQ1 =
        _.assign(new Keyst10200SaveQ1(), _.pick(obj, _.keys(new Keyst10200SaveQ1())));
      reqForm.skillSheetDetail.push(skillSheetDetail);
    });
    Keyst10200Module.save(reqForm);
  }


  test() {
    console.log(this.skillSheetHeader);
    console.log(this.skillSheetDetailList[0]);
  }


}
</script>

<style></style>
