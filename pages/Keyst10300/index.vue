// 管理側
<template>
  <div class='p-3'>
    <select name="team" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
      <option value="A">Aチーム</option>
      <option value="B">Bチーム</option>
      <option value="C">Cチーム</option>
    </select>

    <select name="month" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
      <option value="5">5月</option>
      <option value="6">6月</option>
      <option value="7">7月</option>
    </select>


    <keyst10301
      :resrveHeader.sync='ResrveHeader'
    />
    <keyst10302 />

    <modal name='modal-content' class='bg-gary-300' :width='910' :height='230'>
      <keyst10303 />
    </modal>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';
import keyst10303 from '~/components/Keyst10300/Keyst10303.vue';
import { Keyst10300Module } from '~/utils/store-accessor';
import ResrveHeader from '~/classes/reserveHeader';


@Component({
  name: 'Keyst10300',
  components: {
    keyst10301,
    keyst10302,
    keyst10303
  },
  // async asyncData() {
  //   await Keyst10300Module.initialize();
  // }
})
export default class extends Vue {
  get resrveHeaderList(): ResrveHeader[] {
    return Keyst10300Module.resrveHeaderList;
  }

}
</script>

<style></style>
