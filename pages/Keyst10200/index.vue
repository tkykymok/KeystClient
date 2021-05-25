<template>
  <div class='p-4 flex'>
    <Keyst10201 />
    <Keyst10203 />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';
import Keyst10203 from '~/components/Keyst10200/Keyst10203.vue';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201,
    Keyst10203
  }
})
export default class extends Vue {


}
</script>

<style></style>
