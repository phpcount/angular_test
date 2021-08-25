import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})

export class dateFormatPipe implements PipeTransform {
    transform(value: string): string {
        let datePipe = new DatePipe("ru-RU"),
            month: string = datePipe.transform(value, 'MMM'),
            endSlice = -1;

        if (month.length > 4) {
            endSlice = -2;
        }
        month = month.slice(0, endSlice);
        value = datePipe.transform(value, `d ${month}, H:mm`);

        return value;
    }
}
