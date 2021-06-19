<template>
  <div>
    <table class="w-full mt-16">
      <tr class="flex justify-between border-t-2 border-b-2">
        <th class="w-1/6">
          名前
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          チーム
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          スキル
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          勉強時間
          <button>▲</button>
          <button>▼</button>
        </th>
        <th class="w-1/6">
          案件
          <button>▲</button>
          <button>▼</button>
        </th>
      </tr>
      <tr class="p-2 flex justify-between items-center border-b-2">
        <th class="w-1/6 flex justify-center items-center">
          <button @click="showImage=true">
            <img src="/_nuxt/assets/img/user.png" alt="" class="w-12 h-12 rounded-full border-none shadow-lg">
          </button>
          <p class="ml-4">関根健太</p>
        </th>
        <th class="w-1/6">チームA</th>
        <th class="w-1/6">Java, AWS</th>
        <th class="w-1/6">5時間</th>
        <th class="w-1/6">
          <button class=" bg-gray-300 border border-gray-300 rounded-md px-4 py-2" @click="show=true">案件</button>
        </th>
      </tr>
    </table>
    <Keyst10403 @closeModal="show=false" v-if="show" />
    <Keyst10404 @closeModalImage="showImage=false" v-if="showImage" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10403 from '~/components/Keyst10400/Keyst10403.vue';
import Keyst10404 from '~/components/Keyst10400/Keyst10404.vue';

@Component({
  name: 'Keyst10402',
  components: {
    Keyst10403,
    Keyst10404,
  },
})
export default class extends Vue {
  data() {
    return {
      show: false,
      showImage: false,
    }
  }
}
</script>

<style></style>