<template>
  <div>
    <div>
      <div class="border border-black rounded-md text-center p-2 w-1/5">
        メンバー一覧
      </div>
      <div class="bg-gray-200 border border-gray-300 mt-4 p-2">
        <p class="font-bold">条件を指定して検索</p>
        <div class="flex justify-around">
          <div class="w-1/4 p-4">
            <p class="font-bold">チーム</p>
            <select name="team" class="border border-black rounded-md p-1 mt-1 w-full">
              <option value="">すべて</option>
              <option value="">チームA</option>
              <option value="">チームB</option>
              <option value="">チームC</option>
            </select>
          </div>
          <div class="w-1/4 p-4">
            <p class="font-bold">スキル</p>
            <select name="skill" class="border border-black rounded-md p-1 mt-1 w-full">
              <option value="">すべて</option>
              <option value="">Java</option>
              <option value="">Swift</option>
              <option value="">AWS</option>
            </select>
          </div>
          <div class="w-1/4 p-4">
            <p class="font-bold">案件</p>
            <select name="matter" class="border border-black rounded-md p-1 mt-1 w-full">
              <option value="">すべて</option>
              <option value="">案件A</option>
              <option value="">案件B</option>
              <option value="">案件C</option>
            </select>
          </div>
          <div class="w-1/4 p-4">
            <p class="font-bold">キーワード</p>
            <input type="search" name="search" placeholder="キーワードを入力" class="border border-black rounded-md p-1 mt-1 w-full">
          </div>
        </div>
      </div>
    </div>

    <table class="w-full mt-16">
      <tr class="flex justify-between border-t-2 border-b-2">
        <th class="w-1/6">名前</th>
        <th class="w-1/6">チーム</th>
        <th class="w-1/6">スキル</th>
        <th class="w-1/6">勉強時間</th>
        <th class="w-1/6">案件</th>
      </tr>
      <tr class="p-2 flex justify-between items-center border-b-2">
        <th class="w-1/6 flex justify-center items-center">
          <img src="/_nuxt/assets/img/team-1-800x800.jpg" alt="" class="w-12 h-12 mr-4 rounded-full border-none shadow-lg">
          関根健太
        </th>
        <th class="w-1/6">チームA</th>
        <th class="w-1/6">Java, AWS</th>
        <th class="w-1/6">5時間</th>
        <th class="w-1/6">
          <button class=" bg-gray-300 border border-gray-300 rounded-md px-4 py-2" @click="show=true">案件</button>
        </th>
      </tr>
    </table>
    <Keyst10402 @closeModal="show=false" v-if="show" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Base'
})
export default class extends Vue {
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style></style>