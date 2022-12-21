<template>
  <div>
    <!-- <NavBar /> -->
    <div class="row">
      <div class="col-2">
        <AdminSideBar />
      </div>
      <div class="col-10">
        <UserList style="margin-top: 5%; margin-left: 5%" />
      </div>
    </div>

    <!-- <AddBookCard /> -->
  </div>
</template>
<script>
import AddBookCard from "@/components/AddBookCard.vue";
import AdminSideBar from "@/components/AdminSideBar.vue";

import NavBar from "@/components/NavBar.vue";
import UserList from "@/components/UserList.vue";

export default {
  components: { NavBar, AddBookCard, AdminSideBar, UserList },
  data() {
    return {};
  },
};
</script>
<style></style>
