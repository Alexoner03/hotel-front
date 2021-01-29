<template>
  <q-page class="flex flex-center">
    <div class="full-width">
      <q-img src="../assets/img/banner.jpg">
        <div class="absolute-full flex flex-center" style="background-color: transparent">
          <div class="text-center box-title">
            <h1 class="title">MR HOTELS</h1>
            <p style="letter-spacing: 8px;font-size: 1.5rem">Bienvenidos a nuestro Hotel</p>
            <br>
            <p>MR Hotel es una empresa dedicada al servicio de hospedaje, que brinda comodidad, confort y una grata experiencia para el consumidor</p>
          </div>
        </div>
      </q-img>
    </div>
    <div class="q-px-xl flex flex-wrap full-width q-my-xl">
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s1.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Star Hotel</p>
          <p>Certificada con 3 estrellas</p>
        </div>
      </div>
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s2.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Servicios</p>
          <p style="line-height: 1.5rem">Lista para ofrecerle los servicios de: <br>
            - Restaurant <br>
            - Lavandería
          </p>
        </div>
      </div>
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s4.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Seguridad</p>
          <p style="line-height: 1.5rem">Seguridad garantizada para usted y sus <br> acompañantes <br>
            Total seguridad las 24 horas
          </p>
        </div>
      </div>
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s3.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Menú</p>
          <p style="line-height: 1.5rem">Una carta completamente varidada a <br> gusto del cliente para satisfacer todos
            <br> sus antojos
          </p>
        </div>
      </div>
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s5.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Hotel</p>
          <p style="line-height: 1.5rem">Una experiencia garantizada de confort <br> y comodidad
          </p>
        </div>
      </div>
      <div class="featureBox flex items-start">
        <q-img src="../assets/img/s6.png" width="4rem" contain/>
        <div class="q-ml-md flex justify-start items-start column">
          <p class="text-orange-6 font-bold q-py-sm">Conserje</p>
          <p style="line-height: 1.5rem">Conserje a su alcance las 24 horas para <br> corresponder a cualquier necesidad
          </p>
        </div>
      </div>
    </div>
    <div class="full-width q-px-xl flex  justify-center items-center q-py-xl" style="background-color: #696A88">
      <div class="clients-experiencies-box">
        <h2 class="subtitle text-white">EXPERIENCIAS DE CLIENTES</h2>
        <span class="text-orange-6 q-mb-md block">100% Servicios Amigable</span>
        <p class="text-white q-mb-md">
          La satisfacción de nuestro servicio es garantizada y recomendada por nuestro clientes
          Validada diariamente por los cientos de comentarios positivos y los momentos inolvidables vividos en nuestra locación
        </p>
        <div class="full-width flex flex-center">
          <q-btn icon="fas fa-comments" flat label="COMENTARIOS" color="white" class="button"/>
        </div>
      </div>
    </div>
    <div style="padding-top: 4rem; padding-bottom: 4rem" class="text-center">
      <h2 class="subtitle text-orange-6">NUESTRAS HABITACIONES</h2>

      <div class="full-width q-pa-xl flex rooms-box-grid">
        <div>
          <q-img src="../assets/img/b6.jpg" contain>
            <div class="absolute-full flex flex-center imgBox">
              <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
            </div>
          </q-img>
        </div>
        <div>
          <div style="height: 50%; padding-bottom: 0.05rem">
            <q-img src="../assets/img/b1.jpg">
              <div class="absolute-full flex flex-center imgBox">
                <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
              </div>
            </q-img>
          </div>
          <div style="height: 50%; padding-top: 0.05rem">
            <q-img src="../assets/img/b2.jpg" contain>
              <div class="absolute-full flex flex-center imgBox">
                <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
              </div>
            </q-img>
          </div>
        </div>
        <div>
          <div style="height: 50%; padding-bottom: 0.05rem">
            <q-img src="../assets/img/b3.jpg">
              <div class="absolute-full flex flex-center imgBox">
                <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
              </div>
            </q-img>
          </div>
          <div style="height: 50%; padding-top: 0.05rem">
            <q-img src="../assets/img/b4.jpg" contain>
              <div class="absolute-full flex flex-center imgBox">
                <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
              </div>
            </q-img>
          </div>
        </div>
        <div>
          <q-img src="../assets/img/b5.jpg" contain>
            <div class="absolute-full flex flex-center imgBox">
              <q-icon name="fas fa-plus-circle" color="white" size="2rem"/>
            </div>
          </q-img>
        </div>
      </div>

      <p class="paraph q-px-xl">Nuestros tipos de habitaciones son diseñados estratégicamente para satisfacer las necesidad de la malloría de todos nuestros clientes
        Tipos de habitaciones como: Simples, Dobles, Matrimoniales y Familiares</p>
    </div>
    <q-img src="../assets/img/bann.jpg">
      <div class="absolute-full flex flex-center column">
        <div style="width: 80%" class="text-center">
          <h2 class="subtitle">Bienvenidos</h2>
          <div class="flex justify-between q-mt-xl">
            <div class="flex column flex-center">
              <q-img src="../assets/img/s7.png" width="4rem" class="q-mb-md"/>
              <span>Diversas locaciones turísticas</span>
            </div>
            <div class="flex column flex-center">
              <q-img src="../assets/img/s8.png" width="4rem" class="q-mb-md"/>
              <span>Diversas locaciones turísticas</span>
            </div>
            <div class="flex column flex-center">
              <q-img src="../assets/img/s9.png" width="4rem" class="q-mb-md"/>
              <span>Diversas locaciones turísticas</span>
            </div>
            <div class="flex column flex-center">
              <q-img src="../assets/img/s10.png" width="4rem" class="q-mb-md"/>
              <span>Diversas locaciones turísticas</span>
            </div>
          </div>
        </div>
      </div>
    </q-img>
    <offers/>
    <footer-shared/>
  </q-page>
</template>

<script>
import Offers from "components/Offers";
import FooterShared from "components/FooterShared";
export default {
  name: 'PageIndex',
  components: {FooterShared, Offers},
}
</script>

<style>
  .paraph{
    font-size: 1.3rem;
  }
</style>
