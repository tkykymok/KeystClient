<template>
  <div>
    <div class='p-4 flex'>
      <Keyst10201 />
      <Keyst10203 />
    </div>

    <div class='p-4 flex overflow-x-scroll'>
      <table class='w-screen table-fixed shadow-md'>
        <tbody>
        <tr>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-10'
              rowspan='2'>No.
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>稼働期間
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-64'
              rowspan='2'>業務概要
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>開発規模
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>OS
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>DB
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>FW・MW・ツール等
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-24'
              rowspan='2'>使用言語
          </td>
          <td class='p-3 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-48'
              colspan='7'>業務範囲
          </td>
        </tr>
        <tr>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>マネジメント</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>要件定義</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>基本設計</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>詳細設計</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>実装</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>テスト</td>
          <td class='p-2 text-center font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300'>保守運用</td>
        </tr>
        <tr>
          <td class='p-3 text-gray-800 border border-b'>1</td>
          <td class='p-3 text-gray-800 border border-b'>
<!--            <VueTailwindPicker-->
<!--            >-->
<!--              <input type="text"/>-->
<!--            </VueTailwindPicker>-->
          </td>
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
                <label for='team'>チーム</label>
                <div class='flex justify-around'>
                  <input
                    type='text'
                    id='team'
                    class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                  >
                  <span class='pt-2'>名</span>
                </div>
              </div>
              <div>
                <label for='dev'>開発</label>
                <div class='flex justify-around'>
                  <input
                    type='text'
                    id='dev'
                    class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                  >
                  <span class='pt-2'>名</span>
                </div>
              </div>
              <div>
                <label for='all'>全体</label>
                <div class='flex justify-around'>
                  <input
                    type='text'
                    id='all'
                    class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
                  >
                  <span class='pt-2'>名</span>
                </div>
              </div>
            </div>
          </td>
          <td class='p-3 text-gray-800 border border-b'>
            <div>
              <select
                class='p-1 w-full border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
                <option disabled selected>OS</option>
                <option v-for='option of osOptions' :key='option.val' v-text='option.text' />
              </select>
            </div>
          </td>
          <td class='p-3 text-gray-800 border border-b'>
            <div>
              <select
                class='p-1 w-full border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
                <option disabled selected>OS</option>
                <option v-for='option of osOptions' :key='option.val' v-text='option.text' />
              </select>
            </div>
          </td>
          <td class='p-3 text-gray-800 border border-b'>
            <div class='space-y-3 '>
              <input
                v-for='(option, idx) of fwMwTool'
                :key='idx'
                type='text'
                class='w-full p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
              <font-awesome-icon
                icon='plus-circle'
                class='mr-2 text-green-600 cursor-pointer hover:text-green-400'
                @click='addInput'
              />
            </div>
          </td>
          <td class='p-3 text-gray-800 border border-b'>
            <div>
              <select
                class='p-1 w-full border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              >
                <option disabled selected>使用言語</option>
                <option v-for='option of langOptions' :key='option.val' v-text='option.text' />
              </select>
            </div>
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
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10203,
  }
})
export default class extends Vue {

  public prjOptions: any[] = [
    { val: 1, text: '案件名1' },
    { val: 2, text: '案件名2' },
    { val: 3, text: '案件名3' },
    { val: 4, text: '案件名4' },
    { val: 5, text: '案件名5' }
  ];

  public osOptions: any[] = [
    { val: 1, text: 'Mac' },
    { val: 2, text: 'Windows' }
  ];

  public fwMwTool: any[] = ['','',''];

  // 暫定
  public langOptions: { code: string, name: string | null }[] = [
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

  addInput() {
    this.fwMwTool.push('');
  }

}
</script>

<style></style>
