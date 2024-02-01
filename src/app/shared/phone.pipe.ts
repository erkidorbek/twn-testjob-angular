import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(value: string): string {
        if (value && value.length >= 5) {
            return value.slice(0, 4) + ' ' + value.slice(4);
        }
        return value;
    }
}
