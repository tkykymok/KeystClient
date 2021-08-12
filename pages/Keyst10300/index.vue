// 管理側
<template>
  <div class='p-3'>
    <!-- 管理者のみ表示する -->
    <select name="team" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
      <option value="A">Aチーム</option>
      <option value="B">Bチーム</option>
      <option value="C">Cチーム</option>
    </select>

    <select name="month" class='p-1 border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'>
      <option value="5">5月</option>
      <option value="6">6月</option>
      <option value="7">7月</option>
    </select>

    <!-- 管理者のみ表示する -->
    <keyst10301
      :reserveInfoList='reserveInfoList'
    />
    <keyst10302
      :reserveInfoList='reserveInfoList'
    />

    <modal name='modal-content' class='bg-gary-300' :width='910' :height='230'>
      <keyst10303 />
    </modal>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import keyst10301 from '~/components/Keyst10300/Keyst10301.vue';
import keyst10302 from '~/components/Keyst10300/Keyst10302.vue';
import keyst10303 from '~/components/Keyst10300/Keyst10303.vue';
import { Keyst10300Module } from '~/utils/store-accessor';
import ReserveInfo from '~/classes/reserveInfo';
import ReserveInfoHeader from '~/classes/reserveInfoHeader';
import ReserveInfoDetail from '~/classes/reserveInfoDetail';


@Component({
  name: 'Keyst10300',
  components: {
    keyst10301,
    keyst10302,
    keyst10303
  },
  async asyncData({redirect, store}) {
    try {
      await Keyst10300Module.initialize();
    } catch (error) {
      redirect('/login')
    }
  }
})
export default class extends Vue {
  /**
   * スキルシート情報一覧
   */
  get reserveInfoList(): ReserveInfo[] {
    return Keyst10300Module.reserveInfoList;
  }

  /**
   * スキルシートヘッダー
   */
  // get reserveInfoHeader(): ReserveInfoHeader {
  //   return JSON.parse(JSON.stringify(Keyst10300Module.reserveInfoHeader));
  // }

  /**
   * スキルシート明細一覧
   */
  // get reserveInfoDetailList(): ReserveInfoDetail[] {
  //   let reserveInfoDetailList: ReserveInfoDetail[] = [];
  //   Keyst10300Module.reserveInfoDetailList.forEach(obj => {
  //       let reserveInfoDetail = JSON.parse(JSON.stringify(obj));
  //       reserveInfoDetailList.push(reserveInfoDetail);
  //     }
  //   );
  //   return reserveInfoDetailList;
  // }


}
</script>

<style></style>
