<script>
import {
  IonPage,
  IonList,
  IonLabel,
  IonButton,
  IonItem,
  IonThumbnail,
  IonCardContent,
  IonImg,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonSearchbar,
  IonContent,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonList,
    IonLabel,
    IonButton,
    IonItem,
    IonThumbnail,
    IonCardContent,
    IonImg,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonSearchbar,
    IonContent,
  },
  data() {
    return {
      producto: [
        {
          id: 0,
          nombre: "Hamburguesa Premium",
          precio: 3100,
          imagen: "./src/assets/images/HAMBURGUESA.PNG",
        },
        {
          id: 1,
          nombre: "Pollo al Spiedo",
          precio: 4500,
          imagen: "./src/assets/images/Pollo al Spiedo.JPG",
        },
        {
          id: 2,
          nombre: "Pizza Napolitana",
          precio: 2200,
          imagen: "./src/assets/images/Pizza.PNG",
        },
        {
          id: 3,
          nombre: "Milanesa",
          precio: 2500,
          imagen: "./src/assets/images/milanesa.jpg",
        },
        {
          id: 4,
          nombre: "Empanadas",
          precio: 500,
          imagen: "./src/assets/images/empanadas.jpg",
        },
        {
          id: 5,
          nombre: "Asado",
          precio: 5000,
          imagen: "./src/assets/images/asado2.jpg",
        },
      ],
      resultados: [],
    };
  },
  methods: {
    agregar(id) {
      //Redirige a la vista de Detalle
      // this.$router.push({
      //   name: "detalle",
      //   params: {
      //     producto: producto1,
      //   },
      //}
      //);
      this.$router.push('/detalle/'+ id )
    },
    buscarProducto() {
      const listaProductos = this.producto;
      const productosEncontrados = listaProductos.filter((pro) =>pro.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
      this.resultados = productosEncontrados;
    },
  },
};
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Menu</ion-card-title>
          <ion-card-subtitle>Disfrute de los mejores productos al mejor precio.</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <div>
            <ion-searchbar v-model="searchText" placeholder="Buscar producto"></ion-searchbar>
            <ion-button @click="buscarProducto()">Buscar</ion-button>
          </div>

          <!-- Mostrar la lista de resultados si hay resultados -->
          <ul v-if="resultados.length > 0">
            <ion-list>
              <ion-card-content v-for="resultado in resultados" :key="resultado.id">
                <ion-item>
                  <ion-thumbnail>
                    <ion-img :src="resultado.imagen">Producto</ion-img>
                  </ion-thumbnail>
                  <ion-label style="margin-left: 10px; display: flex; align-items: center;">{{ resultado.nombre }} - Precio: {{ resultado.precio }}</ion-label>
                  <ion-button @click="agregar(resultado.id)">Agregar</ion-button>
                </ion-item>
              </ion-card-content>
            </ion-list>
          </ul>

          <!-- Mostrar la lista de productos sin filtrar si no hay resultados -->
          <ul v-else>
            <ion-list>
              <ion-card-content v-for="producto in producto" :key="producto.id">
                <ion-item>
                  <ion-thumbnail>
                    <ion-img :src="producto.imagen">Producto</ion-img>
                  </ion-thumbnail>
                  <ion-label style="margin-left: 10px; display: flex; align-items: center;">{{ producto.nombre }} - Precio: {{ producto.precio }}</ion-label>
                  <ion-button @click="agregar(producto.id)">Agregar</ion-button>
                </ion-item>
              </ion-card-content>
            </ion-list>
          </ul>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style>
ion-card-title {
  font-family: "sans-serif";
  color: black;
  font-size: xx-large;
}

ion-card-subtitle {
  font-family: "sans-serif";
  color: black;
  font-size: large;
}

ion-label,
ion-list,
ion-item {
  font-family: "sans-serif";
  color: black;
  font-size: medium;
}

ion-img {
  border-radius: 10px;
}

ion-button {
  display: inline-flex;
  justify-content: left;
}
</style>
