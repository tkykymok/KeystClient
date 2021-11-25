<template>
  <div>
    <div class='flex justify-between'>
      <div class='w-6/12' style='height: 450px'>
        <div class='p-4'>
          <Keyst10001
            :notificationInfoList.sync='notificationInfoList'
          />
        </div>
      </div>
      <div class='w-6/12' style='height: 450px'>
        <div class='p-4'>
          <Keyst10002 />
        </div>
      </div>
    </div>
    <div class='w-full'>
      <div class='p-4'>
        <div class='rounded overflow-hidden shadow-lg'>
          <div class='px-6 py-4 bg-gray-600 flex justify-center inline-block align-text-bottom' style='height: 200px'>
            検討中
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';
import { Keyst10000Module } from '~/utils/store-accessor';
import Keyst10001 from '~/components/Keyst10000/Keyst10001.vue';
import Keyst10002 from '~/components/Keyst10000/Keyst10002.vue';

@Component({
  name: 'Keyst10000',
  components: {
    Keyst10001,
    Keyst10002
  },
  async asyncData(context: Context) {
    await Keyst10000Module.initialize();
  }
})
export default class extends Vue {
  get notificationInfoList() {
    return JSON.parse(JSON.stringify(Keyst10000Module.notificationInfoList));
  }
}
</script>

<style></style>
