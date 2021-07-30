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

    <!-- 保有スキルの入力サンプル   -->
    <div class='p-10 flex'>
      <div>
        <Skills
          :skills.sync='selectedSkillCode'
          @submit-skill-options='receiveSkillOptions'
        />
      </div>
      <div>
        <div class='flex flex-wrap ml-2'>
          <span
            v-for='skill in selectedSkillList' :key='skill.code'
            class='px-3 py-1 justify-around border-1 border-gray-100 bg-yellow-200 rounded-lg mr-1'
          >{{ skill.name }}
            <font-awesome-icon
              icon='times-circle'
              class='ml-2 text-sm cursor-pointer text-red-600 hover:text-red-400'
              @click='removeSkill(skill.code)'
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import Skills from '~/components/SelectOptions/Skills.vue';
import { selectOption } from '~/components/SelectOptions/SelectOptionBase';

@Component({
  name: 'Sample',
  components: {
    Skills
  }
})
export default class extends Vue {
  sample1: any = '';
  sample2: any = '';
  sample3: any = '12:00:00';

  public selectedSkillCode: string = ''; // 選択リストから選択したスキルのコード
  public selectedSkillList: selectOption[] = []; // 選択済みのスキル一覧
  public skillOptions: selectOption[] = []; // スキル選択リスト部品で取得したスキル選択肢一覧

  /**
   * スキル選択リスト部品で取得したスキル選択肢一覧を受け取る。
   * @param skillOptions
   */
  receiveSkillOptions(skillOptions: selectOption[]) {
    this.skillOptions = skillOptions;
  }

  /**
   * 選択したスキルの値を監視して、変更されたらaddSkillメソッドを呼び出す。
   */
  @Watch('selectedSkillCode', { immediate: false, deep: true })
  watchSelectedSkill() {
    this.addSkill(this.selectedSkillCode);
  }

  /**
   * 選択したスキルを選択済みのスキル一覧に追加する。
   * @param selected
   */
  addSkill(selected: string) {
    // 選択したスキルのコードに紐づくスキル(Object)を取得する。
    const selectedSkillObj: selectOption | undefined = this.skillOptions.find(obj => obj.code === selected);
    // 上記で取得したスキル(Object)が選択済みのスキル一覧に含まれていなければ一覧に追加する。
    if (!this.selectedSkillList.includes(selectedSkillObj!)) {
      this.selectedSkillList.push(selectedSkillObj!);
    }
  }

  /**
   * 選択済みのスキル一覧から選択したスキル(Object)を取り除く。
   * @param code
   */
  removeSkill(code: string) {
    this.selectedSkillList = this.selectedSkillList.filter(obj => obj.code !== code);
  }

}
</script>

<style></style>
