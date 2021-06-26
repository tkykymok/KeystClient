<template>
  <table class='w-screen table-fixed shadow-md'>
    <thead>
    <tr>
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
          <select
            class='p-1 w-full border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          >
            <option disabled selected>案件名を選択してください。</option>
            <option v-for='option of prjOptions' :key='option.val' v-text='option.text' />
          </select>
        </div>
        <div class='pt-1'>
          <label for='bizInCharge'>担当業務</label>
          <textarea
            id='bizInCharge'
            class='w-full p-2 h-32 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          />
        </div>
        <div>
          <label for='comment'>コメント</label>
          <textarea
            id='comment'
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
                type='text'
                :id='`team-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
          <div>
            <label :for='`dev-${idx}`'>開発</label>
            <div class='flex justify-around'>
              <input
                type='text'
                :id='`dev-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
          <div>
            <label :for='`all-${idx}`'>全体</label>
            <div class='flex justify-around'>
              <input
                type='text'
                :id='`all-${idx}`'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
              <span class='pt-2'>名</span>
            </div>
          </div>
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div>
          <Os :os='skillSheetDetail.os' />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div>
          <Db :db='skillSheetDetail.db' />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <div class='space-y-3 '>
          <input
            v-for='(option, idx) of skillSheetDetail.fwMwTool'
            :key='idx'
            type='text'
            class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          >
          <font-awesome-icon
            icon='plus-circle'
            class='mr-2 text-green-600 cursor-pointer hover:text-green-400'
          />
        </div>
      </td>
      <td class='p-3 text-gray-800 border border-b'>
        <PgLang />
      </td>

      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
      <td class='text-center p-1 text-gray-800 border border-b'>
        <input type='checkbox' class='h-4 w-4 cursor-pointer'>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Component, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { Keyst10200Module } from '~/utils/store-accessor';
import { ja } from 'vuejs-datepicker/dist/locale';
import SkillSheetDetail from '~/classes/skillSheetDetail';
import PgLang from '~/components/SelectOptions/PgLang.vue';
import Os from '~/components/SelectOptions/Os.vue';
import Db from '~/components/SelectOptions/Db.vue';
import SkillSheetInfo from '~/classes/skillSheetInfo';

@Component({
  components: {
    PgLang, Os, Db
  }
})
export default class Keyst10202 extends Vue {
  /** 入力パラメータ スキルシート明細一覧 */
  @PropSync('skillSheetDetailList', { required: true, default: [] })
  _skillSheetDetailList!: SkillSheetDetail[];

  public prjOptions: any[] = [
    { val: 1, text: '案件名1' },
    { val: 2, text: '案件名2' },
    { val: 3, text: '案件名3' },
    { val: 4, text: '案件名4' },
    { val: 5, text: '案件名5' }
  ];

  public prjStartDate: string[] = [''];
  public prjEndDate: string[] = [''];

  @Watch('_skillSheetDetailList.length',{immediate: true, deep: true})
  watchDetailListLength() {
    for (let i = 0; i < this._skillSheetDetailList.length; i++) {
      this.$set(this.prjStartDate, i, '');
      this.$set(this.prjEndDate, i, '');
    }
  }
}
</script>

<style></style>
