import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valor-hijo',
  standalone: true,
  imports: [],
  templateUrl: './valor-hijo.component.html',
  styleUrl: './valor-hijo.component.css'
})
export class ValorHijoComponent {

  @Input() valor1:number = 0;
  @Input() valor2:number  = 0;
  @Input() operacion: string = 'suma';
  @Output()resultado:number = 0;

  Operacion(){
    switch (this.operacion) {
      case "+": this.resultado = this.valor1 + this.valor2; break;

      case "-": this.resultado = this.valor1 - this.valor2; break;

      case "x": this.resultado = this.valor1 * this.valor2; break;

      case "%": this.resultado = this.valor1 / this.valor2; break;

      case"^": this.resultado = this.valor1 ^ this.valor2; break;

      case "CE":this.resultado = 0; break;
      default: this.resultado = 0; break;
    } 


  }
  
}
