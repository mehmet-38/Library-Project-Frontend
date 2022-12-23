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
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>

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
              placeholder="Name"
              v-model="name"
              name="name"
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
                @click="Register"
              >
                Register
              </button>
            </div>
            <div class="d-block text-center mt-2 small">
              Kayıtlı isen <router-link to="/login">Giriş Yap</router-link>
            </div>
          </div>
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
      email: "",
      name: "",
      password: "",
    };
  },
  methods: {
    Register() {
      const userObject = {
        email: this.email,
        name: this.name,
        password: this.password,
      };
      appAxios({
        url: "/signup",
        method: "PUT",
        data: userObject,
      }).then((registerResponse) => {
        console.log(registerResponse);
      });
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
