<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Keyst401'
})
export default class extends Vue {

}
</script>

<style></style>