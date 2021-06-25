// ユーザー側
<template>
  <div class='p-3'>
    <div class='flex text-center'>
      <p class='p-1 w-20 border-2 border-gray-300 bg-white rounded-md'>
        Aチーム
      </p>
      <p class='p-1 w-auto ml-10 border-2 border-gray-300 bg-white rounded-md'>
        担当：佐藤　太郎
      </p>
    </div>

    <div>
      <button @click="show">クリックする</button>

      <modal name="modal-content">
        <p>モーダルウィンドウで表示されるコンテンツ</p>
      </modal>
    </div>

    <keyst10301 />
    <keyst10302 />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';

@Component({
  name: 'Keyst10310',
  components: {
    keyst10301,
    keyst10302
  }
})
export default class extends Vue {

  show() {
    this.$modal.show("modal-content");
  }
  hide() {
    this.$modal.hide("modal-content");
  }

}
</script>

<style></style>
