<template>
  <div class='p-4'>
    <h1 class="p-4 font-bold">プロフィール</h1>
    <table class="w-9/12 mx-auto text-left min-w-full text-xs">
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">氏名</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.userName)">
          <input v-if="inputAreaControl.userName.editableFlag" type="text" class="bg-yellow-200" value="" v-model="memberInfo.userName" />
          <span v-else>{{ memberInfo.userName }}</span>
        </td>
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">郵便番号</th>
        <td colspan="2" class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.postalCode)">
          <input v-if="inputAreaControl.postalCode.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.postalCode }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">氏名(カナ)</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.userNameKana)">
          <input v-if="inputAreaControl.userNameKana.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.userNameKana }}</span>
        </td>
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">住所</th>
        <td colspan="2" class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.address)">
          <input v-if="inputAreaControl.address.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.address }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">メールアドレス</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.email)">
          <input v-if="inputAreaControl.email.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.email }}</span>
        </td>
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">電話番号</th>
        <td colspan="2" class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.phoneNumber)">
          <input v-if="inputAreaControl.phoneNumber.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.phoneNumber }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">ログインID</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.loginId)">
          <input v-if="inputAreaControl.loginId.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.loginId }}</span>
        </td>
        <th rowspan="6" class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">銀行口座</th>
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">銀行名</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.bankName)">
          <input v-if="inputAreaControl.bankName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.bankName }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">ログインパスワード</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.loginPw)">
          <input v-if="inputAreaControl.loginPw.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-if="inputAreaControl.loginPw.editableFlag">　確認用:</span>
          <input v-if="inputAreaControl.loginPw.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>●●●●●●●●●</span>
        </td>
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">支店名</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.branchName)">
          <input v-if="inputAreaControl.branchName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.branchName }}</span>
        </td>
      </tr>
      <tr class="">
        <th rowspan="3" class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">プロフィール画像</th>
        <td rowspan="3" class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.prfImgStrgDrctry)">
          <!-- <input v-if="inputAreaControl.prfImgStrgDrctry.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.prfImgStrgDrctry }}</span> -->
          <input v-if="inputAreaControl.prfImgStrgDrctry.editableFlag" type="file" value="" />
          <img :src="memberInfo.prfImgStrgDrctry" v-else>
        </td>
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">支店番号</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.branchId)">
          <input v-if="inputAreaControl.branchId.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.branchId }}</span>
        </td>
      </tr>
      <tr class="">
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">口座種別</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.accountType)">
          <input v-if="inputAreaControl.accountType.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountType }}</span>
        </td>
      </tr>
      <tr class="">
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">口座番号</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.accountNumber)">
          <input v-if="inputAreaControl.accountNumber.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountNumber }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">性別</th>
        <td class="p-3 text-gray-800 border border-b">
          <input type="radio" id="men" name="gender" value="1" :checked="memberInfo.gender === 1"><label for="men">男</label>
          <input type="radio" id="women" name="gender" value="2" :checked="memberInfo.gender === 2"><label for="women">女</label>
        </td>
        <td class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">名義人(カナ)</td>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.accountName)">
          <input v-if="inputAreaControl.accountName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.accountName }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">生年月日</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.birthday)">
          <input v-if="inputAreaControl.birthday.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ convertDateToYearMonthDay(memberInfo.birthday) }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">国籍</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.nationality)">
          <input v-if="inputAreaControl.nationality.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.nationality }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">配偶者</th>
        <td class="p-3 text-gray-800 border border-b">
          <input type="radio" id="partnerOn" name="partnerFlg" value="true" :checked="memberInfo.partnerFlg === true"><label for="partnerOn">あり</label>
          <input type="radio" id="partnerOff" name="partnerFlg" value="false" :checked="memberInfo.partnerFlg === false"><label for="partnerOff">なし</label>
        </td>
        <td colspan="5" class="p-2"></td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">最寄り駅</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.nearestStation)">
          <input v-if="inputAreaControl.nearestStation.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.nearestStation }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">最終学歴年月日</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.finalEducationDate)">
          <input v-if="inputAreaControl.finalEducationDate.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ convertDateToYearMonthDay(memberInfo.finalEducationDate) }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">最終学歴</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.finalEducationContent)">
          <input v-if="inputAreaControl.finalEducationContent.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.finalEducationContent }}</span>
        </td>
      </tr>
      <tr class="">
        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 w-2/12">保有スキル</th>
        <td class="p-3 text-gray-800 border border-b" @click="switchEditableFlag(inputAreaControl.skillList)">
          <select  v-if="inputAreaControl.skillList.editableFlag">
            <option>aa</option>
            <option>aa</option>
            <option>aa</option>
            <option>aa</option>
            <option>aa</option>
            <option>aa</option>
          </select>
          <span v-else v-for='skill in memberInfo.skillList' :key="skill.skillCode" class="px-3 py-1 justify-around border-1 border-gray-100 bg-yellow-200 rounded-lg m-1">{{ skill.skillName }} </span>
        </td>
      </tr>
    </table>
    <input type="button" class="block p-2 w-40 m-5 mx-auto bg-blue-400 text-white rounded-md hover:bg-blue-500 active:outline-none focus:outline-none" value="登録" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Keyst10100Module } from '~/utils/store-accessor';
import MemberInfo from '~/classes/memberInfo';
import { convertDateToYearMonth, convertDateToYearMonthDay } from '~/utils/converter';

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

  get prfImgStrgDrctry(): String {
    return Keyst10100Module.MemberInfo.prfImgStrgDrctry;
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
    skillList:{editableFlag:false},
  }

  /**
   * yyyy年MM月dd日の形式に変換する
   */
  public convertDateToYearMonthDay = convertDateToYearMonthDay;
}

</script>

<style></style>
