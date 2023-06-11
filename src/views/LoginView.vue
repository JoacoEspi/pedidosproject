<template>
  <ion-page>

		<ion-content :fullscreen="true">
			<form @submit.prevent="onSubmit">
				<ion-item>
					<ion-label position="floating">User name</ion-label>
					<ion-input type="text" required v-model="usuario.email" />
				</ion-item>
				<ion-item>
					<ion-label position="floating">Password</ion-label>
					<ion-input type="password" required v-model="usuario.passw" />
				</ion-item>
				<ion-button @click="logear" type="submit" expand="block">login</ion-button>
			</form>
		</ion-content>
	</ion-page>
  
</template>

<script>
import { IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonLabel,
	IonInput,
	IonButton, } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import usuariosService from "../service/usuariosService.js";

export default {
  components: { IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonLabel,
	IonInput,
	IonButton},
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
</style>
