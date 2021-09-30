<template>
  <div v-if='show' class="w-full h-full p-6 flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-50" @click="close">
    <div class="w-auto px-10 py-10 bg-white">
      <p
        v-if='assignPrjFlg'
        class="text-center font-bold">現在参画している案件情報</p>
      <div class="flex justify-center items-center">
        <div
          v-for='(prjInfo, idx) in assignPrjInfoList' :key='idx'
          class="px-5">
          <div v-if='assignPrjFlg'>
            <div class="flex justify-around pt-8">
              <p>案件名　　　　　　</p>
              <p>{{ prjInfo.prjName }}</p>
            </div>
            <div class="flex justify-around pt-8">
              <p>稼働開始年月日　　</p>
              <p>{{ prjInfo.prjStartDate }}</p>
            </div>
            <div class="flex justify-around pt-8">
              <p>単価　　　　　　　</p>
              <p>{{ prjInfo.contractPrice }}円</p>
            </div>
            <div class="pt-8 flex justify-center items-center">
              <button
                @click='$router.push({ path: `/keyst10500?prjCode=${prjInfo.prjCode}`})'
                class='px-2 py-1 my-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'>
                案件詳細
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if='!assignPrjFlg'>
        <p class="text-center font-bold">現在参画している案件はありません</p>
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
  @PropSync('prjInfoList', { required: true, default: null })
  _prjInfoList!: PrjInfo[];
  @Prop({ required: true })
  userId!: number;

  public show: boolean = false;
  public assignPrjFlg: boolean = false;

  get assignPrjInfoList(): PrjInfo[] {
    let assignPrjInfoList: PrjInfo[] = [];
    this._prjInfoList.forEach(obj => {
      if (obj.prjStartDate !== null && obj.prjEndDate === null) {
        assignPrjInfoList.push(obj);
        this.assignPrjFlg = true;
      }
    })
    console.log(this.assignPrjFlg);
    return assignPrjInfoList;
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
</script>

<style></style>
