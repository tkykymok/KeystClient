<template>
  <div>
    <input type='file'  @change='onFileUploaded($event)'>
    <button
      class='bg-blue-200 p-2'
      @click='showFileName'
    >
      登録
    </button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component({
  components: {
  }
})
export default class FileInput extends Vue {
  inputFile: File | null = null;

  onFileUploaded(event: any) {
    this.inputFile = event.target.files[0];
  }

  showFileName() {
  }
}
</script>

<style></style>
