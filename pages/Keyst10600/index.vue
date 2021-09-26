<template>
  <div class='h-screen mb-0'>
    <div class='flex-auto pt-4'>
      <div>
        <table class='text-center w-full shadow-md'>
          <thead class='bg-black flex text-white w-full'>
          <tr class='flex w-full font-bold bg-gray-200 text-gray-600'>
            <th class='p-3 w-1/5'>
              件名
            </th>
            <th class='p-3 w-3/5 font-bold uppercase bg-gray-200 text-gray-600'>
              掲載期間
            </th>
            <th class='p-3 w-1/5 font-bold uppercase bg-gray-200 text-gray-600'>
              掲載者
            </th>
            <th class='p-3 w-1/5 font-bold uppercase bg-gray-200 text-gray-600'>
              状態
            </th>
            <th class='p-3 w-1/5 font-bold uppercase bg-gray-200 text-gray-600'>
              登録日時
            </th>
          </tr>
          </thead>
          <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
          <tbody class='bg-grey-light flex flex-col items-center overflow-y-scroll w-full' style='height: 200px'>
          <tr
            v-for='notification in notificationInfoList' :key='notification.id'
            class='flex w-full text-center cursor-pointer'
            :class="selectedNotificationId === notification.notificationId? 'bg-teal-200':'hover:bg-teal-100'"
            @click='selectNotification(notification.notificationId)'
          >
            <td class='p-3 w-1/5 text-gray-800 border-t border-gray-200'>{{ notification.title }}</td>
            <td class='p-3 w-3/5 text-gray-800 border-t border-gray-200'>
              {{ convertDateToYearMonthDay(notification.postStartDate) }} 〜
              {{ convertDateToYearMonthDay(notification.postEndDate) }}
            </td>
            <td class='p-3 w-1/5 text-gray-800 border-t border-gray-200'>{{ notification.notificationRegPersonName }}
            </td>
            <td class='p-3 w-1/5 text-gray-800 border-t border-gray-200'>
              <span v-if='notification.expiredFlag'>掲載終了</span>
              <span v-else>掲載中</span>
            </td>
            <td class='p-3 w-1/5 text-gray-800 border-t border-gray-200'>{{ notification.notificationRegDatetime }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class='pt-4 flex'>
      <button
        class='px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 active:outline-none focus:outline-none'
        @click='createNewNotification'
      >新規作成
      </button>
    </div>

    <div class='pt-4 flex z-0'>
      <table class='w-full shadow-md'>
        <tbody>
        <tr>
          <th class='p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/6'>
            件名
          </th>
          <td class='p-2 text-gray-800 border'>
            <input
              v-model='notificationInfo.title'
              class='w-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
            />
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/6'>
            本文
          </th>
          <td class='p-3 text-gray-800 border'>
            <textarea
              v-model='notificationInfo.content'
              class='w-full h-full p-2 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
              style='height: 300px'
            />
          </td>
        </tr>
        <tr>
          <th class='p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-1/6'>
            掲載期間
          </th>
          <td class='p-3 text-gray-800 border'>
            <div class='flex'>
              <div class='w-2/5'>
                <!-- 掲載開始日 -->
                <VueCtkDateTimePicker
                  id='postStartDate'
                  v-model='postStartDate'
                  only-date
                  no-button
                  auto-close
                  noHeader
                  position='top'
                  :shortcut="'thisMonth'"
                  format='YYYY-MM-DD'
                  formatted='YYYY-MM-DD'
                  label='掲載開始日'
                  :max-date='postEndDate'
                  @input='$set(notificationInfo, "postStartDate", $event)'
                  locale='en'
                />
              </div>
              <div class='p-2'>〜</div>
              <div class='w-2/5'>
                <!-- 掲載終了日 -->
                <VueCtkDateTimePicker
                  id='postEndDate'
                  v-model='postEndDate'
                  only-date
                  no-button
                  auto-close
                  noHeader
                  position='top'
                  format='YYYY-MM-DD'
                  formatted='YYYY-MM-DD'
                  label='掲載終了日'
                  :min-date='postStartDate'
                  @input='$set(notificationInfo, "postEndDate", $event)'
                  locale='en'
                />
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class='py-4'>
      <button
        class='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none'
        @click='save'
      >新規保存
      </button>
      <button
        class='px-4 py-2 ml-2 bg-green-500 text-white rounded-md hover:bg-green-400 active:outline-none focus:outline-none'
        v-show='selectedNotificationId'
        @click='update'
      >更新
      </button>
      <button
        class='px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-400 active:outline-none focus:outline-none'
        v-show='selectedNotificationId'
        @click='deleteNotification'
      >削除
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';
import { Keyst10600Module } from '~/utils/store-accessor';
import NotificationInfo from '~/classes/notificationInfo';
import { convertDateToYearMonthDay } from '~/utils/converter';
import _ from 'lodash';
import Keyst10600SaveQ from '~/classes/form/keyst10600SaveQ';
import Keyst10600UpdateQ from '~/classes/form/keyst10600UpdateQ';
import Keyst10600DeleteQ from '~/classes/form/keyst10600DeleteQ';

@Component({
  name: 'Keyst10600',
  components: {},
  async asyncData(context: Context) {
    await Keyst10600Module.initialize().catch(error => {
      if (error.response.status === 401 || error.response.status === 403) {
        context.redirect('/login');
      }
    });
  }
})
export default class extends Vue {
  public selectedNotificationId: number | null = null;

  // 掲載開始日・終了日を一時的に保存する変数
  // カレンダーから選択した日付が画面に反映されない事象を解決するための対応
  public postStartDate: string = '';
  public postEndDate: string = '';

  @Watch('notificationInfo', { immediate: true, deep: true })
  watchNotificationInfo() {
    this.postStartDate = this.notificationInfo.postStartDate;
    this.postEndDate = this.notificationInfo.postEndDate;
  }


  /**
   * yyyy年MM月dd日の形式に変換する
   */
  public convertDateToYearMonthDay = convertDateToYearMonthDay;

  /**
   * お知らせ情報一覧
   */
  get notificationInfoList(): NotificationInfo[] {
    let notificationInfoList: NotificationInfo[] = [];
    Keyst10600Module.notificationInfoList.forEach(obj => {
        let notificationInfo = JSON.parse(JSON.stringify(obj));
        notificationInfoList.push(notificationInfo);
      }
    );
    return notificationInfoList;
  }

  /**
   * お知らせ情報
   */
  get notificationInfo(): NotificationInfo {
    if (this.selectedNotificationId) {
      return this.notificationInfoList.find(obj => obj.notificationId === this.selectedNotificationId)!;
    } else {
      return new NotificationInfo();
    }
  }


  /**
   * おしらせ新規保存
   */
  async save() {
    // お知らせ情報をリクエストFormに移送する。
    let reqForm: Keyst10600SaveQ = _.assign(new Keyst10600SaveQ(), _.pick(this.notificationInfo, _.keys(new Keyst10600SaveQ())));
    await Keyst10600Module.save(reqForm)
      .then(() => {
          this.createNewNotification();
        }
      )
      .catch(error => {
        if (error.response.status === 401) {
          this.$router.push('/login');
        }
      });
  }

  /**
   * お知らせ更新
   */
  async update() {
    // お知らせ情報をリクエストFormに移送する。
    let reqForm: Keyst10600UpdateQ = _.assign(new Keyst10600UpdateQ(), _.pick(this.notificationInfo, _.keys(new Keyst10600UpdateQ())));
    await Keyst10600Module.update(reqForm)
      .then(() => {
          this.createNewNotification();
        }
      )
      .catch(error => {
        if (error.response.status === 401) {
          this.$router.push('/login');
        }
      });
  }

  /**
   * お知らせ削除
   */
  async deleteNotification() {
    // スキルシートヘッダー部をリクエストFormに移送する。
    let reqForm: Keyst10600DeleteQ = new Keyst10600DeleteQ();
    this.$set(reqForm, 'notificationId', this.notificationInfo.notificationId); // スキルシートID
    this.$set(reqForm, 'versionExKey', this.notificationInfo.versionExKey); // 排他制御カラム

    await Keyst10600Module.deleteNotification(reqForm)
      .then(() => {
          this.createNewNotification();
        }
      )
      .catch(error => {
        if (error.response.status === 401) {
          this.$router.push('/login');
        }
      });
  }

  /**
   * お知らせ選択
   * @param id
   */
  selectNotification(id: number) {
    console.log(id);
    this.selectedNotificationId = id;
  }

  /**
   * お知らせ新規作成
   */
  createNewNotification() {
    this.selectedNotificationId = null;
  }

}
</script>

<style></style>
