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
    />
    <p>Chosen element: {{ selected }}</p>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css';

@Component({
  components: {
    VueSimpleSuggest
  }
})
export default class PrjCodeSuggestSample extends SelectOptionBase {
  /** 入力パラメータ prjCode */
  @PropSync('prjCode', { required: false, default: null })
  _prjCode!: string;

  selected: selectOption | null = null;

  created() {
    this.getPrjCodeOptions();
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

  async getPrjCodeOptions() {
    const { data } = await $axios.get('/selectOption/prjCode');
    this.selectOptionList = data;
  }
}
</script>

<style></style>
