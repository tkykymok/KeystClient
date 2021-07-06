// ユーザー側
<template>
  <div>
    <div class='p-3 w-2/5'>
      <div>
        <select
          v-model='selectedMonth'
          name='team'
          class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
          <option value='1'>2021年01月</option>
          <option value='2'>2021年02月</option>
          <option value='3'>2021年03月</option>
          <option value='4'>2021年04月</option>
          <option value='5'>2021年05月</option>
          <option value='6'>2021年06月</option>
          <option value='7'>2021年07月</option>
        </select>
      </div>
      <table class='mt-2 table-fixed shadow-md'>
        <tbody>
        <tr>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/5'>
            チーム
          </th>
          <td class='p-2 text-gray-800 border '>
            <select
              name='team'
              class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
              <option value='A'>Aチーム</option>
              <option value='B'>Bチーム</option>
              <option value='C'>Cチーム</option>
            </select>
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/5'>
            日付
          </th>
          <td class='p-3 text-gray-800 border '>
            <div class='w-2/5'>
              <VueCtkDateTimePicker
                v-model='selectedDate'
                only-date
                no-header
                no-button
                format='YYYY-MM-DD'
                formatted='YYYY-MM-DD'
                label='日付'
                auto-close
              />
            </div>
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/5'>
            時間
          </th>
          <td class='p-3 text-gray-800 border'>
            <div class='flex'>
              <div class='w-2/5'>
                <VueCtkDateTimePicker
                  v-model='startTime'
                  only-time
                  format='HH:mm:ss'
                  formatted='HH:mm'
                  label='開始時間'
                  minuteInterval='30'
                  right
                />
              </div>
              <div class='p-2'>〜</div>
              <div class='w-2/5'>
                <VueCtkDateTimePicker
                  v-model='endTime'
                  only-time
                  format='HH:mm:ss'
                  formatted='HH:mm'
                  label='終了時間'
                  minuteInterval='30'
                  right
                />
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div>
        <button
          class='px-4 mt-2 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none'
        >登録
        </button>
      </div>
    </div>
    <div class='p-3 w-full'>
      <table class='table-fixed shadow-md w-3/5'>
        <thead>
        <tr>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-20'>日付</th>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-20'>開始時間</th>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-64'>名前</th>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-16'></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class='p-1 text-center text-gray-800 border'>5/24</td>
          <td class='p-1 text-center text-gray-800 border'>18:30</td>
          <td class='p-1 text-center text-gray-800 border'>山田 太郎</td>
          <td class='p-1 text-center text-gray-800 border'>
            <button
              class='px-4 bg-red-400 text-white rounded-md hover:bg-red-500 active:outline-none focus:outline-none'
            >取消
            </button>
          </td>
        </tr>
        <tr>
          <td class='p-1 text-center text-gray-800 border'>5/24</td>
          <td class='p-1 text-center text-gray-800 border'>19:00</td>
          <td class='p-1 text-center text-gray-800 border'>山田 太郎</td>
          <td class='p-1 text-center text-gray-800 border'>
          </td>
        </tr>
        <tr>
          <td class='p-1 text-center text-gray-800 border'>5/24</td>
          <td class='p-1 text-center text-gray-800 border'>19:30</td>
          <td class='p-1 text-center text-gray-800 border'>山田 太郎</td>
          <td class='p-1 text-center text-gray-800 border'>
          </td>
        </tr>


        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';

@Component({
  name: 'Keyst10300Sample',
  components: {}
})
export default class extends Vue {
  selectedMonth = '7';
  selectedDate = '';
  startTime = '';
  endTime = '';


}
</script>

<style></style>
