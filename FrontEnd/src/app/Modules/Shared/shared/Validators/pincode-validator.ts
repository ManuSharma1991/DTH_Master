import { AbstractControl } from '@angular/forms';

export function pincodeValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[1-9][0-9]{5}$/.test(control.value);
    return valid ? null : { invalidPincode: { valid: false, value: control.value } };
}
