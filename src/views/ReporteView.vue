// Esta view debe mostrar: Un array de Compras (Listado de productos), con su
monto y cliente asociado. // Debe ser visible solo para el gerente/admin. (Se
deben crear usuarios con diferentes permisos) // Que tenga la opcion de
descargar el reporte como un JSON (algo asi)

<template>
  <ion-page>
    <ion-content>
      <ion-card-header>
        <ion-card-title>Modulo de Analitica</ion-card-title>
        <ion-card-subtitle>Historico de Compras</ion-card-subtitle>

        <ion-list>
          <button @click="downloadAsPDF">Descargar como PDF</button>
          <ion-item v-for="compra in Compras" :key="compra.id">
            <ion-label>
              Codigo de Compra: {{ compra.id }} - Cliente:
              {{ compra.cliente }} - Fecha: {{ compra.fecha }} - Monto:
              {{ compra.monto }}
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card-header>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonLabel,
  IonItem,
} from "@ionic/vue";
import reporteServices from "../service/reporteService.js";
import html2pdf from "html2pdf.js";

export default {
  components: {
    IonPage,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonLabel,
    IonItem,
  },
  data() {
    return {
      Compras: [],
    };
  },
  async mounted() {
    this.Compras = await reporteServices.cargar();
    console.log(this.Compras);
  },
  methods: {
    downloadAsPDF() {
      const element = this.$el.querySelector("ion-label"); // Selecciona el elemento ion-list
      html2pdf().from(element).save("compras.pdf"); // Crea el PDF y lo descarga con el nombre 'lista.pdf'
    },
  },
};
</script>

<style></style>
