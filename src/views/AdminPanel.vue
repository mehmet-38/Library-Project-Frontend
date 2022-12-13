<template>
  <div>
    <NavBar />
    <AddBookCard />
  </div>
</template>
<script>
import AddBookCard from "@/components/AddBookCard.vue";
import NavBar from "@/components/NavBar.vue";

export default { components: { NavBar, AddBookCard } };
</script>
<style></style>
