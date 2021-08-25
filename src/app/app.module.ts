import { LOCALE_ID, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';

registerLocaleData(localeRu, 'ru');

@NgModule({
    imports:      [ BrowserModule, FormsModule, MatMomentDateModule, MatDatepickerModule, MomentDateModule, PagesModule, BrowserAnimationsModule ],
    declarations: [ AppComponent ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru' },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
              parse: {
                dateInput: ['DD.MM.YYYY'],
              },
              display: {
                dateInput: 'D MMM',
                monthLabel: "",
                monthYearLabel: 'MMMM, YYYY',
                dateA11yLabel: 'LL',
                monthYearA11yLabel: 'MMMM YYYY'
              },
            },
          },
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
