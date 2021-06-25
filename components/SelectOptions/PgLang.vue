<template>
  <div>
    <select
      v-model='selected'
      class='p-1 w-full align-top border-2 border-gray-300 active:outline-none focus:outline-none focus:shadow-outline rounded-md'
      @change='add(selected)'
    >
      <option v-text='"使用言語"' disabled/>
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
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';
import SelectOptionBase, { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({})
export default class PgLang extends SelectOptionBase {
  /** 入力パラメータ 使用言語リスト */
  @PropSync('pgLangList', { required: false, default: () => ([]) })
  _pgLangList!: string[];

  public selectedLangList: selectOption[] = [];
  public selected: string = '';
  public selected4Remove: string = '';

  created() {
    this.getPgLangOptions();
  }

  async getPgLangOptions() {
    const { data } = await $axios.get('/selectOption/pgLang');
    this.selectOptionList = data;
    this._pgLangList.forEach(value => {
      let selectOption = this.selectOptionList.find(obj => obj.code === value);
      if (selectOption) {
        this.selectedLangList.push();
      }
    });
  }

  add(value: string) {
    if (!this._pgLangList.includes(value)) {
      this._pgLangList.push(value);
      let selectOption = this.selectOptionList.find(obj => obj.code === value);
      if (selectOption) {
        this.selectedLangList.push(selectOption);
      }
    }
    this.selected = '';
  }

  remove(value: any) {
    const newArray = this._pgLangList.filter(c => c !== value);
    this._pgLangList.splice(0);
    this._pgLangList.push(...newArray);
    this.selectedLangList = this.selectedLangList.filter(obj => obj.code !== value);
  }
}
</script>

<style></style>
