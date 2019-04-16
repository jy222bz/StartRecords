import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../shared/services/authentication.service";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private authenticationService: AuthenticationService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<SignupComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'email': ['test@gmail.com', [Validators.required, Validators.email]],
            'password': ['123456789', [Validators.required, Validators.minLength(4)]],
        });
    }

    ngOnInit() {

    }

    signup() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.authenticationService.signup(this.form.value.email, this.form.value.password);

        return false;
    }

    close() {
        this.dialog.close();
    }
}
