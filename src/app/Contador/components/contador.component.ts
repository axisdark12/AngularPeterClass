import { Component } from "@angular/core";
@Component({
    selector: 'contador',
    template: `
    <h3>{{conta}}</h3>
    <button (click)="incrementar(1)">incremento</button>
    <button (click)="reiniciar">reiniciar</button>
    <button (click)="decrementar(1)">decrementar</button>
    
    `

})

export class CounterComponent{
    conta =0;
    incrementar(numero:number){
        this.conta=+numero;
    }
    reiniciar(){
        this.conta=0;
    }
    decrementar(numero:number){
        this.conta=numero;
    }
}