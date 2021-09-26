// 管理者1on1予約日時選択
<template>
  <div class='w-1/2'>
    <p class='py-3 font-bold text-gray-600'>面談可能日時</p>

    <div class='w-1/3'>
      <VueCtkDateTimePicker
        v-model='reserveDate'
        only-date
        no-header
        no-button
        format='YYYY-MM-DD'
        formatted='YYYY-MM-DD'
        label='日付'
        :min-date='today'
        auto-close
    />
    </div>
    <div class='flex mt-4'>
      <div class='w-1/5'>
        <VueCtkDateTimePicker
          v-model='fromTime'
          only-time
          format='HH:mm:ss'
          formatted='HH:mm'
          label='時間'
          minuteInterval='30'
          right
      />
      </div>
      <p class='ml-4'>~</p>
      <div class='w-1/5 ml-4'>
        <VueCtkDateTimePicker
          v-model='toTime'
          only-time
          format='HH:mm:ss'
          formatted='HH:mm'
          label='時間'
          minuteInterval='30'
          right
        />
      </div>
    </div>
    <div class='w-1/5 mt-4'>
      <button class='px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 active:outline-none focus:outline-none' @click='save'>登録</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { Keyst10300Module } from '~/utils/store-accessor';
import Keyst10300SaveQ from '~/classes/form/keyst10300SaveQ';
import { getToday } from '~/utils/converter';

@Component({})
export default class Keyst10301 extends Vue{

  get selectedTeam() {
    return Keyst10300Module.team;
  }

  public reserveDate: string = '';
  public fromTime: string = '16:00:00';
  public toTime: string = '21:00:00';

  /** 今日の日付 */
  get today () {
    return  getToday();
  }

  /**
   * 面談可能日時登録（管理者）
   */
  save() {
    try {
      let reqForm: Keyst10300SaveQ = new Keyst10300SaveQ();
      reqForm.reserveId = Keyst10300Module.reserveId;
      reqForm.team = this.selectedTeam;
      reqForm.reserveDate = this.reserveDate;
      reqForm.fromTime = this.fromTime;
      reqForm.toTime = this.toTime;
      Keyst10300Module.save(reqForm);
    } catch (error) {
    }
  }

}

</script>

<style></style>
