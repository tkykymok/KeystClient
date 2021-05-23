<template>
  <div>
    <Sidebar />
    <div class='md:ml-64 bg-gray-100'>
      <Header
        :functionName='functionName'
      />
      <div class='px-4 md:px-10 mx-auto w-full'>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '~/components/Header/Header';
import { FunctionNames } from '~/constant/functionNames';

@Component({
  name: 'default-layout',
  components: {
    Sidebar, Header
  }
})

export default class extends Vue {
  get currentPath() {
    return this.$route.name;
  }

  get functionName(): string {
    return FunctionNames[this.currentPath];
  }
};
</script>
