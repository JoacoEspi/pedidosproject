<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
export default {
  components: { IonApp, IonHeader },
  setup() {
    const store = useLoginStore();
    const { isLogin, usuario } = storeToRefs(store);
    // const login = store (para traer los metodos del store)
    return { isLogin, usuario };
  },
};
</script>
<template>
  <ion-app>
    <ion-header>
      <div>
        <nav v-if="isLogin">
          <RouterLink to="/"> Home |</RouterLink>
          <RouterLink v-if="!isLogin" to="/login"> Login |</RouterLink>
          <RouterLink to="/productos"> Productos |</RouterLink>
          <RouterLink to="/reporte"> Reporte |</RouterLink>
          <RouterLink to="/carrito"> Carrito |</RouterLink>
          <RouterLink v-if="isLogin" to="/logout"> Logout |</RouterLink>
          Usuario: {{ usuario.Email }}
        </nav>
      </div>
    </ion-header>

    <RouterView />
  </ion-app>
</template>

<style></style>
