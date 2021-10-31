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
        <img
          alt='...'
          class='rounded-full align-middle border-none shadow-lg'
          style='width: 50px; height: 50px'
          :src="imageUrl? imageUrl: require('@/assets/img/user.png')"
        />
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
import { AuthenticationModule, Keyst10100Module } from '~/utils/store-accessor';

@Component({})
export default class UserDropdown extends Vue {
  public dropdownPopoverShow: boolean = false;

  get imageUrl() {
    return Keyst10100Module.MemberInfo.prfImgStrgDrctry;
  }

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
