<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonLabel} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";
export default {
  components: { IonApp, IonHeader,IonLabel},
  setup() {
    const store = useLoginStore();
    const { isLogin, usuario, carrito } = storeToRefs(store);
    // const login = store (para traer los metodos del store)
    return { isLogin, usuario, carrito };
  },
};
</script>
<template>
  <ion-app>
    <ion-header >
        <nav v-if="isLogin">
          <RouterLink  class="color" to="/"> Home |</RouterLink>
          <RouterLink  v-if="!isLogin" to="/login"> Login |</RouterLink>
          <RouterLink  class="color" to="/productos"> Productos |</RouterLink>
          <RouterLink class="color" to="/reporte"> Reporte |</RouterLink>
          <RouterLink v-if="this.carrito.length !== 0" to="/carrito"> Carrito |</RouterLink>
          <RouterLink class="color" v-if="isLogin" to="/logout"> Logout  </RouterLink>
          <ion-label v-if="isLogin" class="usuario"> --- Usuario: {{ usuario.Email }}</ion-label>
        </nav>
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>
ion-header{
  font-family:'Lucida Grande';
  font-size: large;
  text-align: center;
}
.usuario{
  font-family: 'Lucida Grande';
  color:gray;
  font-size: large;
}
.color{
  color:gray;
}
</style>
