<template>
  <PrjCodeSuggestSample />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PrjCodeSuggestSample from '~/components/SelectOptions/PrjCodeSuggestSample.vue';

@Component({
  name: 'Suggest',
  components: {
    PrjCodeSuggestSample
  }
})
export default class extends Vue {

}
</script>

<style></style>
