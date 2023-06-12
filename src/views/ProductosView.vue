<template>
  <ion-page>
    <ion-content>
      <!-- 1.- Se agrega Buscador de Producto -->
      <ion-searchbar v-model="searchText" placeholder="Buscar producto"></ion-searchbar>
      <ion-button @click="buscarProducto()" expand="block" class="ion-margin">Buscar</ion-button>

      <!-- 2.- Se ingresa directiva V-for para que liste si ubica coincidencias-->
      <ion-list v-if="mostrarPrd">
        <!-- 3.- Se hace uso de IonCard para listar las resultados en forma de Tarjetas Verticalmente con la descripcion del producto-->
        <ion-row>
          <ion-col v-for="resultado in resultados" :key="resultado.id" size="12">
            <ion-card>
              <img alt="Silhouette of mountains" :src="resultado.imagen" />
              <ion-card-header>
                <ion-card-title>{{ resultado.nombre }}</ion-card-title>
                <ion-card-subtitle> Precio: {{ resultado.precio }}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </ion-card-content>
              <!--4.- Se emplea Boton que acciona el Metodo Agregar el cual Rutea a Componente Detalle -->
              <ion-button @click="agregar(resultado.id)" expand="block">Agregar</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-list>

      <ion-list v-else>
        <ion-row>
          <ion-col v-for="producto in productos" :key="producto.id" size="12">
            <ion-card>
              <img alt="Silhouette of mountains" :src="producto.imagen" />
              <ion-card-header>
                <ion-card-title>{{ producto.nombre }}</ion-card-title>
                <ion-card-subtitle> Precio: {{ producto.precio }}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>
              <ion-button @click="agregar(producto.id)" expand="block">Agregar</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

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
  IonCard,
  IonRow,
  IonCol
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
    IonCard,
    IonRow,
    IonCol
  },
  data() {
    return {
      productos: [
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
      mostrarPrd: false,
      searchText: ''
    };
  },
  methods: {
    agregar(id) {
      this.$router.push('/detalle/' + id);
    },
    buscarProducto() {
      const listaProductos = this.productos;
      const productosEncontrados = listaProductos.filter((pro) => pro.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
      this.resultados = productosEncontrados;
      this.mostrarPrd = true;
    },
  },
};
</script>
