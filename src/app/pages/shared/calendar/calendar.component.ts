import { Component, input } from '@angular/core';
import { CalendarViewMode } from '../../../constants';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';

@Component({
  selector: 'app-calendar',
  imports: [WeekComponent, MonthComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  viewMode = CalendarViewMode;
  readonly selectedViewMmode = input<string>(CalendarViewMode.WEEK);

}
