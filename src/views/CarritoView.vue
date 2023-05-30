<template>
  <ion-page>
    <ion-page>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Carrito de Compras</ion-card-title>
          <ion-card-subtitle
            >Listo para saborear y comprar. ¡Finalizá tu compra ahora!</ion-card-subtitle
          >
        </ion-card-header>
        <ion-card-content>
          <ion-list v-for="(producto, index) in carrito" :key="producto.id">
            <ion-item>
              <ion-thumbnail>
                <ion-img :src="producto.imagen">Producto</ion-img>
              </ion-thumbnail>
              <ion-label
                >{{ producto.nombre }} - Precio: {{ producto.precio }} -
                <ion-button @click="editarProducto(index)">Editar</ion-button>
                <ion-button @click="eliminarProducto(index)"
                  >Eliminar</ion-button
                ></ion-label
              >
            </ion-item>
          </ion-list>
          <p>Total de productos: {{ totalProductos }}</p>
          <p>Sumatoria de productos: {{ sumatoria }}</p>
          <p>Monto total de la compra: {{ montoTotal }}</p>
        </ion-card-content>

        <ion-button @click="efectuarCompra">Efectuar Compra</ion-button>
      </ion-card>
    </ion-page>
  </ion-page>
</template>

<script>
// Esta view tendria: Mostraria un listado de productos seleccionados (Estarian en la lista "carrito")
// Al agregar un producto al carrito se debe agregar una copia del producto y no una referencia directa (para evitar que se modifique el producto de la "base de datos")
// Permitiria ir hacia la vista de eliminacion o modificacion para cambiar algo de el producto seleccionado
// Al modificar o eliminar el producto tiene q enviar el array completo junto con el id para no perder los datos.
// Permitiria efectuar la compra, una vez efectuada la compra registrar la fecha del momento para enviarlo al registro
// (No enviaria a otra vista sino que mostraria en pantalla un mensaje del estilo "Su comida esta en camino")
// El listado tiene que tener las cantadidades de productos, su sumatoria y un monto total de la compra.
// Se deberia guardar un registro de la compra efectuada para mas adelante generar un registro gerencial. (Que se guarde en un array de la vista "ReportelView")
import { IonPage, IonButton, IonContent } from "@ionic/vue";

export default {
  components: { IonPage, IonButton, IonContent },
  data() {
    return {
      carrito: [
        {
          id: 1,
          nombre: "Hamburguesa Premiun",
          precio: 3100,
          cantidad: 5,
          imagen: "./src/assets/images/HAMBURGUESA.PNG",
        },
        {
          id: 2,
          nombre: "Pollo al Spiedo",
          precio: 4500,
          cantidad: 1,
          imagen: "./src/assets/images/Pollo al Spiedo.JPG",
        },
        {
          id: 3,
          nombre: "Pizza Napolitana",
          precio: 2200,
          cantidad: 9,
          imagen: "./src/assets/images/Pizza.PNG",
        },
      ], // Array para almacenar los productos seleccionados
      totalProductos: 0,
      sumatoria: 0,
      montoTotal: 0,
      compraRealizada: false,
      productoAEliminar: 0,
    };
  },
  methods: {
    eliminarProducto(index) {
      //this.productoAEliminar = this.carrito[index];
      // Crea una copia profunda del array carrito
      const carritoCopia = JSON.parse(JSON.stringify(this.carrito));
      const encodedCarrito = encodeURIComponent(JSON.stringify(carritoCopia));
      this.$router.push({
        path: "/eliminacion",
        query: {
          objects: encodedCarrito,
          idDelete: this.carrito[index].id,
        },
      });
    },
    editarProducto(index) {
      // Lógica para ir a la vista de edición del producto seleccionado
      const productoAModificar = this.carrito[index];
      //Al presionar eliminar me lleva a la vista de ModificacionView. Y ademas le envío el listado de productos y el id del prducto a modificar.
    },
    efectuarCompra() {
      // Lógica para efectuar la compra y registrar la fecha del momento
      const fechaActual = new Date();
      const fechaCompra = fechaActual.toLocaleString();
      if (this.totalProductos > 0) {
        alert(
          "Su comida está en camino. Fecha y hora de Compra: " + fechaCompra
        );
      } else {
        alert("Usted no seleccionó ningun producto.");
      }

      // Falta registrarlo en el reporte "ReporteView"
    },
  },
  computed: {
    montoTotal() {
      let total = 0;
      for (let producto of this.carrito) {
        total += producto.precio * producto.cantidad;
      }
      return total;
    },
    sumatoria() {
      return this.carrito.reduce(
        (acumulador, producto) => acumulador + producto.cantidad,
        0
      );
    },
    totalProductos() {
      return this.carrito.length;
    },
  },
  created() {
    const encodedCarrito2 = this.$route.query.borrado;
    if (encodedCarrito2 != undefined) {
      const borrado = JSON.parse(decodeURIComponent(encodedCarrito2));
      if (borrado === true) {
        const encodedCarrito3 = this.$route.query.objects2;
        this.carrito = JSON.parse(decodeURIComponent(encodedCarrito3));
      }
    }
  },
};
</script>

<style>
</style>