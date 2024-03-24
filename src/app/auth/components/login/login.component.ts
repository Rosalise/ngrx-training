import { Component } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { authActions } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
import { combineLatest } from "rxjs";
import { BackendErrorMessages } from "../../../shared/components/backendErrorMessages/backendErrorMessages.component";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

@Component({
    selector: 'ngpr-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages],
})

export class LoginComponent {
    form = this.fb.nonNullable.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    })

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors),
    })

    constructor(private fb: FormBuilder, private store: Store) {}
onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: LoginRequestInterface = {
        user: this.form.getRawValue(),
    }

    this.store.dispatch(authActions.login({request}))
}

} 