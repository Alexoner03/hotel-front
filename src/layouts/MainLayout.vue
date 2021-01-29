<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      reveal
    >
<!--      PRIMER TOOLBAR-->
      <q-toolbar class="bg-orange-6 q-py-sm">
        <div class="full-width flex justify-between">
          <ul class="ul-list-inline list-icons">
            <li>Síguenos en:</li>
            <li><q-icon name="fab fa-facebook-square"/></li>
            <li><q-icon name="fab fa-twitter"/></li>
            <li><q-icon name="fab fa-instagram"/></li>
            <li><q-icon name="fab fa-google-plus-g"/></li>
          </ul>
          <ul class="ul-list-inline">
            <li><a class="link-reset"href="tel:999888777"><q-icon name="fas fa-mobile-alt"/> 999 888 777</a></li>
            <li>Bienvenido Invitado</li>
            <li><a class="link-reset" href="mailto:katho.francia16@gmail.com"><q-icon name="fas fa-envelope"/> katho.francia16@gmail.com</a></li>
          </ul>
        </div>
      </q-toolbar>

<!--      SEGUNDO TOOLBAR-->
      <q-toolbar class="bg-white" inset>
        <div class="flex full-width justify-between items-center text-black">
          <q-toolbar-title class="font-bold">
            MR HOTEL
          </q-toolbar-title>

          <q-tabs class="bg-white" active-color="orange-6">
            <q-route-tab
              label="INICIO"
              to="/"
              exact
            />
            <q-route-tab
              label="NOSOTROS"
              to="/about"
              exact
            />
            <q-route-tab
              label="SERVICIOS"
              to="/services"
              exact
            />
            <q-route-tab
              label="HABITACIONES"
              to="/rooms"
              exact
            />
            <q-route-tab
              label="CONTACTO"
              to="/contact"
              exact
            />
          </q-tabs>

          <q-btn label="INICIAR SESIÓN" class="bg-blue-6 text-white" @click="modal = true" />
        </div>
      </q-toolbar>
    </q-header>

<!--    MODAL : INICIO DE SESIO - REGISTRO-->
    <q-dialog v-model="modal" persistent >
      <div class="q-pa-lg bg-white" style="min-width: 30vw">
        <div class="row items-center q-mb-xl">
          <div class="text-h6 text-orange-6">MR HOTELS</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
        <modal-sing-in-up-content />
      </div>
    </q-dialog>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ModalSingInUpContent from "components/ModalSingInUpContent";
export default {
  name: 'MainLayout',
  components: {ModalSingInUpContent},
  data(){
    return {
      modal: false
    }
  }
}
</script>
