<template>
  <div v-if='show' class="w-full h-full p-6 flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-50" @click="close">
    <div class="w-1/2 py-12 bg-white">
      <h1 class="text-center text-2xl font-bold">案件情報</h1>
      <div class="flex justify-around pt-8">
        <p>稼働開始年月日</p>
        <p>{{ _prjInfo.prjStartDate }}</p>
      </div>
      <div class="flex justify-around pt-8">
        <p>案件名</p>
        <p>{{ _prjInfo.prjName }}</p>
      </div>
      <div class="flex justify-around pt-8">
        <p>単価</p>
        <p>{{ _prjInfo.contractPrice }}円</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue, Prop } from 'nuxt-property-decorator';
import PrjInfo from '~/classes/prjInfo';

@Component({
  name: 'Keyst10403'
})
export default class extends Vue {
  @PropSync('prjInfo', { required: true, default: null })
  _prjInfo!: PrjInfo;
  @Prop({ required: true })
  userId!: number;

  public show: boolean = false;

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

}
</script>

<style></style>
