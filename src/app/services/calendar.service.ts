import { Inject, Injectable } from '@angular/core';
import { CALENDAR_VIEW_MODE_TOKEN, MONTH_NAMES } from '../constants';
import { CalendarViewMode } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly DAYS_IN_WEEK = 7;

  weekStartDate: Date = new Date();
  monthStartDate: Date = new Date();

  constructor() { }

  getWeek(date = new Date()): Date[] {
    const start = this.getStartOfWeek(date);
    this.weekStartDate = start;
    return this.generateDays(start, this.DAYS_IN_WEEK);
  }

  getMonthNameBy(index: number): string {
    return MONTH_NAMES[index] ?? 'Unknown';
  }

  getFullYearFrom(date: Date): number {
    return date.getFullYear();
  }

  getShortYearFrom(date: Date): number {
    return date.getFullYear() % 100; // e.g. 2025 --> 25
  }

  // --- Helpers ---

  private getStartOfWeek(date: Date): Date {
    let day = date.getDay(); // 0 (Sun) to 6 (Sat)
    if(day == 0) { // Set Sun to 7
      day = this.DAYS_IN_WEEK; 
    }
    const start = new Date(date);
    console.log(`Start date: ${start.getDate()} and day: ${day}`);
    start.setDate(date.getDate() - (day - 1)); // Move to Monday
    start.setHours(0, 0, 0, 0);
    return start;
  }

  private  generateDays(startDate: Date, count: number): Date[] {
    return Array.from({length: count}, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  }
}
