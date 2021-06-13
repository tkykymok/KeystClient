// ユーザー側
<template>
  <div class='p-3'>
    <div>
    <p class='p-1  w-20 text-center border-2 border-gray-300 bg-white rounded-md'>
      Aチーム
    </p>
    </div>
    <keyst10303 />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10303 from '~/components/Keyst10300/Keyst10303.vue';

@Component({
  name: 'Keyst10320',
  components: {
    keyst10303
  }
})
export default class extends Vue {


}
</script>

<style></style>
