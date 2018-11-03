import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(control.value);
    return valid ? null : { invalidPassword: { valid: false, value: control.value } };
}
