<template lang="">
  <div>
    <NavBarVue />
    <div class="row">
      <div class="col-3">
        <div>
          <div
            class="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style="width: 280px; height: 500px"
          >
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <span class="fs-4">Profile</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link link-dark"
                  @click="
                    openProfile = true;
                    openMyBook = false;
                  "
                >
                  <font-awesome-icon
                    icon="fa-solid fa-home"
                    class="me-2 font-icon"
                  />
                  Hesap Bilgileri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link link-dark"
                  @click="
                    openMyBook = true;
                    openProfile = false;
                  "
                >
                  <font-awesome-icon
                    icon="fa-solid fa-user"
                    class="me-2 font-icon"
                  />
                  Kitaplarım
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
      <div class="col-9">
        <ProfileInfo v-if="openProfile == true" :user="user" />

        <MyBookCard v-if="openMyBook == true" />
      </div>
    </div>
  </div>
</template>
<script>
import ProfileInfo from "@/components/ProfileInfo.vue";
import NavBarVue from "@/components/NavBar.vue";
import MyBookCard from "@/components/MyBookCard.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      openProfile: false,
      openMyBook: false,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  components: { NavBarVue, ProfileInfo, MyBookCard },
  created() {
    this.$store.dispatch("user/getUser");
  },
};
</script>
<style lang=""></style>
