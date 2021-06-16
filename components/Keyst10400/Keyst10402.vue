<template>
  <div class="w-full h-full p-6 flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-50">
    <div class="w-1/2 p-8 bg-white">
      <h1 class="text-center">案件情報</h1>
      <div class="flex justify-around pt-8">
        <p>稼働開始年月日</p>
        <p>2021/04/01</p>
      </div>
      <div class="flex justify-around pt-8">
        <p>案件名</p>
        <p>案件A</p>
      </div>
      <div class="flex justify-around pt-8">
        <p>単価</p>
        <p>330,000円</p>
      </div>
      <div class="pt-8">
        <button @click="$emit('closeModal')">閉じる</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Base'
})
export default class extends Vue {

}
</script>

<style></style>