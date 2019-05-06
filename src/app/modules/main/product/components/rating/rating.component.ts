import {Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'rating-app',
    templateUrl: './rating.html',
    styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
    f = new FormGroup({
        rateInput: new FormControl('')
    });

    rate = 0;

    constructor(private fb: FormBuilder) {
        setTimeout(() => {
            this.rate = 2.7;
        }, 5000);
    }

    onSubmit() {
        console.log('Submitted value:', this.f.value);
    }
}
