import { Component } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
  selector: 'app-week',
  imports: [],
  templateUrl: './week.component.html',
  styleUrl: './week.component.css'
})
export class WeekComponent {
  weekDates: Date[] | undefined;
  month: string | unknown;
  year: number | unknown;

  constructor(private calendarService: CalendarService) {
    this.weekDates = this.calendarService.getWeek();

    const weekStartDate = this.weekDates[0];

    this.year = this.calendarService.getFullYearFrom(weekStartDate);

    const monthIndex: number = weekStartDate.getMonth();
    this.month = this.calendarService.getMonthNameBy(monthIndex);

    console.log(this.weekDates[0].getMonth());
  }

}
