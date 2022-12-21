<template lang="">
  <div>
    <div class="card mt-3 ms-5" style="width: 50%">
      <div class="card-body">
        <h5 class="card-title">Kullanıcı Ekle</h5>
        <input
          type="text"
          class="form-control mb-3"
          required
          placeholder="Kullanıcı İsmi"
          v-model="name"
          name="name"
        />

        <input
          type="email"
          class="form-control mb-3"
          required
          placeholder="Email"
          v-model="email"
          name="email"
        />
        <input
          type="text"
          class="form-control mb-3"
          required
          placeholder="Password"
          v-model="password"
          name="password"
        />
        <input
          type="text"
          class="form-control mb-3"
          required
          placeholder="Role"
          v-model="role"
          name="role"
        />
        <button
          class="btn btn-md btn-primary btn-login fw-bold text-uppercase"
          @click="addUser"
        >
          Kaydet
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      email: "",
      password: "",
      role: null,
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      email: { required, minLength: minLength(6) },
      password: { required, minLength: minLength(6) },
      role: { required },
    };
  },
  methods: {
    addUser() {
      this.v$.$validate();
      const userObject = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role,
      };
      if (!this.v$.$error) {
        appAxios({
          url: "/users",
          method: "POST",
          data: userObject,
        }).then((user_response) => {
          console.log(user_response);
          this.name = "";
          this.email = "";
          this.password = "";
          this.role = "";
        });
      } else {
        console.log(this.v$.$error);
      }
    },
  },
};
</script>
<style lang=""></style>
