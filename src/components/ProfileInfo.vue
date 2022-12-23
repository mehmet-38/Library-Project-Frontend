<template lang="">
  <div>
    <div class="card mt-3 ms-5" style="width: 40%">
      <div class="card-body">
        <h5 class="card-title">Hesap Bilgileri</h5>
        <input
          type="text"
          class="form-control mb-3"
          required
          value="Mehmet"
          name="name"
        />

        <input
          type="email"
          class="form-control mb-3"
          required
          value="mehmet@gmail.com"
          name="email"
        />
        <input
          type="text"
          class="form-control mb-3"
          required
          value="123456"
          name="password"
        />

        <button class="btn btn-md btn-primary btn-login fw-bold text-uppercase">
          Güncelle
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
