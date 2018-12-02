import { AbstractControl } from '@angular/forms';

export function shiftTimeValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[0-9]$/.test(control.value) || /^[1][0-2]$/.test(control.value);
    return valid ? null : { invalidShiftTime: { valid: false, value: control.value } };
}
