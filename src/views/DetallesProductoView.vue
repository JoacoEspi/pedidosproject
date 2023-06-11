<template>
    <ion-page>
        <ion-content>
            <ion-card>
                  <ion-img :src="'.'+this.producto.imagen"></ion-img>
                  <ion-card-header>
                  <ion-card-title>{{ producto.nombre }}</ion-card-title>
                  <ion-card-subtitle> Precio: {{ producto.precio }}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    <ion-input label="Cantidad" type="number" v-model="cantidad" min="1" max="20"></ion-input>
                    <ion-textarea label="Deja tus comentarios" v-model="comentario"></ion-textarea>
                    <p>Precio total: {{ precioTotal }}</p>
                </ion-card-content>
                <ion-button expand="block" @click="agregarAlCarrito()">Agregar al carrito</ion-button>
              </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
//CORI
// La vista se encargaria de mostrar: El nombre de producto, el precio, la descripcion, un cuadro de obs, la cantidad deseada y el boton de agregar
// El producto se agregaria a la lista de "Carrito de compras"
// Un boton para volver para atras sin agregar el producto al carrito

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
} from '@ionic/vue';
import productoService from '../service/productoService';
import {useLoginStore} from '../stores/login.js';



export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonCard,
        IonImg,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton, 
        IonThumbnail,
    },
    setup() {
    const store = useLoginStore();
    const { editCarritoItemCant, editCarritoItemTotal, editCarritoItemCom, existeEnCarrito, addToCarrito} = store;
    return { addToCarrito, editCarritoItemCant, editCarritoItemTotal, editCarritoItemCom, existeEnCarrito };
  },
    data() {
        return {
            // producto: {}, // Objeto del producto seleccionado
            // cantidad: 1, // Cantidad seleccionada por el usuario (por defecto, 1)
            // comentarios: '' // Comentarios ingresados por el usuario
            producto: {},
            cantidad:1,
            comentario:'',
        };
    },
    async mounted(){
        // this.producto = JSON.parse(this.$route.params.producto);
        this.producto = await productoService.cargarPorId(this.$route.params.id);
        console.log(this.producto.id)
    },
    methods: {
        agregarAlCarrito() {
            let productoEnviar = {
                id: this.producto.id,
                nombre: this.producto.nombre,
                cantidad: this.cantidad,
                precioTotal: this.precioTotal,
                comentario: this.comentario,
                imagen : this.producto.imagen
            };
            if(this.existeEnCarrito(productoEnviar.id)===true){
                this.editCarritoItemCant(productoEnviar.id, productoEnviar.cantidad);
                this.editCarritoItemTotal(productoEnviar.id, productoEnviar.precioTotal);
                this.editCarritoItemCom(productoEnviar.id, productoEnviar.comentario);
            }else {
                this.addToCarrito(productoEnviar)
            }
            
            this.$router.push('/productos');
            
            
        },

    },
    computed: {
        precioTotal() {
            return this.producto.precio * this.cantidad; // Calcula el precio total
        }
    }
}
  ///


</script>

<style></style>