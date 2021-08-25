import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from '../icons/icons.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { MenuTableRowComponent } from './menu-table-row/menu-table-row.component';

import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SelectComponent } from './select/select.component';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        ButtonComponent,
        SideNavigationComponent,
        ButtonSaveComponent,
        ButtonCloseComponent,
        MenuTableRowComponent,
        InputComponent,
        RadioComponent,
        SelectFilterComponent,
        CheckboxComponent,
        SelectComponent
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        IconsModule, 
        MatIconModule, 
        MatMenuModule, 
        MatInputModule, 
        MatSelectModule,
        OverlayModule
    ],
    exports: [
        BreadcrumbComponent,
        ButtonComponent,
        SideNavigationComponent,
        ButtonSaveComponent,
        ButtonCloseComponent,
        MenuTableRowComponent,
        InputComponent,
        RadioComponent,
        SelectFilterComponent,
        CheckboxComponent,
        SelectComponent
    ],
})

export class HtmlElementsModule { }
