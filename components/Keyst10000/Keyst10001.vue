<template>
  <div>
    <div class='rounded overflow-hidden shadow-lg'>
      <div class='bg-gray-200 text-gray-700 font-bold text-lg px-6 py-4'>お知らせ</div>
      <div class='px-6 py-4 overflow-y-scroll scroll' style='height: 350px'>
        <ul>
          <li v-for='(notification, idx) in _notificationInfoList' :key='idx'>
            <div
              class='text-blue-600 underline hover:text-blue-800 cursor-pointer'
              @click='toggleShow(idx)'
            >
              {{ notification.title }}
            </div>
            <div v-show='notification.isShown' class='border px-4 py-3 my-2 text-gray-700'>
              <pre>{{ notification.content }}</pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import NotificationInfo from '~/classes/notificationInfo';
import { Keyst10000Module } from '~/utils/store-accessor';

@Component({})
export default class Keyst10001 extends Vue {
  @PropSync('notificationInfoList', { required: true })
  _notificationInfoList!: NotificationInfo[];

  toggleShow(idx: number) {
    let target = this._notificationInfoList.find((obj, index) => {
      return idx == index;
    });
    if (target) {
      this.$set(target, 'isShown', !target.isShown);
    }
    Keyst10000Module.SET_NOTIFICATION_INFO_LIST(this._notificationInfoList);
  }
}
</script>


<style scoped>
.scroll {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-w: none;
}

.scroll::-webkit-scrollbar {
  display: none;
}
</style>
