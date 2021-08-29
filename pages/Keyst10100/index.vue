<template>
  <div class='p-4'>
    <h1 class="p-4 font-bold">プロフィール</h1>
    <table class="w-9/12 mx-auto text-left min-w-full text-xs">
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.userName.editableFlag" type="text" class="bg-yellow-200" value="" v-model="memberInfo.userName" />
          <span v-else>{{ memberInfo.userName }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.userName)">aa</button>
        </td>
        <th class="p-2 bg-green-300 border-2 border-gray">郵便番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.postalCode.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.postalCode }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.postalCode)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名(カナ)</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.userNameKana.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.userNameKana }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.userNameKana)">aa</button>
        </td>
        <th class="p-2 bg-green-300 border-2 border-gray">住所</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.address.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.address }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.address)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">メールアドレス</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.email.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.email }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.email)">aa</button>
        </td>
        <th class="p-2 bg-green-300 border-2 border-gray">電話番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.phoneNumber.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.phoneNumber }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.phoneNumber)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインID</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.loginId.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.loginId }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.loginId)">aa</button>
        </td>
        <th rowspan="6" class="p-2 bg-green-300 border-2 border-gray">銀行口座</th>
        <td class="p-2 border-2 border-gray">銀行名</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.bankName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.bankName }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.bankName)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインパスワード</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.loginPw.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-if="inputAreaControl.loginPw.editableFlag">　確認用:</span>
          <input v-if="inputAreaControl.loginPw.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>●●●●●●●●●</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.loginPw)">aa</button>
        </td>
        <td class="p-2 border-2 border-gray">支店名</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.branchName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.branchName }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.branchName)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th rowspan="3" class="p-2 bg-green-300 border-2 border-gray">プロフィール画像</th>
        <td rowspan="3" class="p-2 border-2 border-gray">
          <img v-if="inputAreaControl.prfImgStrgDrctry.editableFlag" src="*" />
          <input type="file" v-else value="" />
        </td>
        <td rowspan="3" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.prfImgStrgDrctry)">aa</button>
        </td>
        <td class="p-2 border-2 border-gray">支店番号</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.branchId.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.branchId }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.branchId)">aa</button>
        </td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座種別</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.accountType.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountType }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.accountType)">aa</button>
        </td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座番号</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.accountNumber.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountNumber }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.accountNumber)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">性別</th>
        <td class="p-2 border-2 border-gray">
          <input type="radio" id="men" value="1"><label for="men">男</label>
          <input type="radio" id="women" value="2"><label for="women">女</label>
        </td>
        <td class="p-2"></td>
        <td class="p-2 border-2 border-gray">名義人(カナ)</td>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.accountName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountName }}</span>
        </td>
        <td class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.accountName)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">生年月日</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.birthday.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.birthday }}</span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.birthday)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">国籍</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.nationality.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.nationality }}</span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.nationality)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">配偶者</th>
        <td class="p-2 border-2 border-gray">
          <input type="radio" id="partnerOn" value="true"><label for="partnerOn">あり</label>
          <input type="radio" id="partnerOff" value="false"><label for="partnerOff">なし</label>
        </td>
        <td colspan="5" class="p-2"></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最寄り駅</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.nearestStation.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.nearestStation }}</span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.nearestStation)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴年月日</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.finalEducationDate.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.finalEducationDate }}</span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.finalEducationDate)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.finalEducationContent.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.finalEducationContent }}</span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.finalEducationContent)">aa</button>
        </td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">保有スキル</th>
        <td class="p-2 border-2 border-gray">
          <!-- <input v-if="inputAreaControl.skills.editableFlag" type="text" class="bg-yellow-200" value="" /> -->
          <!-- <span v-else>{{ memberInfo.skillList }}</span> -->
          <span v-for='skill in memberInfo.skillList' :key="skill.skillCode">{{ skill.skillName }} </span>
        </td>
        <td colspan="5" class="p-2">
          <button @click="switchEditableFlag(inputAreaControl.skills)">aa</button>
        </td>
      </tr>
    </table>
    <input type="button" class="block p-2 w-40 m-5 mx-auto rounded bg-blue-200" value="登録" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Keyst10100Module } from '~/utils/store-accessor';
import MemberInfo from '~/classes/memberInfo';

@Component({
  name: 'Keyst10100',
  components: {
  },
  async asyncData({redirect, store}) {
    try {
      await Keyst10100Module.initialize();
    } catch (error) {
      redirect('/login')
    }
  }

})
export default class extends Vue {
  
  /**
   * メンバー情報
   */
  get memberInfo(): MemberInfo {
    return JSON.parse(JSON.stringify(Keyst10100Module.MemberInfo));
  }

    /**
   * 編集可否フラグを切り替える
   * @param obj
   */
  switchEditableFlag(obj: any) {
    this.$set(obj, 'editableFlag', !obj.editableFlag);
  }

  public inputAreaControl = {
    userName:{editableFlag:false},
    postalCode:{editableFlag:false},
    userNameKana:{editableFlag:false},
    address:{editableFlag:false},
    email:{editableFlag:false},
    phoneNumber:{editableFlag:false},
    loginId:{editableFlag:false},
    bankName:{editableFlag:false},
    loginPw:{editableFlag:false},
    branchName:{editableFlag:false},
    prfImgStrgDrctry:{editableFlag:false},
    branchId:{editableFlag:false},
    accountType:{editableFlag:false},
    accountNumber:{editableFlag:false},
    accountName:{editableFlag:false},
    birthday:{editableFlag:false},
    nationality:{editableFlag:false},
    nearestStation:{editableFlag:false},
    finalEducationDate:{editableFlag:false},
    finalEducationContent:{editableFlag:false},
    skills:{editableFlag:false},
  }

}
</script>

<style></style>
