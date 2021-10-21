<template>
  <div class='h-screen'>
    <div class='w-2/5 m-auto p-32'>
      <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <ul v-show='errorMessages.length'>
          <li class='px-2 text-red-600 ' v-for='message of errorMessages'>{{ message }}</li>
        </ul>
        <form @submit.prevent='signUp'>
          <div class='mb-4'>
            <label class='block text-grey-darker text-sm font-bold mb-2' for='userName'>
              UserName
            </label>
            <input
              v-model='userName'
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 active:outline-none focus:outline-none focus:shadow-outline'
              id='userName'
              type='text'
              placeholder='UserName'
              autocomplete="off"
            >
          </div>
          <div class='mb-4'>
            <label class='block text-grey-darker text-sm font-bold mb-2' for='loginId'>
              LoginID
            </label>
            <input
              v-model='loginId'
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 active:outline-none focus:outline-none focus:shadow-outline'
              id='loginId'
              type='text'
              placeholder='LoginID'
              autocomplete="off"
            >
          </div>
          <div>
            <label class='block text-grey-darker text-sm font-bold text-gray-700 mb-2' for='password'>
              Password
            </label>
            <input
              v-model='loginPw'
              :value='loginPw'
              id='password'
              name='password'
              class='shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 active:outline-none focus:outline-none focus:shadow-outline'
              :type='fieldTypes.password'
              placeholder='Password'
              @focus="handleType"
              @blur="handleType"
              autocomplete="off"
            >
          </div>
          <div class='flex items-center justify-between'>
            <button
              class='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 active:outline-none focus:outline-none rounded'
              type='submit'
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { AuthenticationModule } from '~/utils/store-accessor';
import SignUpQ from '~/classes/form/signUpQ';

@Component({
  layout: 'plain',
  name: 'SignUp'
})
export default class extends Vue {
  private userName: string = '';
  private loginId: string = '';
  private loginPw: string = '';
  public errorMessages: string[] = [];

  fieldTypes: any = { // add this for change input type
    password: 'text',
  }

  handleType(event: any) {
    const { srcElement, type } = event;
    const { name, value } = srcElement;

    if(type === 'blur' && !value) {
      this.fieldTypes[name] = 'text'
    } else {
      this.fieldTypes[name] = 'password'
    }
  }

  get compositeKey() {
    return this.userName + this.loginId + this.loginPw;
  }

  @Watch('compositeKey', { immediate: false, deep: true })
  watchCompositeKey() {
    this.errorMessages.splice(0);
  }

  async signUp() {
    try {
      let signUpForm = new SignUpQ();
      this.$set(signUpForm, 'userName', this.userName);
      this.$set(signUpForm, 'loginId', this.loginId);
      this.$set(signUpForm, 'loginPw', this.loginPw);
      await AuthenticationModule.signUp(signUpForm);
      await this.$router.push('/login');
    } catch (error) {
      this.errorMessages.splice(0);
      this.errorMessages.push(...error.response.data.messageList);
    }
  }

}
</script>

<style>
body {
  @apply bg-gray-100
}
</style>
