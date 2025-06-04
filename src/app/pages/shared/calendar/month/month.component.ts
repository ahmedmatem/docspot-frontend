import { Component } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
  selector: 'app-month',
  imports: [],
  templateUrl: './month.component.html',
  styleUrl: './month.component.css'
})
export class MonthComponent {
  monthDays: Date[] | undefined;

  constructor(private calendarService: CalendarService) {}



}
