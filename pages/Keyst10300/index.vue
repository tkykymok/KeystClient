// ユーザー側
<template>
  <div class='p-3'>
    <select name="team" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
      <option value="A">Aチーム</option>
      <option value="B">Bチーム</option>
      <option value="C">Cチーム</option>
    </select>

    <keyst10301 />
    <keyst10302 />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';

@Component({
  name: 'Keyst10300',
  components: {
    keyst10301,
    keyst10302
  }
})
export default class extends Vue {


}
</script>

<style></style>
