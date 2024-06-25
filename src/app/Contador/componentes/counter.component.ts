import { Component } from "@angular/core";

@Component({
    selector:'contador',
    template:`
    <h3>{{contador}}</h3>
    <button (click)="incrementar(+1)">Incremento</button>
    <button (click)="reiniciar(0)">Reinicio</button>
    <button (click)="decrementar(1)">Decremento</button>
    `
})

export class CounterComponent {
    contador = 0;
    //^ Funcion Incrementar
    incrementar(numero: number){
        this.contador += numero;
        
        }
    //^ Funcion Decrementar
    decrementar(numero:number){
        this.contador -= numero;
        }
    //^ Funcion Reinicio
    reiniciar(numero:number){
        this.contador = 0;
    }
}