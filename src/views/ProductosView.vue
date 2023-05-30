// Es un listado de productos que permita seleccionar uno para que envie al
//usuario a la vista de ese producto Solo se deberia ver un nombre del producto
y //el boton que redirija En un futuro ver si es posible poner una imagen de la
//comida Poner un boton que permita buscar la comida ejemplo: Buscar: "Pizza"
//Tener en cuenta Tarjetas de ION-CARD-ITEM sirve para la imagen y darle la
opcion //de @click


<template>
  <ion-page>
    <ion-card-content>
  <ion-list v-for="(producto, index) in producto" :key="producto.id">
    {{ producto.nombre }} - Precio: {{ producto.precio }}  
        <ion-button @click="agregar(index)">Agregar</ion-button>
    <ion-item >
      <ion-thumbnail >
        <img src="../assets/images/HAMBURGUESA.PNG"/>
      </ion-thumbnail>
      <ion-label>Hamburguesa Premium</ion-label>
    </ion-item>

    <ion-item>
      <ion-thumbnail >
        <img src="../assets/images/Pollo al Spiedo.JPG"/>
      </ion-thumbnail>
      <ion-label>Pollo al Spiedo</ion-label>
    </ion-item>

    <ion-item>
      <ion-thumbnail >
        <img  src="../assets/images/Pizza.PNG" />
      </ion-thumbnail>
      <ion-label>Pizza Napolitana</ion-label>
    </ion-item>
  </ion-list>
</ion-card-content>
  </ion-page>
</template>


<script>
import {IonPage,IonList,IonListHeader,IonLabel,IonButton,IonItem,IonThumbnail,IonCardContent} from '@ionic/vue'
export default {
    components: {IonPage,IonList,IonListHeader,IonLabel,IonButton,IonItem,IonThumbnail,IonCardContent},
    data() {
      return {
      producto: [{id:1, nombre:'Hamburguesa Premiun', precio: 3100}, 
		            {id:2, nombre:'Pollo al Spiedo', precio: 4500}, 
		            {id:3, nombre:'Pizza Napolitana', precio: 2200} ]
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
    }
  }
}
</script>


<style></style>
