import { NgModule } from "@angular/core";
import { CounterComponent } from './components/contador.component';

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent,

    ]
})
export class CounterModule{}