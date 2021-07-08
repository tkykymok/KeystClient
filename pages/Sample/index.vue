<template>
  <div>
    <div class='p-10 flex'>
      <div class='mx-5 w-1/5'>
        サンプル1 初期状態
        <VueCtkDateTimePicker
          v-model='sample1'
        />
        <div>
          入力値:{{ sample1 }}
        </div>
      </div>
      <div class='mx-5 w-1/5'>
        サンプル2 日付のみ
        <VueCtkDateTimePicker
          v-model='sample2'
          only-date
          no-header
          no-button
          format='YYYY-MM-DD'
          formatted='YYYY-MM-DD'
          label='日付'
          auto-close
        />
        <div>
          入力値:{{ sample2 }}
        </div>
      </div>

      <div class='mx-5 w-1/5'>
        サンプル3 時間のみ
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
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Sample'
})
export default class extends Vue {
  sample1: any = '';
  sample2: any = '';
  sample3: any = '12:00:00';


}
</script>

<style></style>
