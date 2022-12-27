<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div
          class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
        >
          <div style="width: 50%">
            <div class="card-img d-none d-md-flex"></div>
          </div>

          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>

            <input
              type="email"
              class="form-control mb-3"
              required
              placeholder="Email"
              v-model="email"
              name="email"
            />

            <input
              type="password"
              class="form-control mb-3"
              required
              placeholder="Password"
              v-model="password"
              name="password"
            />

            <div class="d-grid mb-2">
              <button
                class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                @click="Login"
              >
                Login
              </button>
            </div>
            <div class="d-block text-center mt-2 small">
              Kayıtlı değilsen
              <router-link to="/register">Kayıt Ol</router-link>
            </div>
            <div class="d-block text-center mt-2 small">
              <router-link to="/forgot-password">Şifremi unuttum</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, minLength: minLength(8), email },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    Login() {
      this.v$.$validate();
      const userObject = {
        email: this.email,
        password: this.password,
      };
      if (!this.v$.$error) {
        appAxios({
          url: "/login",
          method: "POST",
          data: userObject,
        }).then((response) => {
          localStorage.setItem("userToken", response.data.token);

          if (localStorage.getItem("userToken")) {
            //send auth user role to userRole

            localStorage.setItem("currentUserRole", response.data.userRole);
            if (response.data.userRole == 1) {
              this.$router.push({ name: "admin" });
            } else if (response.data.userRole == 0) {
              this.$router.push({ name: "home" });
            } else if (response.data.userRole == 2) {
              this.$router.push({ name: "editor" });
            }
          } else {
            alert("Token olusturma basarısız");
          }
        });
      } else {
        alert("validation failed");
      }
    },
  },
};
</script>
<style>
.card-img {
  width: 50px;
  height: 400px;

  background: scroll center
    url("https://thumbs.dreamstime.com/b/coffee-croissant-seamless-pattern-background-vector-food-design-icons-hand-drawing-elements-graphic-texture-restaurant-68088453.jpg");
  background-size: cover;
}
</style>
