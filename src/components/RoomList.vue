<template>
  <div class="full-width">
    <div class="row full-width q-mb-lg" v-for="i in 10">
      <div class="col-6 flex column justify-center q-pr-lg">
        <p class="subtitle text-orange-6">Habitación Simple</p>
        <p class="subtitle text-orange-6">101</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur deserunt distinctio dolore eaque eligendi enim et incidunt, inventore ipsum laborum natus quam qui quibusdam tempora unde voluptatum. Autem, libero?</p>
        <q-btn color="orange-6" label="Leer más.." size="1rem" outline class="self-start q-mt-md" @click="icon = true"/>
      </div>
      <div class="col-6">
        <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg" />
      </div>
    </div>

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Detalles</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          COSTO : $$$ <br>
          HABITACIONES: 2 <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-section class="flex justify-end">
          <q-btn label="SOLICITAR" color="orange-6" @click="solicitar"/>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: "RoomList",
  data(){
    return{
      icon : false
    }
  },
  methods : {
    solicitar(){
      this.$router.push('/orders')
    }
  }
}
</script>

<style scoped>

</style>
