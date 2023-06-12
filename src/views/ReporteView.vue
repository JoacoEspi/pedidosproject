<template>
  <ion-page>
    <ion-content>
        <ion-subtitle>Historico de Compras</ion-subtitle>
        <div class="ion-text-end">
          <!-- Se genera Boton que cumpla la condicion de Descargar el listado en un archivo PDF: Desarrollado en Methods-->
        <ion-button size="small" fill="outline" @click="downloadAsPDF">Descargar como PDF</ion-button>
        </div>

        <ion-list>
          <ion-item v-for="compra in Compras" :key="compra.id">
            <ion-label text-wrap="nowrap">
              Codigo de Compra: {{ compra.id }} - Cliente:
              {{ compra.cliente }} - Fecha: {{ compra.fecha }} - Monto: ${{ compra.monto }}
            </ion-label>
          </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonButton
} from "@ionic/vue";
import reporteServices from "../service/reporteService.js";
import html2pdf from "html2pdf.js";

export default {
  components: {
    IonPage,
    IonContent,
    IonList,
    IonLabel,
    IonItem,
    IonButton
  },
  data() {
    return {
      Compras: [],
    };
  },
  async mounted() {
    //Ejecuta la carga correspondiente mediante la solicitud HTTP Get al Servicio "reporteService" + su listado.
    this.Compras = await reporteServices.cargar();
    console.log(this.Compras);
  },
  methods: {
    downloadAsPDF() {
      /* Aca se selecciona el elemento HTML con el nombre de etiqueta IonLable con el metodo querySelector
      hace referencia al elemento actual al que se llama en la funcion */
      const element = this.$el.querySelector("ion-label"); 
      /* Esta linea utiliza biblioteca html2pdf para generar un pdfdel elemento seleccionado en la linea anterior
      generanod y guardandolo con el nombre compras.pdf */
      html2pdf().from(element).save("compras.pdf"); // Crea el PDF y lo descarga con el nombre 'lista.pdf'
    },
  },
};
</script>

<style>
 .ion-text-end {
  text-align: right;
  margin-right: 20px;
}
.scroll-horizontal {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
