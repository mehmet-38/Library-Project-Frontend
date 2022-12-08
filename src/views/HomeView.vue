<template>
  <div>
    <NavBar />
    <h1>HOME</h1>
    <h3>{{ loggedUser }}</h3>
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
