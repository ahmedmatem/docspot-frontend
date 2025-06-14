import { Component } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { MonthInfo } from '../models/month-info.model';

@Component({
  selector: 'app-month',
  imports: [],
  templateUrl: './month.component.html',
  styleUrl: './month.component.css'
})
export class MonthComponent {
  monthDays: Date[] | undefined;  
  monthStartDate: Date | undefined;

  monthInfo: MonthInfo | undefined;
  today: Date = new Date();

  constructor(private calendarService: CalendarService) {
    this.monthDays = this.calendarService.getMonth();

    this.monthStartDate = new Date(this.monthDays[8].getFullYear(), this.monthDays[8].getMonth(), 1);
    this.monthInfo = this.calendarService.getMonthInfo(this.monthStartDate);
  }

  nextMonth(){
    this.monthStartDate = new Date(this.monthStartDate!.getFullYear(), this.monthStartDate!.getMonth() + 1, 1);
    this.monthDays = this.calendarService.getMonth(this.monthStartDate);
    this.monthInfo = this.calendarService.getMonthInfo(this.monthStartDate);
  }

  prevMonth(){
    this.monthStartDate = new Date(this.monthStartDate!.getFullYear(), this.monthStartDate!.getMonth() - 1, 1);
    this.monthDays = this.calendarService.getMonth(this.monthStartDate);
    this.monthInfo = this.calendarService.getMonthInfo(this.monthStartDate);
  }

  getWeeks(): Date[][] {
    const weeks: Date[][] = [];
    for (let i = 0; i < (this.monthDays?.length || 0); i += 7) {
      weeks.push(this.monthDays?.slice(i, i + 7)!);
    }
    return weeks;
  }

}
