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
          id: 1,
          nombre: "Hamburguesa Premiun",
          precio: 3100,
          imagen: "./src/assets/images/HAMBURGUESA.PNG",
        },
        {
          id: 2,
          nombre: "Pollo al Spiedo",
          precio: 4500,
          imagen: "./src/assets/images/Pollo al Spiedo.JPG",
        },
        {
          id: 3,
          nombre: "Pizza Napolitana",
          precio: 2200,
          imagen: "./src/assets/images/Pizza.PNG",
        },
        {
          id: 4,
          nombre: "Milanesa",
          precio: 2500,
          imagen: "./src/assets/images/milanesa.jpg",
        },
        {
          id: 5,
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
    agregar(index) {
      const productoSeleccionado = this.producto[index];
      const producto = JSON.stringify(this.producto);
      //Redirige a la vista de Detalle
      this.$router.push({
        name: "DetallesProductoView",
        params: {
          producto: producto,
          productoId: productoSeleccionado.id,
        },
      });
    },
    buscarProducto() {
      const listaProductos = this.producto;
      const productosEncontrados = listaProductos.filter((pro) => pro.nombre.includes(this.searchText));
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
          <ion-card-subtitle
            >Disfrute de los mejores productos al mejor
            precio.</ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content>
          <div>
            <ion-searchbar v-model="searchText" placeholder="Buscar producto"></ion-searchbar>
            <ion-button @click="buscarProducto()">Buscar</ion-button>
            <ul>
              <li v-for="resultado in resultados" :key="resultado.id">
                <ion-card-content>
                  <ion-item>
                    <ion-thumbnail>
                      <ion-img :src="resultado.imagen">Producto</ion-img>
                    </ion-thumbnail>
                    <ion-label>
                      {{ resultado.nombre }} - Precio:
                      {{ resultado.precio }}</ion-label
                    >
                    <ion-button @click="agregar(index)">Agregar</ion-button>
                  </ion-item>
                </ion-card-content>
              </li>
            </ul>
          </div>
        </ion-card-content>

        <ion-card-content>
          <ion-list v-for="(producto, index) in producto" :key="producto.id">
            <ion-item>
              <ion-thumbnail>
                <ion-img :src="producto.imagen">Producto</ion-img>
              </ion-thumbnail>
              <ion-label>
                {{ producto.nombre }} - Precio: {{ producto.precio }}</ion-label
              >
              <ion-button @click="agregar(index)">Agregar</ion-button>
            </ion-item>
          </ion-list>
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
