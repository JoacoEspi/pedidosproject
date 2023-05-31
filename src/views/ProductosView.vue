//ANADIR BUSCADOR A LA PANTALLA
<template>
  <ion-page>
    <ion-card>
    <ion-card-header>
      <ion-card-title>Productos</ion-card-title>
      <ion-card-subtitle>Disfrute de los mejores productos al mejor precio.</ion-card-subtitle>
      <ion-searchbar v-model="busqueda"></ion-searchbar>
    </ion-card-header>
    <ion-card-content>
      <ion-list v-for="(producto, index) in producto" :key="producto.id">
        <ion-item >
        <ion-thumbnail>
        <ion-img :src= "producto.imagen" >Producto</ion-img>
        </ion-thumbnail>
        <ion-label>{{ producto.nombre }} - Precio: {{ producto.precio }}  - <ion-button @click="agregar(index)">Agregar</ion-button></ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  </ion-page>
</template>

<script>
import {IonPage,IonList,IonLabel,IonButton,IonItem,IonThumbnail,IonCardContent,IonImg,IonCardTitle,IonCardSubtitle,IonCardHeader,IonSearchbar} from '@ionic/vue'
export default {
    components: {IonPage,IonList,IonLabel,IonButton,IonItem,IonThumbnail,IonCardContent,IonImg,IonCardTitle,IonCardSubtitle,IonCardHeader,IonSearchbar},
    data() {
      return {
      producto: [{id:1, nombre:'Hamburguesa Premiun', precio: 3100, imagen: "./src/assets/images/HAMBURGUESA.PNG"}, 
		            {id:2, nombre:'Pollo al Spiedo', precio: 4500, imagen:"./src/assets/images/Pollo al Spiedo.JPG"}, 
		            {id:3, nombre:'Pizza Napolitana', precio: 2200, imagen: "./src/assets/images/Pizza.PNG"}]
    };
  }, 
  methods: {
    agregar(index) {
      const productoSeleccionado = this.producto[index];
      const prducto = JSON.stringify(this.producto);
      //Redirige a la vista de Detalle
      this.$router.push({
          name: "DetallesProductoView",
            params: {
              producto: producto,
              productoId: productoSeleccionado.id,
        },
      })
    },
      buscarProducto(nombre1){
        //Asignamos a variable lista de productos.
        const listaProductos = this.producto
        //Usamos Filter para obtener el producto buscado - Devuelve un array nuevo con los que cumplan.
        const resultado=listaProductos.filter(pro => pro.nombre == nombre1)
        return  console.log(resultado)
    }
  }
}
</script>

<style>
  ion-card-title{
    font-family:'sans-serif';
    color: black;
    font-size:xx-large
  }

  ion-card-subtitle{
    font-family: 'sans-serif';
    color: black;
    font-size:large;
  }

  ion-label,ion-list,ion-item{
    font-family: 'sans-serif';
    color: black;
    font-size:medium;
  }
  
  ion-img {
      border-radius: 10px;
  }

</style>
