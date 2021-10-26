<template>
  <div>
    <PrjCodeSuggest />
    <PrjCodeSuggest2 />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import PrjCodeSuggest from '~/components/SelectOptions/PrjCodeSuggest.vue';
import PrjCodeSuggest2 from '~/components/SelectOptions/PrjCodeSuggest2.vue';

@Component({
  name: 'Suggest',
  components: {
    PrjCodeSuggest,
    PrjCodeSuggest2
  }
})
export default class extends Vue {

}
</script>

<style></style>
