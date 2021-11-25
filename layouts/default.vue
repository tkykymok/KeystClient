<template>
  <div>
    <Sidebar />
    <div class='md:ml-64 bg-gray-100'>
      <Header />
      <Message />
      <div class='px-4 md:px-10 mx-auto w-full'>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Header from '~/components/Header/Header.vue';
import Message from '~/components/Header/Message.vue';
import { Keyst10100Module } from '~/utils/store-accessor';

@Component({
  name: 'default-layout',
  components: {
    Sidebar, Header, Message
  }
})
export default class extends Vue {
  created() {
    Keyst10100Module.initialize();
  }

};
</script>
