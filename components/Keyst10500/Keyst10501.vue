<template>
  <div class="p-4 pb-12">
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件コード</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">案件名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">顧客名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">エンド顧客名</th>
      </tr>
      <tr>
        <td class="p-3 text-gray-800 border border-b text-center">P0001</td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" value="調達システム" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" value="アーク・システム" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" value="日立建機株式会社" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Keyst10501',
})
export default class extends Vue {

}
</script>

<style></style>
