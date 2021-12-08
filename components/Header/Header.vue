<template>
  <!-- Navbar -->
  <nav
    class='top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-green-300 sticky'
  >
    <div
      class='w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'
    >
      <!-- Brand -->
      <div
        class='text-gray-800 text-lg hidden lg:inline-block font-bold'
      >
        {{ functionName }}
      </div>

      <!-- User -->
      <ul class='flex-col md:flex-row list-none items-center hidden md:flex'>
        <li class='mr-2 mt-2 text-gray-800'>{{ userName }}</li>
        <UserDropdown />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import UserDropdown from '~/components/Dropdowns/UserDropdown.vue';
import { FunctionNames } from '~/constant/functionNames';
import { AuthenticationModule } from '~/utils/store-accessor';

@Component({
  components: {
    UserDropdown
  }
})
export default class Header extends Vue {
  private functionName?: string = '';

  get userName() {
    return AuthenticationModule.loginUserInfo.userName;
  }

  get currentPath() {
    return typeof this.$route.name === 'string' ? this.$route.name : '';
  }

  @Watch('currentPath', { immediate: true, deep: true })
  watchCurrentPath() {
    this.functionName = Object.values(FunctionNames).find(obj => obj.id === this.currentPath.toUpperCase())?.name;
  }
}
</script>
