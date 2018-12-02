import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl): { [key: string]: any } | null {
    // tslint:disable-next-line:max-line-length
    const valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
    return valid ? null : { invalidEmailID: { valid: false, value: control.value } };
}
