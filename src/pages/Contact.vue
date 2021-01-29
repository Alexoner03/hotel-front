<template>
  <q-page class="flex flex-center">
    <div class="q-px-xl py-xxl full-width">
      <h1 class="title text-orange-6">CONTACTO</h1>
      <q-form class="q-my-xl row">
        <div class="col-7">
          <div class="flex justify-between">
            <q-input label="Nombre" square outlined color="orange-6" style="width: 49%"/>
            <q-input label="Email"  type="email" square outlined color="orange-6" style="width: 49%"/>
          </div>
          <br>
          <q-input type="textarea" square outlined color="orange-6 resize-none" label="Mensaje" />
          <q-btn type="submit" color="orange-6" label="ENVIAR" class="q-mt-lg"/>
        </div>
        <div class="q-ml-lg col-4">
          <q-img src="https://blog.hubspot.com/hubfs/Service-desk.jpg"/>
        </div>
      </q-form>
      <div class="full-width">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358707.20533763967!2d-79.92157063241481!3d-6.623038408541597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904b65aa1132bf57%3A0x84d064674627cfb4!2sLambayeque!5e0!3m2!1ses-419!2spe!4v1608500685460!5m2!1ses-419!2spe" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
    <footer-shared/>
  </q-page>
</template>

<script>
import FooterShared from "components/FooterShared";
export default {
  name: "Contact",
  components: {FooterShared}
}
</script>

<style scoped>

</style>
