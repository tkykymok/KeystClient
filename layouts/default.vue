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
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Header from '~/components/Header/Header.vue';
import { FunctionNames } from '~/constant/functionNames';

@Component({
  name: 'default-layout',
  components: {
    Sidebar, Header
  }
})

export default class extends Vue {
  // TODO 別途検討
  // get currentPath() {
  //   return typeof this.$route.name === 'string'? this.$route.name: '';
  // }
  //
  // get functionName() {
  //   return FunctionNames[this.currentPath];
  // }

};
</script>
