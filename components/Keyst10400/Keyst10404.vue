<template>
  <div class="w-full h-full p-6 flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-50" @click="$emit('closeModalImage')">
    <img src="/_nuxt/assets/img/user.png" alt="" class="w-64 h-64 rounded-full border-none shadow-lg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Keyst10404'
})
export default class extends Vue {

}
</script>

<style></style>