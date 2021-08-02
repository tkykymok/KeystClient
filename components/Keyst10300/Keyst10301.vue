// 管理者1on1予約日時選択
<template>
  <div class='w-1/2'>

    <div>{{ _reserveInfo }}</div>

    <p class='py-3 font-bold text-gray-600'>面談可能日時</p>
    <div class='w-1/3'>
      <VueCtkDateTimePicker
        v-model='sample1'
        only-date
        no-header
        no-button
        format='YYYY-MM-DD'
        formatted='YYYY-MM-DD'
        label='日付'
        auto-close
      />
      <div>
        入力値:{{ sample1 }}
      </div>
    </div>
    <div class='flex'>
      <div class='w-1/5'>
        <VueCtkDateTimePicker
          v-model='sample2'
          only-time
          format='HH:mm:ss'
          formatted='HH:mm'
          label='時間'
          minuteInterval='30'
          right
        />
        <div>
          入力値:{{ sample2 }}
        </div>
      </div>
      <p class='ml-4'>~</p>
      <div class='w-1/5 ml-4'>
        <VueCtkDateTimePicker
          v-model='sample3'
          only-time
          format='HH:mm:ss'
          formatted='HH:mm'
          label='時間'
          minuteInterval='30'
          right
        />
        <div>
          入力値:{{ sample3 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import ReserveInfo from '~/classes/reserveInfo';
@Component({})
export default class Keyst10301 extends Vue{
  /** 入力パラメータ スキルシートヘッダー一覧 */
  @PropSync('reserveInfo',{ required: true, default: null })
  _reserveInfo!: ReserveInfo;

  sample1: any = '';
  sample2: any = '';
  sample3: any = '';

}

</script>

<style></style>
