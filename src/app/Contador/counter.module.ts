import { NgModule } from "@angular/core";
import { CounterComponent } from "./componentes/counter.component";

@NgModule({
    declarations: [
        CounterComponent,
    ],
    exports:[
        CounterComponent
    ]

})

export class CounterModule{

}