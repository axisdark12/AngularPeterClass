import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './form-basic.component.html'
})
export class FormBasicComponent {
    public Formulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        precio: [0, [Validators.required, Validators.min(0)]],
        existencia: [0, [Validators.required, Validators.min(0)]]
    });
    constructor(private fb: FormBuilder) { }

    isValid(field: string): boolean | null {
        return this.Formulario.controls[field].errors && this.Formulario.controls[field].touched;
    }

    getFieldError(field: string): string | null {
        if (!this.Formulario.controls[field]) return null;

        const errors = this.Formulario.controls[field].errors || {};
        Object.keys(errors).forEach(key => {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';
                case 'minlength':
                    return `Mínimo ${errors['minlength'].requiredLength} caracteres.`
                default:
                    return null;
            }
        });
        return null;
    }

    Guardar() {
        console.log(this.Formulario.value);
    }
}