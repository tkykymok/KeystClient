<template>
  <div class='flex-auto'>
    <div class='mx-2 p-2 text-center text-gray-800 font-bold bg-teal-400 rounded-md shadow-md'>スキルシート一覧</div>
    <div class='mx-2 p-2 shadow-md cursor-pointer hover:bg-teal-100 rounded-md' v-for='(skillSheet, idx) in skillSheetList' :key='idx'>
      {{ skillSheet }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Keyst10203 extends Vue {
  // テスト用
  public skillSheetList: string[] = [
    'テスト1',
    'テスト2',
    'テスト3',
    'テスト4',
    'テスト5'
  ];

}
</script>

<style></style>
