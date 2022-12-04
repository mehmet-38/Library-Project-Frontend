<template>
  <div>
    <NavBar />
    <BookListCard />
  </div>
</template>
<script>
import BookListCard from "@/components/BookListCard.vue";
import NavBar from "@/components/NavBar.vue";

export default { components: { NavBar, BookListCard } };
</script>
<style></style>
