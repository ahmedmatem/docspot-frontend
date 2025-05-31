import { Component } from '@angular/core';
import { CalendarComponent } from "../../shared/calendar/calendar.component";
import { CalendarViewMode } from '../../../constants';

@Component({
  selector: 'app-schedule',
  imports: [CalendarComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  viewMode: string = CalendarViewMode.WEEK;

  setViewMode(mode: string) {
    this.viewMode = mode;
  }
}
