<template>
  <table class='w-3/4 table-fixed shadow-md'>
    <tbody>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>ふりがな</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>やまおか たかゆき</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>性別</th>
      <td class='p-3 text-gray-800 border border-b'>男</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>年齢</th>
      <td class='p-3 text-gray-800 border border-b'>30</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>生年月日</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>1990年6月13日</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>氏名</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>山岡 嵩裕輝</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>国籍</th>
      <td class='p-3 text-gray-800 border border-b'>日本</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/12'>配偶者</th>
      <td class='p-3 text-gray-800 border border-b'>無</td>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最寄駅</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>○○○　駅</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>最終学歴</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>2020年3月</td>
      <td class='p-3 text-gray-800 border border-b' colspan='7'>○○大学　卒業</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>資格</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>2020年3月</td>
      <td class='p-3 text-gray-800 border border-b' colspan='7'>○○○○　取得</td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>保有スキル</th>
      <td class='p-3 text-gray-800 border border-b' colspan='2'>
        <select
          class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
          v-model='selected'
          @change='addSkill(selected)'
        >
          <option v-for='option in skillsOptions' :key='option.code' :value='option.code'>
            {{ option.name }}
          </option>
        </select>
      </td>
      <td class='p-2 text-gray-800 border border-b' colspan='7'>
        <div class='flex flex-wrap'>
          <span
            v-for='option in selectedOptions' :key='option.code'
            class='px-3 py-1 justify-around border-1 border-gray-100 bg-yellow-200 rounded-lg m-1'
          >
            <font-awesome-icon
              icon='times-circle'
              class='mr-1 text-sm cursor-pointer text-red-600 hover:text-red-400'
              @click='removeSkill(option.code)'
            />
            {{ option.name }}
          </span>
        </div>
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>得意分野</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'></textarea>
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>PR</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'></textarea>
      </td>
    </tr>
    <tr>
      <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12'>営業コメント</th>
      <td class='p-3 text-gray-800 border border-b' colspan='9'>
        <textarea
          class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'></textarea>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Keyst10201 extends Vue {

  // 暫定
  public skillsOptions: { code: string, name: string | null }[] = [
    { code: '1', name: 'HTML' },
    { code: '2', name: 'CSS' },
    { code: '3', name: 'JavaScript' },
    { code: '4', name: 'Java' },
    { code: '5', name: 'PHP' },
    { code: '6', name: 'Python' },
    { code: '7', name: 'Ruby' },
    { code: '8', name: 'TypeScript' },
    { code: '9', name: 'Golang' },
    { code: '10', name: 'C#' },
    { code: '11', name: 'Kotlin' },
    { code: '12', name: 'Swift' }
  ];

  // 暫定
  public selected = '';

  // 暫定
  public selectedOptions: { code: string, name: string | null }[] = [];

  addSkill(selected: string) {
    const selectedSkill = this.skillsOptions.find(obj => obj.code === selected);
    if (!this.selectedOptions.includes(selectedSkill!)) {
      this.selectedOptions.push(selectedSkill!);
    }
  }

  removeSkill(code: string) {
    console.log(code);
    console.log(this.selectedOptions);
    this.selectedOptions = this.selectedOptions.filter(obj => obj.code !== code);
    console.log(this.selectedOptions);
  }

}
</script>

<style></style>
