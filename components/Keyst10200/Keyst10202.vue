<template>
  <table class='w-screen table-fixed shadow-md'>
    <thead>
    <tr>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-8'
          rowspan='2'>
        <!-- 行追加 -->
        <font-awesome-icon
          icon='plus-circle'
          class='mr-2 text-green-600 cursor-pointer hover:text-green-400'
          @click='addRow4SkillSheetDetail'
        />
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-40'
          rowspan='2'>稼働期間
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-64'
          rowspan='2'>業務概要
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
          rowspan='2'>開発規模
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
          rowspan='2'>OS
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-32'
          rowspan='2'>DB
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-40'
          rowspan='2'>FW・MW・ツール等
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-32'
          rowspan='2'>使用言語
      </th>
      <th class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-48'
          colspan='7'>業務範囲
      </th>
    </tr>
    <tr>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>マネジメント</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>要件定義</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>基本設計</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>詳細設計</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>実装</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>テスト</th>
      <th class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>保守運用</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for='(skillSheetDetail, idx) of _skillSheetDetailList' :key='idx'>
      <!-- 削除 -->
      <td class='p-3 text-gray-800 border border-b'>
        <font-awesome-icon
          icon='times-circle'
          class='cursor-pointer text-red-600 hover:text-red-400'
          @click='removeRow4SkillSheetDetail(idx)'
        />
      </td>
      <!-- 稼働期間 -->
      <td class='p-3 text-gray-800 border border-b'>
        <!-- 稼働開始日 -->
        <div class='space-y-6 '>
          <div class='w-full border border-b bg-white rounded-md'>
            <client-only placeholder='loading...'>
              <VueCtkDateTimePicker
                :id='`prjStartDate-${idx}`'
                v-model='prjStartDate[idx]'
                only-date
                no-button
                auto-close
                noHeader
                position='top'
                :shortcut="'thisMonth'"
                format='YYYY-MM-DD'
                formatted='YYYY-MM-DD'
                label='稼働開始日'
                :max-date='prjEndDate[idx]'
                @input='$set(skillSheetDetail, "prjStartDate", $event)'
              />
            </client-only>
          </div>
          <div class='text-center'>
            <font-awesome-icon
              icon='long-arrow-alt-down'
            />
          </div>
          <!-- 稼働終了日 -->
          <div class='w-full border border-b bg-white rounded-md'>
            <client-only placeholder='loading...'>
              <VueCtkDateTimePicker
                :id='`prjEndDate-${idx}`'
                v-model='prjEndDate[idx]'
                only-date
                no-button
                auto-close
                noHeader
                position='top'
                format='YYYY-MM-DD'
                formatted='YYYY-MM-DD'
                label='稼働終了日'
                :min-date='prjStartDate[idx]'
                @input='$set(skillSheetDetail, "prjEndDate", $event)'
              />
            </client-only>
          </div>
        </div>
      </td>
      <!-- 業務概要 -->
      <td class='p-3 text-gray-800 border border-b'>
        <div>
          <PrjName
            :prjCode.sync='skillSheetDetail.prjCode'
          />
        </div>
        <div class='pt-1'>
          <label :for='`bizInCharge-${idx}`'>担当業務</label>
          <textarea
            v-model='skillSheetDetail.bizInCharge'
            :id='`bizInCharge-${idx}`'
            class='w-full p-2 h-32 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          />
        </div>
        <div>
          <label :for='`comment-${idx}`'>コメント</label>
          <textarea
            v-model='skillSheetDetail.comment'
            :id='`comment-${idx}`'
            class='w-full p-2 h-32 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div class='space-y-8'>
          <div>
            <label :for='`team-${idx}`'>チーム</label>
            <div class='flex justify-around'>
              <input
                v-model='skillSheetDetail.devScale[0]'
                type='number'
                :id='`team-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                @blur='checkDevScaleInput(idx, 0)'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
          <div>
            <label :for='`dev-${idx}`'>開発</label>
            <div class='flex justify-around'>
              <input
                v-model='skillSheetDetail.devScale[1]'
                type='number'
                :id='`dev-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                @blur='checkDevScaleInput(idx, 1)'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
          <div>
            <label :for='`all-${idx}`'>全体</label>
            <div class='flex justify-around'>
              <input
                v-model='skillSheetDetail.devScale[2]'
                type='number'
                :id='`all-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                @blur='checkDevScaleInput(idx, 2)'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div>
          <Os :os.sync='skillSheetDetail.os' />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div>
          <Db :db.sync='skillSheetDetail.db' />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div class='space-y-3'>
          <input
            v-for='(fwMwTool, idx) in skillSheetDetail.fwMwTool'
            v-model='skillSheetDetail.fwMwTool[idx]'
            :key='idx'
            type='text'
            maxlength='20'
            class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          >
          <font-awesome-icon
            icon='plus-circle'
            class='mr-2 text-green-600 cursor-pointer hover:text-green-400'
            @click='addRow4FwMwTool(idx)'
          />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <PgLang
          :pgLang.sync='skillSheetDetail.pgLang'
        />
      </td>

      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowManagement' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowReqDefinition' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowBasicDesign' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowDetailDesign' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowImplementation' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowTest' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input v-model='skillSheetDetail.sowMaintenanceOperation' type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Component, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { Keyst10200Module } from '~/utils/store-accessor';
import SkillSheetDetail from '~/classes/skillSheetDetail';
import PgLang from '~/components/SelectOptions/PgLang.vue';
import Os from '~/components/SelectOptions/Os.vue';
import Db from '~/components/SelectOptions/Db.vue';
import PrjName from '~/components/SelectOptions/PrjName.vue';

@Component({
  components: {
    PgLang, Os, Db, PrjName
  }
})
export default class Keyst10202 extends Vue {
  /** 入力パラメータ スキルシート明細一覧 */
  @PropSync('skillSheetDetailList', { required: true, default: () => ([]) })
  _skillSheetDetailList!: SkillSheetDetail[];

  // 稼働開始日・終了日を一時的に保存する配列
  // カレンダーから選択した日付が画面に反映されない事象を解決するための対応
  public prjStartDate: string[] = [''];
  public prjEndDate: string[] = [''];

  /**
   * スキルシート明細一覧の長さを監視する関数
   */
  @Watch('_skillSheetDetailList.length', { immediate: true, deep: true })
  watchDetailListLength() {
    // 配列を初期化する
    this.prjStartDate.splice(0);
    this.prjEndDate.splice(0);
    // スキルシート明細一覧全件に対して以下の処理をする。
    this._skillSheetDetailList.forEach(obj => {
      // スキルシート明細の数分、稼働開始日・終了日の配列に追加する。
      this.prjStartDate.push(obj.prjStartDate);
      this.prjEndDate.push(obj.prjEndDate);
    });
  }

  /**
   * スキルシート明細部行追加イベント
   */
  addRow4SkillSheetDetail() {
    Keyst10200Module.SET_SKILL_SHEET_DETAIL(this._skillSheetDetailList);
    Keyst10200Module.ADD_ROW_4_SKILL_SHEET_DETAIL();
  }

  /**
   * スキルシート明細部行削除イベント
   * @param idx
   */
  removeRow4SkillSheetDetail(idx: number) {
    Keyst10200Module.SET_SKILL_SHEET_DETAIL(this._skillSheetDetailList);
    Keyst10200Module.REMOVE_ROW_4_SKILL_SHEET_DETAIL(idx);
  }

  /**
   * FW・MW・TOOL等の入力欄追加イベント
   * @param idx
   */
  addRow4FwMwTool(idx: number) {
    Keyst10200Module.SET_SKILL_SHEET_DETAIL(this._skillSheetDetailList);
    Keyst10200Module.ADD_ROW_4_FW_MW_TOOL(idx);
  }

  /**
   * 開発規模の入力値をチェックし、空欄の場合"0"に置き換える
   * @param index1
   * @param index2
   */
  checkDevScaleInput(index1: number, index2: number) {
    if (!this._skillSheetDetailList[index1].devScale[index2]) {
      this._skillSheetDetailList[index1].devScale.splice(index2, 1, '0');
    }
  }

}
</script>

<style></style>
