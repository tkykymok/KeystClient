<template>
  <div class="p-4">
    <p class="pb-4">参画者一覧</p>
    <table class="w-full table-fixed shadow-md">
      <tr>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">ユーザー名</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">契約単価</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">稼働開始日</th>
        <th class="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 w-2/12 m-2">稼働終了日</th>
      </tr>
      <tr v-for='(prjUserAllocation, idx) in _prjUserAllocationList' :key="idx">
        <td class="p-3 text-gray-800 border border-b">
          <UserName
            :userId.sync='prjUserAllocation.userId'
          />
        </td>
        <td class="p-3 text-gray-800 border border-b">
          <input type="text" :value="prjUserAllocation.contractPrice" contenteditable="true" class="w-full p-1 border-2 border-gray-300 rounded-md active:outline-none focus:outline-none focus:shadow-outline text-center">
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          {{ prjUserAllocation.prjStartDate }}
        </td>
        <td class="p-3 text-gray-800 border border-b text-center">
          {{ prjUserAllocation.prjEndDate }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import UserName from '~/components/SelectOptions/UserName.vue';
import PrjUserAllocation from '~/classes/prjUserAllocation';
import PrjMaster from '~/classes/prjMaster';

@Component({
  name: 'Keyst10502',
  components: {
    UserName
  },
})
export default class extends Vue {
  @PropSync('prjMaster', { required: false, default: null })
  _prjMaster!: PrjMaster;
  @PropSync('prjUserAllocationList', { required: true, default: () => ([]) })
  _prjUserAllocationList!: PrjUserAllocation[];
}
</script>

<style></style>
