<template>
  <div>
    <Sidebar />
    <div class='md:ml-64 bg-gray-100'>
      <Navbar />
      <div class='px-4 md:px-10 mx-auto w-full -m-24'>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Navbar from '~/components/Header/Header.vue';

@Component({
  name: 'default-layout',
  components: {
    Sidebar, Navbar
  }
})
export default class extends Vue {
};
</script>
