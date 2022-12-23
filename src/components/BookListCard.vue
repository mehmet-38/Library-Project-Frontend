<template>
  <div class="container">
    <div class="row">
      <div class="alert alert-success" v-show="show" role="alert">
        Başarılı Ödünç Alma
      </div>
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
            <a
              style="cursor: pointer"
              @click="borrowBook(book._id)"
              class="btn btn-primary"
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
      show: false,
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
      console.log(this.bookList);
    });
  },
  methods: {
    borrowBook(bookId) {
      const borrowObject = {
        bookId: bookId,
      };
      if (this.loggedUser) {
        appAxios({
          url: "/borrow-book",
          method: "POST",
          data: borrowObject,
        }).then((borrow_reponse) => {
          console.log(borrow_reponse.data);
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, 3000);
        });
      }
    },
  },
};
</script>
<style></style>
