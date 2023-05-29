<template>
  <ion-page>
    <ion-content>
      <h2>Carrito de Compras</h2>
      <ul>
        <li v-for="(producto, index) in carrito" :key="producto.id">
          {{ producto.nombre }} - Cantidad: {{ producto.cantidad }} - Precio: {{ producto.precio }}
          <ion-button @click="editarProducto(index)">Editar</ion-button>
          <ion-button @click="eliminarProducto(index)">Eliminar</ion-button>
        </li>
      </ul>
      <p>Total de productos: {{ totalProductos }}</p>
      <p>Sumatoria de productos: {{ sumatoria }}</p>
      <p>Monto total de la compra: {{ montoTotal }}</p>
      <ion-button @click="efectuarCompra">Efectuar Compra</ion-button>
    </ion-content>
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
      carrito: [{id:1, nombre:'Producto 1', cantidad:3, precio: 500}, {id:2, nombre:'Producto 2', cantidad:4, precio: 700}, {id:3, nombre:'Producto 3', cantidad:2, precio: 600} ], // Array para almacenar los productos seleccionados
      totalProductos: 0,
      sumatoria: 0,
      montoTotal: 0,
      compraRealizada: false,
    };
  },
  methods: {
    eliminarProducto(index) {
      const productoAEliminar = this.carrito[index];
      const carritoJSON = JSON.stringify(this.carrito);
      //Al presionar eliminar me lleva a la vista de EliminacionView. Y ademas le envío el listado de productos y el id del prducto a eliminar.
      this.$router.push({
        name: "EliminacionView",
        params: {
          carrito: carritoJSON,
          productoId: productoAEliminar.id,
        },
      });
    },
    editarProducto(index) {
      // Lógica para ir a la vista de edición del producto seleccionado
      const productoAModificar = this.carrito[index];
      //Al presionar eliminar me lleva a la vista de ModificacionView. Y ademas le envío el listado de productos y el id del prducto a modificar.
      this.$router.push({
        name: "ModificacionView",
        params: {
          carrito: this.carrito,
          productoId: productoAModificar.id,
        },
      });
    },
    efectuarCompra() {
      // Lógica para efectuar la compra y registrar la fecha del momento
      const fechaActual = new Date();
      const fechaCompra = fechaActual.toLocaleString();
      alert("Su comida está en camino. Fecha y hora de Compra: " + fechaCompra);
      // Falta registrarlo en el reporte "ReporteView"
    }
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
        return this.carrito.reduce((acumulador, producto) => acumulador + producto.cantidad,0);
    },
    totalProductos(){
        return this.carrito.length;
    }
  },
};
</script>

<style>
</style>