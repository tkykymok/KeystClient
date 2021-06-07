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
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';
import Keyst10202 from '~/components/Keyst10200/Keyst10202.vue';


@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10202,
    Keyst10203
  }
})
export default class extends Vue {

}
</script>

<style></style>
