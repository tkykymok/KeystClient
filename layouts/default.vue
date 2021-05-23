<template>
  <div>
    <Sidebar />
    <div class='md:ml-64 bg-gray-100'>
      <Header />
      <div class='px-4 md:px-10 mx-auto w-full'>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '~/components/Header/Header';

@Component({
  name: 'default-layout',
  components: {
    Sidebar, Header
  }
})
export default class extends Vue {
};
</script>
