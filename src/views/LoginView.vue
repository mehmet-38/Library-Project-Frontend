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
              Kayıtlı değilsen <a href="/register">Kayıt Ol</a>
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
      password: "",
    };
  },
  methods: {
    Login() {
      const userObject = {
        email: this.email,
        password: this.password,
      };

      appAxios({
        url: "/login",
        method: "POST",
        data: userObject,
      }).then((response) => {
        localStorage.setItem("userToken", response.data.token);
        /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWV0QGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzODFlNDhlNDIyNzJhODgyZWUxMDhjZCIsImlhdCI6MTY2OTg5Nzg5MSwiZXhwIjoxNjY5OTAxNDkxfQ.S-mXiQcPA51myLrNclXt6khq1tAaGk_5sDK1umte2Ik */
        localStorage.getItem("userToken")
          ? this.$router.push({ name: "home" })
          : alert("Token olusturma basarısız");
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
