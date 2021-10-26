<template>
  <div class='w-1/5'>
    <input
      list='prjCode'
      v-model='_prjCode'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
    />

    <datalist
      id='prjCode'
    >
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' :disabled='option.disableFlg'>
        {{ option.name }}
      </option>
    </datalist>
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
export default class PrjCodeSuggest2 extends SelectOptionBase {
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
