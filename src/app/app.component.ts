import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dadoIzquierdo='../assets/img/d1.png';
  dadoDerecho='../assets/img/d4.png';
  numero1: number=0;
  numero2: number=0;
  
  tirarDados(): void{
    this.numero1=Math.round(Math.random()*5)+1;
    this.numero2=Math.round(Math.random()*5)+1;
    this.dadoIzquierdo='../assets/img/d'+this.numero1+'.png';
    this.dadoDerecho='../assets/img/d'+this.numero2+'.png';
  }
}
