<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl py-xxl text-center">
      <h1 class="title text-orange-6 q-mb-xl">SOBRE NOSOTROS</h1>
      <div class="row">
        <div class="col-4">
          <q-img src="../assets/img/a1.jpg" />
        </div>
        <div class="col-8 flex column q-pl-xl">
          <p class="text-orange-6 subtitle text-left">MR HOTEL</p>
          <p class="text-left">MR HOTEL ofrece una colección de hoteles de lujo en la ciudad de chiclayo, incluyendo actividades para descubrir los atractivos más importantes y una propuesta gastronómica que combina recetas tradicionales con cocina de <vanguardia class=""></vanguardia></p>
          <div class="row q-mt-md">
            <div class="col-2 flex items-start justify-start">
              <q-img src="../assets/img/keys.png" width="4rem"/>
            </div>
            <div class="col text-left">
              <p class="font-bold">Registro de huéspedes...</p>
              <p>Diriamente cientos de personas ingresan a nuestras instalaciones para disfrutar de la variedad de sus habitaciones</p>
            </div>
          </div>
          <div class="row q-mt-md">
            <div class="col-2 flex items-start justify-start">
              <q-img src="../assets/img/summer.png" width="4rem"/>
            </div>
            <div class="col text-left">
              <p class="font-bold">Servicios diarios...</p>
              <p>MR HOTEL ofrece servicios como Lavandería y Restaurant disponible 24/7 a gusto y necesidad de sus clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width text-center bg-principios q-px-xl py-xxl">
      <h2 class="subtitle text-white block">PRINCIPIOS</h2>
      <div class="flex justify-around text-white items-start q-mt-xl">
        <div class="boxPrincipios flex column items-center">
          <h3 class="subtitle text-center">MISIÓN</h3>
          <p>
            MR HOTEL es un lugar de tradición y excelencia, una empresa comprometida en ofrecer a sus clientes el confort y servicio para una estadía inmejorable, haciendo de la excelencia nuestra carta de presentación
          </p>
        </div>
        <div class="boxPrincipios flex column items-center">
          <h3 class="subtitle text-center">VISIÓN</h3>
          <p>
            MR HOTEL se proyecta hacia el 2021 ser la empresa de hospitabilidad más destacada de la región; manteniendo una filosofía de excelencia en el serficio eficiente, seguro; mediante el impulso de la actividad turística en la región y el respeto por el medio ambiente llegando a ser uno de los grupos hoteleros más competitivos de la región
          </p>
        </div>
        <div class="boxPrincipios flex column items-center">
          <h3 class="subtitle text-center">VALORES</h3>
          <p>
            Fraternidad <br>
            Responsabilidad <br>
            Honestidad
          </p>
        </div>
      </div>
    </div>
    <div class="full-width q-px-xl py-xxl text-center">
      <h2 class="subtitle q-mt-xl">STAFF</h2>
      <div class="flex justify-around items-start">
        <div class="flex column flex-center" style="width: 20%;">
          <q-avatar size="15rem">
            <q-img src="../assets/img/administrador.png">
              <span class="absolute-full flex flex-center avatar-label">Administrador</span>
            </q-img>
          </q-avatar>
          <p class="q-mt-md">
            Encargada de la administración de todo el establecimiento.
          </p>
        </div>
        <div class="flex column flex-center" style="width: 20%;">
          <q-avatar size="15rem">
            <q-img src="../assets/img/conserje.jpg">
              <span class="absolute-full flex flex-center avatar-label">Conserje</span>
            </q-img>
          </q-avatar>
          <p class="q-mt-md">
            Encargado de la limpieza y organización de todas las instalaciones          </p>
        </div>
        <div class="flex column flex-center" style="width: 20%;">
          <q-avatar size="15rem">
            <q-img src="../assets/img/recepcionista.jpg">
              <span class="absolute-full flex flex-center avatar-label">Recepcionista</span>
            </q-img>
          </q-avatar>
          <p class="q-mt-md">
            Encargada de realizar el chek-in a los huéspedes
          </p>
        </div>
        <div class="flex column flex-center" style="width: 20%;">
          <q-avatar size="15rem">
            <q-img src="../assets/img/secretaria.jpg">
              <span class="absolute-full flex flex-center avatar-label">Secretaria</span>
            </q-img>
          </q-avatar>
          <p class="q-mt-md">
            Encargada de supervisar todos los asuntos que requieran confidencialidad
          </p>
        </div>
      </div>
    </div>
    <footer-shared/>
  </q-page>
</template>

<script>
import FooterShared from "components/FooterShared";
export default {
name: "AboutUs",
  components: {FooterShared}
}
</script>

<style scoped>

</style>
