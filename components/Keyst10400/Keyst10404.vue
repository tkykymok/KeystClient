<template>
  <div v-if='showImage' class="w-full h-full p-6 flex justify-center items-center z-10 fixed top-0 left-0 bg-black bg-opacity-50" @click="closeImageModal">
    <img :src="userInfo.prfImgStrgDrctry" alt="" class="w-64 h-64 rounded-full border-none shadow-lg">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import UserInfo4Keyst10400 from '~/classes/userInfo4Keyst10400';

@Component({
  name: 'Keyst10404'
})
export default class extends Vue {
  @Prop({ required: true })
  userInfo!: UserInfo4Keyst10400;
  @Prop({ required: true })
  userId!: number;

  public showImage: boolean = false;

  /**
   * プロフィール画像モーダルを表示する(Keyst10402で使用)
   */
  openImageModal() {
    this.showImage = true;
  }

  /**
   * プロフィール画像モーダル非表示イベント
   */
  closeImageModal() {
    this.showImage = false;
  }

}
</script>

<style></style>
