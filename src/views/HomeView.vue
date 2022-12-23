<template>
  <div>
    <NavBar />
    <div
      class="container text-center"
      style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 10%;
      "
    >
      <h1>Turgutlu Kütüphanesi</h1>
      <h3>Kitaplar sekmesinden istediğiniz kitabı emanet alabilirsiniz.</h3>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  components: { NavBar },
  computed: {
    ...mapState(["loggedUser"]),
  },
  mounted() {
    this.$store.dispatch("loggedControl");
  },
};
</script>
