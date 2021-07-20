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
      <button class='p-2 mt-1 font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer' @click='show'>予約</button>

      <modal name='modal-content' class='bg-gary-300' :width='400' :height='200'>
        <div class='flex justify-center'>
          <a href="" class='w-1/3 p-4 hover:bg-gray-100'>
            <img alt='' :src='sunImage' />
          </a>
          <a href="" class='w-1/3 p-4 hover:bg-gray-100'>
            <img alt='' :src='cloudImage' />
          </a>
          <a href="" class='w-1/3 p-4 hover:bg-gray-100'>
            <img alt='' :src='rainImage' />
          </a>
        </div>
        <div class='text-center'>
          <input type="submit" class='p-2 mt-1 font-bold text-gray-200 bg-blue-500 border rounded-lg  cursor-pointer' value="登録" />
        </div>
      </modal>
    </div>

    <keyst10302 />

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';

@Component({
  name: 'Keyst10310',
  components: {
    keyst10302
  }
})
export default class extends Vue {
  sunImage: NodeRequireFunction = require('@/assets/img/sun.png')
  cloudImage: NodeRequireFunction = require('@/assets/img/cloud.png')
  rainImage: NodeRequireFunction = require('@/assets/img/rain.png')

  show() {
    this.$modal.show('modal-content');
  }
  hide() {
    this.$modal.hide('modal-content');
  }

}
</script>

<style></style>
