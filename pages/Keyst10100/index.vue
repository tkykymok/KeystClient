<template>
  <div class='p-4'>
    <h1 class="p-4 font-bold">プロフィール</h1>
    <table class="w-9/12 mx-auto text-left min-w-full text-xs">
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名</th>
        <td class="p-2 border-2 border-gray">
          <input v-if="inputAreaControl.userName.editableFlag" type="text" class="bg-yellow-200" value="" />
          <span v-else>{{ memberInfo.userName }}</span>
        </td>
        <td class="p-2"><button @click="switchEditableFlag(inputAreaControl.userName)">aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">郵便番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <span v-if="postalCode">332-0012</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="postalCodeBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名(カナ)</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="nameKana">エダモモコ</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="nameKanaBtn">aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">住所</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <span v-if="address">埼玉県川口市１１１ー１１１</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="addressBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">メールアドレス</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="mail">m.eda@c4c.co.jp</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="mailBtn">aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">電話番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">
          <span v-if="phoneNumber">09012345678</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="phoneNumberBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインID</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="loginId">momokoeda</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="loginIdBtn">aa</button></td>
        <th rowspan="6" class="p-2 bg-green-300 border-2 border-gray">銀行口座</th>
        <td class="p-2 border-2 border-gray">銀行名</td>
        <td class="p-2 border-2 border-gray">
          <span v-if="bankName">埼玉銀行</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="bankNameBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインパスワード</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="loginPw">**************</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="loginPwBtn">aa</button></td>
        <td class="p-2 border-2 border-gray">支店名</td>
        <td class="p-2 border-2 border-gray">
          <span v-if="branchName">川口支店</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="branchNameBtn">aa</button></td>
      </tr>
      <tr class="">
        <th rowspan="3" class="p-2 bg-green-300 border-2 border-gray">プロフィール画像</th>
        <td rowspan="3" class="p-2 border-2 border-gray">
          <img v-if="prfImgStrgDrctry" src="*" />
          <input type="file" v-else value="" />
        </td>
        <td rowspan="3" class="p-2"><button @click="prfImgStrgDrctryBtn">aa</button></td>
        <td class="p-2 border-2 border-gray">支店番号</td>
        <td class="p-2 border-2 border-gray">
          <span v-if="branchId">999</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="branchIdBtn">aa</button></td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座種別</td>
        <td class="p-2 border-2 border-gray">
          <span v-if="accountType">普通預金</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="accountTypeBtn">aa</button></td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座番号</td>
        <td class="p-2 border-2 border-gray">
          <span v-if="accountNumber">12345678</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="accountNumberBtn">aa</button></td>
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
          <span v-if="accountName">エダモモコ</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td class="p-2"><button @click="accountNameBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">生年月日</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="birthday">1995/10/20</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="birthdayBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">国籍</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="nationality">日本</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="nationalityBtn">aa</button></td>
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
          <span v-if="nearestStation">川口</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="nearestStationBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴年月日</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="finalEducationDate">2019年3月</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="finalEducationDateBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="finalEducationContent">津田塾大学◯◯学部</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="finalEducationContentBtn">aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">保有スキル</th>
        <td class="p-2 border-2 border-gray">
          <span v-if="skills">Java</span>
          <input type="text" v-else class="bg-yellow-200" value="" />
        </td>
        <td colspan="5" class="p-2"><button @click="skillsBtn">aa</button></td>
      </tr>
    </table>
    <input type="button" class="block p-2 w-40 m-5 mx-auto rounded bg-blue-200" value="登録" />
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
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
    userName:{editableFlag:true},
    postalCode:{editableFlag:true},
    userNameKana:{editableFlag:true},
    address:{editableFlag:true},
    email:{editableFlag:true},
    phoneNumber:{editableFlag:true},
    loginId:{editableFlag:true},
    bankName:{editableFlag:true},
    loginPw:{editableFlag:true},
    branchName:{editableFlag:true},
    prfImgStrgDrctr:{editableFlag:true},
    branchId:{editableFlag:true},
    accountType:{editableFlag:true},
    accountNumber:{editableFlag:true},
    accountName:{editableFlag:true},
    birthday:{editableFlag:true},
    nationality:{editableFlag:true},
    nearestStation:{editableFlag:true},
    finalEducationDate:{editableFlag:true},
    finalEducationContent:{editableFlag:true},
    skills:{editableFlag:true},
  }

}
</script>

<style></style>
