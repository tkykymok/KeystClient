<template>
  <div class='w-1/5'>
    <VueSimpleSuggest
      v-model='selected'
      type='search'
      display-attribute='name'
      value-attribute='code'
      :list='selectOptionList'
      :min-length='0'
      filter-by-query
      mode='select'
      @blur='blur'
      class='w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    />
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css';

@Component({
  components: {
    VueSimpleSuggest
  }
})
export default class CustCodeSuggest extends SelectOptionBase {
  /** 入力パラメータ custCode */
  @PropSync('custCode', { required: false, default: null })
  _custCode!: string;

  selected: selectOption | null = null;

  created() {
    this.getCustCodeOptions();
  }

  /**
   * input の中身を空にして、inputからカーソルを外すと、
   * inputの中身が空にも関わらず、selectedが変更されない事象の対応。
   * @param event
   */
  blur(event: any) {
    if (!event.target.value) {
      this.selected = null;
    }
  }

  /**
   * 入力したキーワードを監視する関数
   * valueがObserverになるため、JSONに変換してcodeをcustCodeに代入。
   */
  @Watch('selected', { immediate: true, deep: true })
  watchSelected() {
    if (this.selected !== null) {
      var selectedFormatJson = JSON.parse(JSON.stringify(this.selected));
      this._custCode = selectedFormatJson.code;
    }
  }

  async getCustCodeOptions() {
    const { data } = await $axios.get('/selectOption/custName');
    this.selectOptionList = data;
    // 先頭の要素を削除する。
    this.selectOptionList.shift();
  }
}
</script>

<style></style>
