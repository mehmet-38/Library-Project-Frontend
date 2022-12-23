<template lang="">
  <div
    class="container"
    style="justify-content: center; display: flex; margin-top: 10%"
  >
    <div class="card text-center" style="width: 25%">
      <div class="card-header h5 text-white bg-primary">Şifre Sıfırlama</div>
      <div class="card-body px-5">
        <p class="card-text py-2">
          Şifrenizi sıfırlama linkini gönderebilmek için, e-posta adersinizi
          giriniz.
        </p>
        <div class="form-outline">
          <input
            type="email"
            id="email"
            name="email"
            class="form-control my-3"
          />
        </div>
        <a href="#" class="btn btn-primary w-100">Gönder</a>
        <div class="d-flex justify-content-between mt-4">
          <router-link class="" to="/login">Login</router-link>
          <router-link class="" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
