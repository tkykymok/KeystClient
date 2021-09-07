<template>
  <div>
    <div class='pt-4 flex justify-end  w-4/5'>
      <button
        class='px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'
        @click='createNewSkillSheet'
      >新規作成
      </button>
    </div>
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
        class='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
        @click='save'
      >新規保存
      </button>
      <button
        class='px-4 py-2 ml-2 bg-green-500 text-white rounded-md hover:bg-green-400 active:outline-none focus:outline-none'
        v-show='skillSheetHeader.skillSheetId'
        @click='update'
      >更新
      </button>
      <button
        class='px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-400 active:outline-none focus:outline-none'
        v-show='skillSheetHeader.skillSheetId'
        @click='update'
      >削除
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';
import Keyst10202 from '~/components/Keyst10200/Keyst10202.vue';
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';
import { AuthenticationModule, Keyst10200Module } from '~/utils/store-accessor';
import SkillSheetInfo from '~/classes/skillSheetInfo';
import SkillSheetHeader from '~/classes/skillSheetHeader';
import SkillSheetDetail from '~/classes/skillSheetDetail';

import _ from 'lodash';
import Keyst10200SaveQ from '~/classes/form/keyst10200SaveQ';
import Keyst10200SaveQ1 from '~/classes/form/keyst10200SaveQ1';
import Keyst10200UpdateQ from '~/classes/form/keyst10200UpdateQ';
import Keyst10200UpdateQ1 from '~/classes/form/keyst10200UpdateQ1';
import { Context } from '@nuxt/types';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10202,
    Keyst10203
  },
  async asyncData(context: Context) {
    const queryParam4UserId: string | (string | null)[] = context.route.query.userId;
    let userId: number | null = null;

    // クエリストリングに値が設定されている場合
    if (queryParam4UserId) {
      if (AuthenticationModule.loginUserInfo.adminFlg) {
        // 管理者の場合
        userId = Number.parseInt(queryParam4UserId[0]!);
      } else {
        // クエリストリングを空にする。
        context.app.router?.replace({ query: undefined });
      }
    }
    await Keyst10200Module.initialize(userId).catch(error => {
      if (error.response.status === 401) {
        context.redirect('/login');
      }
    });
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

  /**
   * スキルシート新規保存
   */
  async save() {
    // スキルシートヘッダー部をリクエストFormに移送する。
    let reqForm: Keyst10200SaveQ = _.assign(new Keyst10200SaveQ(), _.pick(this.skillSheetHeader, _.keys(new Keyst10200SaveQ())));
    // スキルシート明細部をリクエストFormに移送する。
    this.skillSheetDetailList.forEach(obj => {
      let skillSheetDetail: Keyst10200SaveQ1 =
        _.assign(new Keyst10200SaveQ1(), _.pick(obj, _.keys(new Keyst10200SaveQ1())));
      reqForm.skillSheetDetail.push(skillSheetDetail);
    });
    await Keyst10200Module.save(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }

  /**
   * スキルシート更新
   */
  async update() {
    // スキルシートヘッダー部をリクエストFormに移送する。
    let reqForm: Keyst10200UpdateQ = _.assign(new Keyst10200UpdateQ(), _.pick(this.skillSheetHeader, _.keys(new Keyst10200UpdateQ())));
    // スキルシート明細部をリクエストFormに移送する。
    this.skillSheetDetailList.forEach(obj => {
      let skillSheetDetail: Keyst10200UpdateQ1 =
        _.assign(new Keyst10200UpdateQ1(), _.pick(obj, _.keys(new Keyst10200UpdateQ1())));
      reqForm.skillSheetDetail.push(skillSheetDetail);
    });
    await Keyst10200Module.update(reqForm).catch(error => {
      if (error.response.status === 401) {
        this.$router.push('/login');
      }
    });
  }

  /**
   * スキルシート新規作成
   */
  createNewSkillSheet() {
    Keyst10200Module.CREATE_NEW_SKILL_SHEET();
  }

}
</script>

<style></style>
