<template>
  <nav
    class='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'
  >
    <div
      class='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'
    >
      <!-- Toggler -->
      <button
        class='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
        type='button'
        @click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <font-awesome-icon icon='bars' />
      </button>
      <!-- Brand -->
      <NuxtLink
        class='md:block text-left md:pb-2 text-gray-800 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
        to='/'
      >
        KeyStone
      </NuxtLink>

      <!-- Collapse -->
      <div
        class='md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded'
        :class='collapseShow'
      >
        <!-- Collapse header -->
        <div
          class='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200'
        >
          <div class='flex flex-wrap'>
            <div class='w-6/12'>
              <NuxtLink
                class='md:block text-left md:pb-2 text-gray-800 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                to='/'
              >
                KeyStone
              </NuxtLink>
            </div>
            <div class='w-6/12 flex justify-end'>
              <button
                type='button'
                class='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                @click="toggleCollapseShow('hidden')"
              >
                <font-awesome-icon icon='times' />
              </button>
            </div>
          </div>
        </div>

        <!-- Heading -->
        <h6
          class='md:min-w-full text-gray-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline'
        >
          メニュー
        </h6>
        <!-- Navigation -->

        <ul class='md:flex-col md:min-w-full flex flex-col list-none'>
          <li class='items-center'>
            <NuxtLink
              to='/dashboard'
              class='text-xs uppercase py-3 font-bold block text-gray-700 hover:text-gray-500'
              active-class='text-green-500 hover:text-green-600'
            >

              <font-awesome-icon
                icon='tv'
                class=' mr-2 text-sm'
              />
              ダッシュボード
            </NuxtLink>
          </li>

          <li class='items-center'>
            <NuxtLink
              to='/keyst10200'
              class='text-xs uppercase py-3 font-bold block text-gray-700 hover:text-gray-500'
              active-class='text-green-500 hover:text-green-600'
            >
              <font-awesome-icon
                icon='tools'
                class=' mr-2 text-sm'
              />
              スキルシート
            </NuxtLink>
          </li>

          <li class='items-center'>
            <NuxtLink
              to='/keyst10300'
              class='text-xs py-3 font-bold block text-gray-700 hover:text-gray-500'
              active-class='text-green-500 hover:text-green-600'
            >
              <font-awesome-icon
                icon='calendar-alt'
                class='mr-2 text-sm'
              />
              1on1予約
            </NuxtLink>
          </li>

          <li class='items-center'>
            <NuxtLink
              to='/keyst10400'
              class='text-xs uppercase py-3 font-bold block text-gray-700 hover:text-gray-500'
              active-class='text-green-500 hover:text-green-600'
            >
              <font-awesome-icon
                icon='user-friends'
                class='mr-2 text-sm'
              />
              メンバー一覧
            </NuxtLink>
          </li>
        </ul>

        <!-- Divider -->
        <hr class='my-4 md:min-w-full' />
        <!-- Heading -->
        <h6
          class='md:min-w-full text-gray-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline'
        >
          管理者メニュー
        </h6>
        <!-- Navigation -->

        <ul class='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
          <li class='items-center'>
            <NuxtLink
              class='text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold block'
              to='/keyst10600'
            >
              <font-awesome-icon
                icon='info-circle'
                class='mr-2 text-sm'
              />
              お知らせ
            </NuxtLink>
          </li>

          <li class='items-center'>
            <NuxtLink
              class='text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold block'
              to='/signUp'
            >
              <font-awesome-icon
                icon='user-plus'
                class='mr-2 text-sm'
              />
              新規ユーザー登録
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Sidebar extends Vue {

  collapseShow: string = 'hidden';

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }

}
</script>
