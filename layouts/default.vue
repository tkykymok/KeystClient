<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Sidebar from "@/components/Sidebar/Sidebar.vue";

@Component({
  name: "default-layout",
  components: {
    Sidebar,
  },
})
export default class extends Vue {
};
</script>
