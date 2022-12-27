<template>
  <div>
    <!-- <NavBar /> -->
    <div class="row">
      <div class="col-3">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style="width: 280px; height: 700px"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">Editor</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <router-link to="/editor" class="nav-link link-dark">
                <font-awesome-icon
                  icon="fa-solid fa-home"
                  class="me-2 font-icon"
                />
                Kitap Ekle
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-9">
        <div class="card mt-3 ms-5" style="width: 50%">
          <div class="card-body">
            <h5 class="card-title">Kitap Ekle</h5>
            <input
              type="text"
              class="form-control mb-3"
              required
              placeholder="Kitap İsmi"
              v-model="book_name"
              name="book_name"
            />

            <input
              type="text"
              class="form-control mb-3"
              required
              placeholder="Kitap Yazarı"
              v-model="book_author"
              name="book_author"
            />
            <input
              type="text"
              class="form-control mb-3"
              required
              placeholder="Kitap Tip"
              v-model="book_type"
              name="book_type"
            />

            <button
              class="btn btn-md btn-primary btn-login fw-bold text-uppercase"
              @click="addBook"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <AddBookCard /> -->
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      book_name: "",
      book_author: "",
      book_type: "",
    };
  },
  validations() {
    return {
      book_name: { required, minLength: minLength(3) },
      book_author: { required, minLength: minLength(3) },
      book_type: { required, minLength: minLength(3) },
    };
  },
  methods: {
    addBook() {
      this.v$.$validate();
      const bookObject = {
        book_name: this.book_name,
        book_author: this.book_author,
        book_type: this.book_type,
      };
      if (!this.v$.$error) {
        appAxios({
          url: "/book",
          method: "POST",
          data: bookObject,
        }).then((book_response) => {
          console.log(book_response);
          this.book_name = "";
          this.book_author = "";
          this.book_type = "";
        });
      } else {
        console.log(this.v$.$error);
      }
    },
  },
};
</script>
