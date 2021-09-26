<template>
  <div class='h-screen text-2xl'>
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'plain-layout',
  layout: 'error'
})
export default class extends Vue {
  @Prop({required: true }) error: any;
};
</script>
