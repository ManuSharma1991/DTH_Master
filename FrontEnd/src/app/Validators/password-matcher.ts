import { AbstractControl } from '@angular/forms';

export function passwordMatcher(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    if (!password || !confirmpassword) { return null; }
    return password.value === confirmpassword.value ? null : { mismatchedPasswords: true };
}
