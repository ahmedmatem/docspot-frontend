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
  weekStartDate: Date | undefined;
  month: string | unknown;
  year: number | unknown;

  constructor(private calendarService: CalendarService) {
    this.weekDates = this.calendarService.getWeek();

    this.weekStartDate = this.weekDates[0];

    this.setWeekInfo(this.weekStartDate);

    console.log(this.weekDates[0].getMonth());
  }

  nextWeek() {
    this.weekStartDate?.setDate(this.weekStartDate?.getDate() + 7);
    this.setWeekInfo(this.weekStartDate!);
    this.weekDates = this.calendarService.getWeek(this.weekStartDate);
  }

  prevWeek() {
    this.weekStartDate?.setDate(this.weekStartDate?.getDate() - 7);
    this.setWeekInfo(this.weekStartDate!);
    this.weekDates = this.calendarService.getWeek(this.weekStartDate);
  }

  // Set week month and full year for a given date
  private setWeekInfo(date: Date) {
    this.year = this.calendarService.getFullYearFrom(date);
    const monthIndex: number = date.getMonth();
    this.month = this.calendarService.getMonthNameBy(monthIndex);
  }

}
