<template>
  <PrjCodeSuggest />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PrjCodeSuggest from '~/components/SelectOptions/PrjCodeSuggest.vue';

@Component({
  name: 'Suggest',
  components: {
    PrjCodeSuggest
  }
})
export default class extends Vue {

}
</script>

<style></style>
