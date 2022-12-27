<template lang="">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-3 col-lg-3">
          <div class="card mt-3" style="width: 40rem">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <div class="table-responsive">
                <table
                  style="width: 100%"
                  class="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Kitap İsmi</th>
                      <th>Kitap Yazarı</th>
                      <th>Kitap Türü</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="book in bookList" :key="book._id">
                      <td class="col-3">{{ book.book_name }}</td>
                      <td class="col-3">{{ book.book_author }}</td>
                      <td class="col-2">{{ book.book_type }}</td>
                      <td>
                        <button class="btn btn-success">Kitabı Bırak</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
export default {
  data() {
    return {
      bookList: [],
    };
  },

  created() {
    appAxios({
      url: "/my-book",
      method: "GET",
    }).then((book_response) => {
      this.bookList = book_response.data;
    });
  },
};
</script>
<style lang=""></style>
