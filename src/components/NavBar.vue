<template>
  <div id="nav-font">
    <nav
      class="navbar navbar-expand-sm navbar-light"
      style="background-color: #ffebad"
    >
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >CBU Kütüphane</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/book-list">Kitaplar</router-link>
          </li>
          <div style="display: flex; justify-content: end; position: relative">
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Profil </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
#nav-font {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
}
</style>
