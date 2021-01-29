<template>
  <q-page class="flex flex-center">
    <div class="q-px-xl py-xxl full-width">
      <h1 class="title text-orange-6">HABITACIONES</h1>
      <room-list/>
    </div>
    <footer-shared/>
  </q-page>
</template>

<script>
import RoomList from "components/RoomList";
import FooterShared from "components/FooterShared";

export default {
  name: "Rooms",
  components: {RoomList,FooterShared}
}
</script>

<style scoped>

</style>
