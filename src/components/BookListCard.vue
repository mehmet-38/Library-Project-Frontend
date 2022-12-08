<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6 col-sm-3 col-lg-3"
        v-for="book in bookList"
        :key="book"
      >
        <div class="card mt-3" style="width: 18rem">
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ book.book_name }}</h5>
            <p class="card-text">
              {{ book.book_author }}
            </p>
            <p class="card-text text-muted">{{ book.book_type }}</p>
            <a style="cursor: pointer" @click="getBook" class="btn btn-primary"
              >Emanet Al</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      bookList: [],
    };
  },
  computed: {
    ...mapState(["loggedUser"]),
  },
  created() {
    this.$store.dispatch("loggedControl");
  },
  mounted() {
    appAxios({
      url: "/book",
      method: "GET",
    }).then((book_response) => {
      this.bookList = book_response.data;
    });
  },
  methods: {
    getBook() {
      this.loggedUser
        ? alert("basarili emanet alma")
        : alert("lutfen giris yapınız");
    },
  },
};
</script>
<style></style>
