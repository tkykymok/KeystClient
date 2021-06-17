<template>
  <div class='p-4'>
    <div class="border border-black rounded-md text-center p-2 w-1/5">
      メンバー一覧
    </div>
    <keyst10401 />
    <Keyst10402 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10401 from '~/components/Keyst10400/Keyst10402.vue';

@Component({
  name: 'Keyst10400'
})
export default class extends Vue {

}
</script>

<style></style>