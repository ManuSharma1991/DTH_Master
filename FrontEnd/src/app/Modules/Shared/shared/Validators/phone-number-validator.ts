import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[6-9]\d{9}$/.test(control.value);
    return valid ? null : { invalidPhoneNumber: { valid: false, value: control.value } };
}
