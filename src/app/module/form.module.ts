import {Validators, AbstractControl, FormControl} from '@angular/forms';

export const loginFormModule = {
    email: [null, [Validators.required]],
    password: [null,[Validators.required]]
}