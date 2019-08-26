import {Validators, AbstractControl, FormControl} from '@angular/forms';

export const loginFormModule = {
    email: [null, [Validators.required]],
    password: [null,[Validators.required]]
}

export const addBlogForm ={
    title : [null, [Validators.required]],
    author : [null, [Validators.required]],
    body: [null, [Validators.required]],
    hidden : [false, [Validators.required]]
}