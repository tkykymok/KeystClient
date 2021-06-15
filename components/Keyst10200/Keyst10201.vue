<template>
  <table class='w-3/4 table-fixed shadow-md'>
    <tbody>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>ふりがな</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ skillSheetHeader.userNameKana }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>性別</th>
      <td class='p-3 text-gray-800 border border-b'>{{ skillSheetHeader.gender }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>年齢</th>
      <td class='p-3 text-gray-800 border border-b'>{{ skillSheetHeader.age }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>生年月日</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ convertDateToYearMonthDay(skillSheetHeader.birthday)
        }}
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>氏名</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ skillSheetHeader.userName }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>国籍</th>
      <td class='p-3 text-gray-800 border border-b'>{{ skillSheetHeader.nationality }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>配偶者</th>
      <td class='p-3 text-gray-800 border border-b'>
        <span v-if="skillSheetHeader.partnerFlg">有</span>
        <span v-else>無</span>
      </td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最寄駅</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ skillSheetHeader.nearestStation }}　駅</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最終学歴</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>
        {{ convertDateToYearMonth(skillSheetHeader.finalEducationDate) }}
      </td>
      <td class='p-3 text-gray-800 border border-b' colspan='7'>{{ skillSheetHeader.finalEducationContent }}</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'
          :rowspan='skillSheetHeader.qualificationList.length+1'>資格
      </th>
    </tr>
    <tr v-for='(qualification, idx) in skillSheetHeader.qualificationList' :key='idx'>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>
        {{ convertDateToYearMonth(qualification.qualifiedDate) }}
      </td>
      <td class='p-3 text-gray-800 border border-b' colspan='7'>
        {{ qualification.qualificationContent }}
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>保有スキル</th>
      <td class='p-2 text-gray-800 border border-b' colspan='9'>
        <div class='flex flex-wrap'>
          <span
            v-for='skill in skillSheetHeader.skillList' :key='skill.skillCode'
            class='px-3 py-1 justify-around border-1 border-gray-100 bg-yellow-200 rounded-lg m-1'
          >
            {{ skill.skillName }}
          </span>
        </div>
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>得意分野</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          v-model='skillSheetHeader.strongArea'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
        />
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>PR</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          v-model='skillSheetHeader.pr'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
        />
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>営業評価</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          v-model='skillSheetHeader.evaluationOfSales'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
        />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import SkillSheetHeader from '~/classes/skillSheetHeader';
import { convertDateToYearMonth, convertDateToYearMonthDay } from '~/utils/converter';

@Component({})
export default class Keyst10201 extends Vue {
  /** 入力パラメータ スキルシート情報一覧 */
  @Prop({ required: true, default: [] })
  skillSheetHeader!: SkillSheetHeader;

  public convertDateToYearMonthDay = convertDateToYearMonthDay;
  public convertDateToYearMonth = convertDateToYearMonth;

}
</script>

<style></style>
