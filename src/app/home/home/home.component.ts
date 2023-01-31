import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo = "Data Binding Interpolation";
  textoboton = "Ocultar";
  estadoDiv = true
  parrafo!:string;
  textoEnviar!:string;
  
  cambiarboton(){
    if (this.estadoDiv) {
      this.textoboton = "Mostrar";
      this.estadoDiv = false;
    } else {
      this.textoboton = "Ocultar";
      this.estadoDiv = true;
    }
  }
}
