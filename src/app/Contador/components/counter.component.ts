import { Component } from "@angular/core";

@Component({
    selector: 'contador',
    template: `
    <h3>{{contador}}</h3>
    <button (click)="incrementar(+1)">Incremento</button>
    <button (click)="reiniciar()">Reinicio</button>
    <button (click)="incrementar(-1)">Decremento</button>
    `
})
export class CounterComponent {
    contador = 0;

    incrementar(numero: number){
        this.contador += numero;
    }

    reiniciar(){
        this.contador = 0;
    }
 }