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
      <button class='p-1 text-sm font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer' @click='saveDate'>登録</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import { Keyst10300Module } from '~/utils/store-accessor';
import Keyst10300SaveQ from '~/classes/form/keyst10300SaveQ';

@Component({})
export default class Keyst10301 extends Vue{

  @PropSync('team', { required: true, default: null })
  selectedTeam!: string;

  reserveDate: any = '';
  fromTime: any = '';
  toTime: any = '';

  /**
   * 面談可能日時登録（管理者）
   */
  saveDate() {
    try {
      let reqForm: Keyst10300SaveQ = new Keyst10300SaveQ();
      reqForm.reserveDate = this.reserveDate;
      reqForm.fromTime = this.fromTime;
      reqForm.toTime = this.toTime;
      reqForm.team = this.selectedTeam;
      Keyst10300Module.save(reqForm);
    } catch (error) {
    }
  }

}

</script>

<style></style>
