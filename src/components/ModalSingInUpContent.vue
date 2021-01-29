<template>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="text-black"
      active-color="orange-6"
      indicator-color="orange-6"
      align="justify"
      narrow-indicator
    >
      <q-tab name="login" label="INICIAR SESIÓN" />
      <q-tab name="singup" label="REGISTRA" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="login">
        <q-form
          class="q-gutter-md bg-white"
        >
          <q-input
            square
            outlined
            color="orange-6"
            v-model="user"
            label="Usuario"
            hint="Nombre de usuario"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor escriba algo...']"
          />

          <q-input
            square
            outlined
            color="orange-6"
            type="password"
            v-model="pass"
            label="Contraseña"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor escriba algo...']"
          />

          <div class="flex justify-end">
            <q-btn label="Iniciar Sesión" type="submit" color="orange-6"/>
          </div>
        </q-form>
      </q-tab-panel>

      <q-tab-panel name="singup">
        <q-form>
          <div class="row q-gutter-md q-mb-md">
            <div class="col">
              <q-input label="Usuario" square outlined color="orange-6"/>
            </div>
            <div class="col">
              <q-input label="Contraseña" type="password" square outlined color="orange-6"/>
            </div>
          </div>
          <div class="row q-gutter-md q-mb-md">
            <div class="col">
              <q-input label="Nombres" square outlined color="orange-6"/>
            </div>
            <div class="col">
              <q-input label="DNI" square outlined color="orange-6"/>
            </div>
          </div>
          <div class="row q-gutter-md q-mb-md">
            <div class="col">
              <q-input label="Apellido Pat." square outlined color="orange-6"/>
            </div>
            <div class="col">
              <q-input label="Apellido Mat." square outlined color="orange-6"/>
            </div>
          </div>
          <div class="row q-gutter-md q-mb-md">
            <div class="col">
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
              </q-input>
            </div>
            <div class="col">
              <q-input label="Correo" type="mail" square outlined color="orange-6"/>
            </div>
          </div>
          <div class="row q-gutter-md q-mb-lg">
            <div class="col">
              <q-input label="Telefono" square outlined color="orange-6"/>
            </div>
            <div class="col">
              <q-select square outlined :options="['Masculino','Femenino']" label="Sexo" color="orange-6" />
            </div>
          </div>
          <div class="flex justify-end">
            <q-btn label="Registrar" color="orange-6"/>
          </div>
        </q-form>
      </q-tab-panel>

    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: "ModalSingInUpContent",
  data(){
    return{
      user: null,
      pass: null,
      tab : 'login',

      date : null
    }
  },
}
</script>

<style scoped>

</style>
