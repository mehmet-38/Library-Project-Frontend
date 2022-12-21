<template lang="">
  <div class="row">
    <div class="col-3">
      <AdminSideBar />
    </div>
    <div class="col-9">
      <UserAddCardVue />
    </div>
  </div>
</template>
<script>
import AdminSideBar from "@/components/AdminSideBar.vue";
import UserAddCardVue from "@/components/UserAddCard.vue";
export default {
  components: { AdminSideBar, UserAddCardVue },
};
</script>
<style lang=""></style>
