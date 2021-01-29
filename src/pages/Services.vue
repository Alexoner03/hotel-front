<template>
  <q-page class="flex flex-center">
    <div class="q-px-xl py-xxl text-center">
        <h1 class="title text-orange-6">MR HOTEL</h1>
        <p>Todo nuestro STAFF está capacitado para resolver todas sus dudas y ofrecer los diferentes servicios como Restaurant, Lavandería y Guía Turística</p>
        <ServiceList/>
    </div>
    <q-img src="../assets/img/ser-strip.jpg" class="full-width">
      <div class="absolute-full flex flex-center column text-center">
        <h2 class="subtitle text-white">Promociones Especiales</h2>
        <p class="q-mt-xl">
          MR HOTEL ofrece promocionales especiales <br>
          para gusto y necesidad de cada cliente, <br>
          accesible para todos sus clientes y <br>
          satisfaciendo todas sus necesidades.
        </p>
      </div>
    </q-img>
    <offers/>
    <footer-shared/>
  </q-page>
</template>

<script>
import ServiceList from "components/ServiceList";
import Offers from "components/Offers";
import FooterShared from "components/FooterShared";
export default {
  name: "Services",
  components: {FooterShared, Offers, ServiceList}
}
</script>

<style scoped>

</style>
