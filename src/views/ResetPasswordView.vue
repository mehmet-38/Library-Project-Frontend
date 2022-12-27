<template lang="">
  <div
    class="container"
    style="justify-content: center; display: flex; margin-top: 10%"
  >
    <div class="card text-center" style="width: 25%">
      <div class="card-header h5 text-white bg-primary">Şifre Sıfırlama</div>
      <div class="card-body px-5">
        <p class="card-text py-2">Belirlemek istediğiniz şifrenizi giriniz</p>
        <div class="form-outline">
          <input
            type="password"
            id="password"
            name="password"
            class="form-control my-3"
            v-model="password"
          />
        </div>
        <a href="#" class="btn btn-primary w-100" @click="resetPassword"
          >Gönder</a
        >
        <div class="d-flex justify-content-between mt-4">
          <router-link class="" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    resetPassword() {
      appAxios({
        url: `/reset-password/${this.$route.params.resetToken}`,
        method: "PATCH",
        data: { password: this.password },
      }).then((reset_response) => {
        console.log(reset_response);
      });
    },
  },
};
</script>
<style lang=""></style>
