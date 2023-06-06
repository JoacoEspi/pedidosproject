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
                    <ion-card-title>{{ producto.nombre }}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <ion-img :src="producto.imagen"></ion-img>
                        </ion-thumbnail>
                        <ion-label>Cantidad:</ion-label>
                        <ion-input type="number" v-model="cantidad" min="1" max="10"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Comentarios:</ion-label>
                        <ion-textarea v-model="comentarios" placeholder="Deja tus comentarios"></ion-textarea>
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
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
} from '@ionic/vue';
import productoService from '../service/productoService';



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
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
    },
    data() {
        return {
            // producto: {}, // Objeto del producto seleccionado
            // cantidad: 1, // Cantidad seleccionada por el usuario (por defecto, 1)
            // comentarios: '' // Comentarios ingresados por el usuario
            producto: {},
        };
    },
    async mounted(){
        // this.producto = JSON.parse(this.$route.params.producto);
        this.producto = await productoService.cargarPorId(this.$route.params.id);
        // console.log();
    },
    methods: {
        agregarAlCarrito() {
            // aca se debe hacer un push al carrito del store
            //luego, volver a productos
            
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