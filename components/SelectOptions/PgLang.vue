<template>
  <div>
    <select
      v-model='selected'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
      @change='add(selected)'
    >
      <option :value="''" v-text='"使用言語"' disabled/>
      <option v-for='option of selectOptionList' :key='option.code' :value='option.code' v-text='option.name' />
    </select>

    <div class='mt-3'>
      <select
        v-model='selected4Remove'
        class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
        @change='remove(selected4Remove)'
        size='5'
      >
        <option v-for='selectedLang of selectedLangList' :key='selectedLang.code' :value='selectedLang.code'
                v-text='selectedLang.name' />
      </select>

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue, Watch } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class PgLang extends SelectOptionBase {
  /** 入力パラメータ 使用言語リスト */
  @PropSync('pgLang', { required: false, default: () => ([]) })
  _pgLang!: string[];

  // 上段の選択リストから選択した値
  public selected: string = '';
  // 下段の選択済みリストに表示する選択肢
  public selectedLangList: selectOption[] = [];
  // 下段の選択済みリストから選択した値(削除する値)
  public selected4Remove: string = '';

  created() {
    this.getPgLangOptions();
  }

  /**
   * 使用言語の選択リストを取得する
   */
  async getPgLangOptions() {
    const { data } = await $axios.get('/selectOption/pgLang');
    this.selectOptionList = data;

    this._pgLang.forEach(value => {
      let selectOption = this.selectOptionList.find(obj => obj.code === value);
      if (selectOption) {
        this.selectedLangList.push(selectOption);
      }
    });
  }

  /**
   * 選択リストから選択された値を追加する
   * @param value
   */
  add(value: string) {
    if (!this._pgLang.includes(value)) {
      this._pgLang.push(value);
      let selectOption = this.selectOptionList.find(obj => obj.code === value);
      if (selectOption) {
        this.selectedLangList.push(selectOption);
      }
    }
    this.selected = '';
  }

  /**
   * 選択済みリストから選択された値を削除する
   * @param value
   */
  remove(value: any) {
    const newArray = this._pgLang.filter(c => c !== value);
    this._pgLang.splice(0);
    this._pgLang.push(...newArray);
    this.selectedLangList = this.selectedLangList.filter(obj => obj.code !== value);
  }
}
</script>

<style></style>
