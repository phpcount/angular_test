import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { HtmlElementsModule } from '../htmlElements/html-elements.module';

import { PagesRoutingModule } from './pages-routing.module';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { AddPlanModalComponent } from './add-plan-modal/add-plan-modal.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { dateFormatPipe } from '../pipes/date-format.pipe';
import { MatMenuModule } from '@angular/material/menu';

import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
    declarations: [ dateFormatPipe, BaseComponent, HomeComponent, PlanningComponent, AddPlanModalComponent ],
    imports: [ CommonModule, FormsModule, MatTabsModule, MatInputModule, MatTableModule, MatSortModule, MatMenuModule, IconsModule, HtmlElementsModule, PagesRoutingModule, MatDatepickerModule ],
    exports: [ BaseComponent, HomeComponent, PlanningComponent, AddPlanModalComponent ]
})
export class PagesModule { }
