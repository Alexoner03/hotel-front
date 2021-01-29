<template>
  <q-page class="flex flex-center">
    <div class="q-px-xl py-xxl full-width">
      <h1 class="title text-orange-6">RESERVAS</h1>
      <q-form class="q-mt-xl ">
        <div style="width: 60%" class="row q-gutter-md q-mb-md">
          <div class="col-3 items-center flex">
            <span class="font-bold">Habitación</span>
          </div>
          <div class="col-7">
            <q-input type="number" square outlined color="orange-6"/>
          </div>
        </div>
        <div style="width: 60%" class="row q-gutter-md q-mb-md">
          <div class="col-3 items-center flex">
            <span class="font-bold">Fecha</span>
          </div>
          <div class="col-7">
            <q-input square outlined color="orange-6" class="q-pb-none q-mb-none" v-model="date" mask="date" :rules="['date']">
              <template v-slot:append class="q-pb-none q-mb-none">
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>          </div>
        </div>
        <div style="width: 60%" class="row q-gutter-md q-mb-md">
          <div class="col-3 items-center flex">
            <span class="font-bold">Servicios Adicionales</span>
          </div>
          <div class="col-7">
            <q-select
              square
              outlined
              color="orange-6"
              v-model="modelMultiple"
              multiple
              :options="options"
              use-chips
              stack-label
              label="Seleccione"
            />
          </div>
        </div>
        <div style="width: 60%" class="flex justify-start">
          <q-btn label="RESERVAR" color="orange-6"/>
        </div>
      </q-form>
    </div>

    <div class="q-px-xl full-width q-mb-xl">
      <q-table
        :data="data"
        :columns="columns"
        row-key="name"
      >

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width >Opciones</q-th>
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="primary" round dense icon="create" class="q-mr-md" />
              <q-btn size="sm" color="negative" round dense icon="close" />
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>

    <footer-shared/>
  </q-page>
</template>

<script>
import FooterShared from "components/FooterShared";
export default {
  name: "Orders",
  components: {FooterShared},
  data(){
    return{
      modelMultiple: [ 'Servicios Numero 1' ],

      options: [
        'Servicios Numero 1',
        'Servicios Numero 2',
        'Servicios Numero 3',
        'Servicios Numero 4',
        'Servicios Numero 5'
      ],




      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true, style: 'width: 10px' },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
