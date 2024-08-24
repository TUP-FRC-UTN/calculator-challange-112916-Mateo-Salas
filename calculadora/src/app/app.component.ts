import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValorHijoComponent } from "./valor-hijo/valor-hijo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValorHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  operaciones : string[] = ["+", "-", "x","%","^","CE"];

  valor1: number = 0;  
  valor2: number = 0;   

  @Input() resultado: number = 0;

  onValor1Change(event: any) {     this.valor1 = event.target.value;   } 
  onValor2Change(event: any) {     this.valor2 = event.target.value;   } 

}
