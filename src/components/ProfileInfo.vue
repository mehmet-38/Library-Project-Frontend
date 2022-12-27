<template lang="">
  <div>
    <div class="card mt-3 ms-5" style="width: 40%">
      <div class="card-body">
        <h5 class="card-title">Hesap Bilgileri</h5>
        <label for="name">İsim</label>
        <input
          type="text"
          class="form-control mb-3"
          required
          name="name"
          :value="user.name"
        />
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control mb-3"
          required
          :value="user.email"
          name="email"
        />

        <button class="btn btn-md btn-primary btn-login fw-bold text-uppercase">
          Güncelle
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>
<style lang=""></style>
