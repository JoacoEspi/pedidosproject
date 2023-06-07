<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/productos"></ion-back-button>
                </ion-buttons>
                <ion-title>Detalle del Producto</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{this.producto.nombre }}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <ion-img :src="'.'+this.producto.imagen"></ion-img>
                        </ion-thumbnail>
                        <ion-label>Cantidad:</ion-label>
                        <ion-input label="Cantidad" type="number" v-model="cantidad" min="1" max="20"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Comentarios:</ion-label>
                        <ion-textarea label="Deja tus comentarios" v-model="comentario"></ion-textarea>
                    </ion-item>
                    <p>Precio total: {{ precioTotal }}</p>
                </ion-card-content>
            </ion-card>

            <ion-button expand="block" @click="agregarAlCarrito()">Agregar al carrito</ion-button>
            <ion-button expand="block" @click="irACarrito()">Ver Carrito</ion-button>
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
    const { editCarritoItem, existeEnCarrito, addToCarrito} = store;
    return { addToCarrito, editCarritoItem, existeEnCarrito };
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
                this.editCarritoItem(productoEnviar.id, productoEnviar.cantidad)
            }else {
                this.addToCarrito(productoEnviar)
            }
            
            this.$router.push('/productos');
            
            
        },
        irACarrito(){
            //volver al carrito
            this.$router.push('/carrito');
        }
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