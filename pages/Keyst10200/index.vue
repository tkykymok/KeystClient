<template>
  <div class='p-4'>
    <Keyst10201 />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Keyst10201 from '~/components/Keyst10200/Keyst10201.vue';

@Component({
  name: 'Keyst10200',
  components: {
    Keyst10201
  }
})
export default class extends Vue {

}
</script>

<style></style>
