<template>
  <div>
    <a
      class='text-blueGray-500 block'
      ref='btnDropdownRef'
    >
      <div
        class='items-center flex cursor-pointer'
        @mouseover='showDropdown($event)'
        @mouseleave='hideDropdown($event)'
      >
        <span
          class='w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'
        >
          <img
            alt='...'
            class='w-full rounded-full align-middle border-none shadow-lg'
            :src='image'
          />
        </span>
      </div>
    </a>
    <div
      ref='popoverDropdownRef'
      class='bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
      :class='{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }'
      @mouseover='showDropdown($event)'
      @mouseleave='hideDropdown($event)'
    >
      <NuxtLink
        to='/keyst10100'
        class='text-xs uppercase py-1 px-4 font-bold block text-gray-700 hover:text-gray-500'
      >
        プロフィール
      </NuxtLink>
      <div class='h-0 my-2 border border-solid border-blueGray-100' />
      <span
        class='text-xs uppercase py-1 px-4 font-bold block text-gray-700 hover:text-gray-500 cursor-pointer'
        @click='logout'
      >
        ログアウト
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { createPopper } from '@popperjs/core';
import { AuthenticationModule } from '~/utils/store-accessor';

@Component({})
export default class UserDropdown extends Vue {
  public dropdownPopoverShow: boolean = false;
  public image: NodeRequireFunction = require('@/assets/img/user.png');

  logout() {
    AuthenticationModule.DESTROY_JWT_LOGIN_USER_INFO();
    this.$router.push('/login');
  }

  showDropdown() {
    this.dropdownPopoverShow = true;
    const reference: any = this.$refs.btnDropdownRef;
    const popper: any = this.$refs.popoverDropdownRef;
    createPopper(reference, popper, {
      placement: 'bottom-start'
    });
  }

  hideDropdown() {
    this.dropdownPopoverShow = false;
  }
}
</script>
