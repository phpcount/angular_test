import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlusComponent } from './plus/plus.component';
import { PlanningComponent } from './planning/planning.component';
import { SettingsFilterComponent } from './settings-filter/settings-filter.component';
import { CrossComponent } from './cross/cross.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { ArrowUpComponent } from './arrow-up/arrow-up.component';
import { SearchComponent } from './search/search.component';
import { PencilComponent } from './pencil/pencil.component';
import { TrashCanComponent } from './trash-can/trash-can.component';
import { ProgressComponent } from './progress/progress.component';
import { DotsComponent } from './dots/dots.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component';
import { TickComponent } from './tick/tick.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DragMemberComponent } from './drag-member/drag-member.component';
import { DashComponent } from './dash/dash.component';
import { IconDirective } from './icon.directive';

@NgModule({
    declarations: [SidebarComponent, PlusComponent, PlanningComponent, SettingsFilterComponent, CrossComponent, ArrowDownComponent, ArrowUpComponent, SearchComponent, PencilComponent, TrashCanComponent, ProgressComponent, DotsComponent, CalendarComponent, ClockComponent, TickComponent, AvatarComponent, DragMemberComponent, DashComponent, IconDirective],
    imports: [CommonModule],
    exports: [SidebarComponent, PlusComponent, PlanningComponent, SettingsFilterComponent, CrossComponent, ArrowDownComponent, ArrowUpComponent, SearchComponent, PencilComponent, TrashCanComponent, ProgressComponent, DotsComponent, CalendarComponent, ClockComponent, TickComponent, AvatarComponent, DragMemberComponent, DashComponent, IconDirective],
})

export class IconsModule { }
