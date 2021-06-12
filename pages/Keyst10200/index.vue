<template>
  <div>
    <div class='p-4 flex'>
      <!-- スキルシートヘッダー部 -->
      <Keyst10201 />
      <!-- スキルシート一覧-->
      <Keyst10203 />
    </div>
    <!-- スキルシート明細部 -->
    <Keyst10202 />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';
import Keyst10202 from '~/components/Keyst10200/Keyst10202.vue';
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';
import { Keyst10200Module } from '~/utils/store-accessor';
import { $axios } from '~/utils/api';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10202,
    Keyst10203
  },
  async asyncData() {
    await Keyst10200Module.initialize();
  }
})
export default class extends Vue {



  mounted() {

  }


}
</script>

<style></style>
