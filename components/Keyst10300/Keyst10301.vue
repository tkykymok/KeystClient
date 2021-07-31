<template>
  <div class='w-1/2'>
    <p class='py-3 font-bold text-gray-600'>面談可能日時</p>
    <div class='w-56'>
      <VueCtkDateTimePicker v-model="FromTimeValue"></VueCtkDateTimePicker>
      <p class='text-center'>～</p>
      <VueCtkDateTimePicker v-model="ToTimeValue"></VueCtkDateTimePicker>
      <div class='text-right'>
        <input type="submit" class='p-2 mt-1 font-bold text-gray-200 bg-blue-500 border rounded-lg cursor-pointer' value="登録" />
      </div>
  </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class Keyst10301 extends Vue{
  data() {
    return {
      FromTimeValue: "",
      ToTimeValue: ""
    }
  }
}

</script>

<style></style>
