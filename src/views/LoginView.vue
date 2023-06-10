<template>
  <ion-page>
    <ion-content>
      <h2>Login</h2>
      <ion-input v-model="usuario.email" label="Email" type="email" ></ion-input>
      <ion-input v-model="usuario.passw" label="Password" type="password"></ion-input>
      <ion-button @click="logear" class="ion-text-center">Login</ion-button>
    </ion-content>  
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent, IonInput } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import usuariosService from "../service/usuariosService.js";

export default {
  components: { IonPage, IonButton, IonContent, IonInput },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { email: '', passw: '' }
    }
  },
  methods: {
    async logear() {
      try {
        console.log("Entra al metodo")
        const usuarios = await usuariosService.cargar();
        const usuarioEncontrado = usuarios.find(
          usuario => usuario.Email === this.usuario.email && usuario.Password === this.usuario.passw
        );
        console.log(usuarios)
        console.log(usuarioEncontrado)
        if (usuarioEncontrado) {
          this.login(usuarioEncontrado);
          this.$router.push('/');
        } else {
          // Mostrar mensaje de error o realizar otras acciones necesarias
          throw "Credenciales incorrectas"
        }
      } catch (error) {
        // Manejar errores de conexión
        alert(error)
      }
    }
  }
};
</script>

<style>
h2{
  font-family: "sans-serif";
  color: black;
  font-size: xx-large;
  text-align:justify;
  font-weight:bold;
}

ion-button {
  font-family:"Georgia";
  font-weight: bold;
}

div{
  font-family:"Georgia";
  color:rgb(23, 23, 37);
  font-size:medium;
  font-weight:bold;
}

</style>
