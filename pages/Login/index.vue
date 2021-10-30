<template>
  <div class='h-screen'>
    <div class='w-2/5 m-auto p-32'>
      <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <form @submit.prevent='login'>
          <div class='mb-4'>
            <label class='block text-grey-darker text-sm font-bold mb-2' for='loginId'>
              LoginID
            </label>
            <input
              v-model='loginId'
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 active:outline-none focus:outline-none focus:shadow-outline'
              id='loginId'
              type='text'
              placeholder='LoginID'>
          </div>
          <div>
            <label class='block text-grey-darker text-sm font-bold text-gray-700 mb-2' for='password'>
              Password
            </label>
            <input
              v-model='loginPw'
              class='shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 active:outline-none focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
            >
          </div>
          <div>
            <ul>
              <li class='px-2 text-red-600' v-for='(message, idx) of errorMessages' :key='idx'>
                {{ message }}
              </li>
            </ul>
          </div>
          <div class='flex items-center justify-between'>
            <button
              class='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 active:outline-none focus:outline-none rounded'
              type='submit'
            >
              Login
            </button>
            <NuxtLink
              to='/signUp'
              class='text-blue-500 hover:text-blue-400'
            >
              SignUp
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import AuthenticationQ from '~/classes/form/authenticationQ';
import { AuthenticationModule, MessagesModule } from '~/utils/store-accessor';

@Component({
  layout: 'plain',
  name: 'Login'
})
export default class extends Vue {
  private loginId: string = '';
  private loginPw: string = '';

  get errorMessages() {
    return MessagesModule.messageList;
  }

  async login() {
    try {
      let loginForm: AuthenticationQ = new AuthenticationQ();
      this.$set(loginForm, 'loginId', this.loginId);
      this.$set(loginForm, 'loginPw', this.loginPw);
      await AuthenticationModule.login(loginForm);
      await this.$router.push('/keyst10000');
    } catch (error) {
    }
  }

}
</script>

<style>
body {
  @apply bg-gray-100
}
</style>
