<template>
  <table class='w-4/5 table-fixed shadow-md'>
    <tbody>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>ふりがな</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ _skillSheetHeader.userNameKana }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>性別</th>
      <td class='p-3 text-gray-800 border border-b'>{{ genderConstant.getGenderByCode(_skillSheetHeader.gender) }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>年齢</th>
      <td class='p-3 text-gray-800 border border-b'>{{ _skillSheetHeader.age }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>生年月日</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ convertDateToYearMonthDay(_skillSheetHeader.birthday)
        }}
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>氏名</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ _skillSheetHeader.userName }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>国籍</th>
      <td class='p-3 text-gray-800 border border-b'>{{ _skillSheetHeader.nationality }}</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>配偶者</th>
      <td class='p-3 text-gray-800 border border-b'>
        <span v-if="_skillSheetHeader.partnerFlg">有</span>
        <span v-else>無</span>
      </td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最寄駅</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>{{ _skillSheetHeader.nearestStation }}　駅</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最終学歴</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>
        {{ convertDateToYearMonth(_skillSheetHeader.finalEducationDate) }}
      </td>
      <td class='p-3 text-gray-800 border border-b' colspan='7'>{{ _skillSheetHeader.finalEducationContent }}</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'
          :rowspan='_skillSheetHeader.qualificationList.length+1'>資格
      </th>
    </tr>
    <tr v-for='(qualification, idx) in _skillSheetHeader.qualificationList' :key='idx'>
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
            v-for='skill in _skillSheetHeader.skillList' :key='skill.skillCode'
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
          v-model='_skillSheetHeader.strongArea'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          style='height: 100px'
        />
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>PR</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          v-model='_skillSheetHeader.pr'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          style='height: 100px'
        />
      </td>
    </tr>
    <tr v-show='loginUserInfo.adminFlg'>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>営業評価</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          v-model='_skillSheetHeader.evaluationOfSales'
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          style='height: 100px'
        />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import SkillSheetHeader from '~/classes/skillSheetHeader';
import { convertDateToYearMonth, convertDateToYearMonthDay } from '~/utils/converter';
import { Gender } from '~/constant/gender';
import { AuthenticationModule } from '~/utils/store-accessor';
import LoginUserInfo from '~/classes/loginUserInfo';

@Component({})
export default class Keyst10201 extends Vue {
  /** 入力パラメータ スキルシートヘッダー一覧 */
  @PropSync('skillSheetHeader',{ required: true, default: null })
  _skillSheetHeader!: SkillSheetHeader;
  /** ログインユーザー情報 */
  public loginUserInfo: LoginUserInfo = AuthenticationModule.loginUserInfo;
  public genderConstant = Gender;

  /**
   * yyyy年MM月dd日の形式に変換する
   */
  public convertDateToYearMonthDay = convertDateToYearMonthDay;

  /**
   * yyyy年MM月の形式に変換する
   */
  public convertDateToYearMonth = convertDateToYearMonth;

}
</script>

<style></style>
