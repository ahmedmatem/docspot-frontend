import { Component } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { MonthInfo } from '../models/month-info.model';

@Component({
  selector: 'app-week',
  imports: [],
  templateUrl: './week.component.html',
  styleUrl: './week.component.css'
})
export class WeekComponent {
  weekDates: Date[] | undefined;
  weekStartDate: Date | undefined;
  
  monthInfo: MonthInfo | undefined;

  constructor(private calendarService: CalendarService) {
    this.weekDates = this.calendarService.getWeek();

    this.weekStartDate = this.weekDates[0];

    this.monthInfo = this.calendarService.getMonthInfo(this.weekStartDate);

    console.log(this.calendarService.getMonth());
  }

  nextWeek() {
    this.weekStartDate?.setDate(this.weekStartDate?.getDate() + 7);
    this.monthInfo = this.calendarService.getMonthInfo(this.weekStartDate);
    this.weekDates = this.calendarService.getWeek(this.weekStartDate);
  }

  prevWeek() {
    this.weekStartDate?.setDate(this.weekStartDate?.getDate() - 7);
    this.monthInfo = this.calendarService.getMonthInfo(this.weekStartDate);
    this.weekDates = this.calendarService.getWeek(this.weekStartDate);
  }

}
