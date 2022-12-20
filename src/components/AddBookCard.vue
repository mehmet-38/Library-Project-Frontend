<template>
  <div>
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
          placeholder="Kitap Türü"
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
          console.log(book_response.data);
          this.book_name = "";
          this.book_author = "";
          this.book_type = "";
        });
      } else alert("validation error");
    },
  },
};
</script>
<style></style>
