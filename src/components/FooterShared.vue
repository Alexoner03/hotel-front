<template>
  <footer class="full-width" style="background-color: #696A88">
    <div class="q-px-xl" style="padding-top: 4rem; padding-bottom: 4rem">
      <div class="row q-col-gutter-md">
        <div class="col">
          <ul>
            <li><h3 class="subtitle text-orange-6">MR HOTELS</h3></li>
            <li class="text-white">
              Empresa dedicada a servicios a todos sus clientes para satisfacción, seguridad y comodidad
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li><h3 class="subtitle text-orange-6">DIRECCIÓN</h3></li>
            <li class="text-white">
              Nazareth 704 (074) 237728 Chiclayo Lambayeque
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li><h3 class="subtitle text-orange-6">CONTÁCTANOS</h3></li>
            <li class="text-white q-mb-md">
              <q-form>
                <div class="row full-width flex items-center">
                  <div class="col-8 q-pr-sm">
                    <q-input square filled label="Email" color="orange-6" bg-color="white"/>
                  </div>
                  <div class="col-4">
                    <q-btn flat label="ENVIAR"  color="white" class="button"/>
                  </div>
                </div>
              </q-form>
            </li>
            <li>
              <ul class="ul-list-inline list-icons text-white">
                <li><q-icon name="fab fa-facebook-square"/></li>
                <li><q-icon name="fab fa-twitter"/></li>
                <li><q-icon name="fab fa-instagram"/></li>
                <li><q-icon name="fab fa-google-plus-g"/></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li><h3 class="subtitle text-orange-6">ENTRA RÁPIDO</h3></li>
            <li class="text-white text-center"><router-link class="link-reset" to="/">Inicio</router-link></li>
            <li class="text-white text-center"><router-link class="link-reset" to="/about">Nosotros</router-link></li>
            <li class="text-white text-center"><router-link class="link-reset" to="/services">Servicios</router-link></li>
            <li class="text-white text-center"><router-link class="link-reset" to="/rooms">Habitaciones</router-link></li>
            <li class="text-white text-center"><router-link class="link-reset" to="/contact">Contacto</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-orange-6 q-px-xl q-py-md text-center text-white">
      © 2019 MR Hotel. Todos los derechos reservados | Diseñado por Katherine Francia
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterShared"
}
</script>

<style scoped>

</style>
