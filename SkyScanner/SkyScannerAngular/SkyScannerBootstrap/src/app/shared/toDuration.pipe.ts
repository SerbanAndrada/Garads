import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ToDurationPipe'
})

export class ToDurationPipe implements PipeTransform {
    transform(value: number): string {
        const duration = Math.round(value / 60) + 'h : ' + value % 60 + 'm';
        return duration;
    }
}
