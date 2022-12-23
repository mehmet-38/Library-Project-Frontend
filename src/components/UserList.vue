<template>
  <div class="container">
    <div class="table-responsive">
      <table style="width: 75%" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>İsim</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user._id">
            <td class="col-3">{{ user.email }}</td>
            <td class="col-3">{{ user.name }}</td>
            <td class="col-2">{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
export default {
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    appAxios({
      url: "/users",
      method: "GET",
    }).then((user_response) => {
      this.userList = user_response.data;
      console.log(this.userList);
    });
  },
};
</script>
<style></style>
