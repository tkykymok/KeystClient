<template>
  <div class='p-4'>
    <h1 class="p-4 font-bold">プロフィール</h1>
    <table class="w-9/12 mx-auto text-left min-w-full text-xs">
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名</th>
        <td class="p-2 border-2 border-gray"><span id="name1">江田桃子</span><input type="text" id="" class="hidden bg-yellow-200" /></td>
        <td class="p-2"><button @click="edit()">aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">郵便番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">332-0012</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">氏名(カナ)</th>
        <td class="p-2 border-2 border-gray">エダモモコ</td>
        <td class="p-2"><button>aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">住所</th>
        <td colspan="2" class="p-2 border-2 border-gray">埼玉県川口市１１１ー１１１</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">メールアドレス</th>
        <td class="p-2 border-2 border-gray">m.eda@c4c.co.jp</td>
        <td class="p-2"><button>aa</button></td>
        <th class="p-2 bg-green-300 border-2 border-gray">電話番号</th>
        <td colspan="2" class="p-2 border-2 border-gray">09012345678</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインID</th>
        <td class="p-2 border-2 border-gray">momokoeda</td>
        <td class="p-2"><button>aa</button></td>
        <th rowspan="6" class="p-2 bg-green-300 border-2 border-gray">銀行口座</th>
        <td class="p-2 border-2 border-gray">銀行名</td>
        <td class="p-2 border-2 border-gray">◯◯銀行</td>
        <td class="p-2 "><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">ログインパスワード</th>
        <td class="p-2 border-2 border-gray">***********</td>
        <td class="p-2"><button>aa</button></td>
        <td class="p-2 border-2 border-gray">支店名</td>
        <td class="p-2 border-2 border-gray">◯◯支店</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th rowspan="3" class="p-2 bg-green-300 border-2 border-gray">プロフィール画像</th>
        <td rowspan="3" class="p-2 border-2 border-gray">画像いれる</td>
        <td rowspan="3" class="p-2"><button>aa</button></td>
        <td class="p-2 border-2 border-gray">支店番号</td>
        <td class="p-2 border-2 border-gray">XXX</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座種別</td>
        <td class="p-2 border-2 border-gray">普通預金</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <td class="p-2 border-2 border-gray">口座番号</td>
        <td class="p-2 border-2 border-gray">XXXXXXX</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">性別</th>
        <td class="p-2 border-2 border-gray"><input type="radio" id="men" value="1"><label for="men">男</label><input type="radio" id="women" value="2"><label for="women">女</label></td>
        <td class="p-2"></td>
        <td class="p-2 border-2 border-gray">名義人(カナ)</td>
        <td class="p-2 border-2 border-gray">エダモモコ</td>
        <td class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">生年月日</th>
        <td class="p-2 border-2 border-gray">1995/10/20</td>
        <td colspan="5" class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">国籍</th>
        <td class="p-2 border-2 border-gray">日本</td>
        <td colspan="5" class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">配偶者</th>
        <td class="p-2 border-2 border-gray"><input type="radio" id="partnerOn" value="1"><label for="partnerOn">あり</label><input type="radio" id="partnerOff" value="2"><label for="partnerOff">なし</label></td>
        <td colspan="5" class="p-2"></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最寄り駅</th>
        <td class="p-2 border-2 border-gray">川口</td>
        <td colspan="5" class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴年月日</th>
        <td class="p-2 border-2 border-gray">2019年3月</td>
        <td colspan="5" class="p-2"><button>aa</button></td>
      </tr>
      <tr class="">
        <th class="p-2 bg-green-300 border-2 border-gray">最終学歴</th>
        <td class="p-2 border-2 border-gray">津田塾大学◎◎学部</td>
        <td colspan="5" class="p-2"><button>aa</button></td>
      </tr>
    </table>
    <input type="button" class="block p-2 w-40 m-5 mx-auto rounded bg-blue-200" value="登録" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Keyst10100',
  components: {
  }
})
export default class extends Vue {

  public count: number = 0

}
</script>

<style></style>
