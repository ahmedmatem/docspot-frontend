import { Inject, Injectable } from '@angular/core';
import { CALENDAR_VIEW_MODE_TOKEN, MONTH_NAMES } from '../constants';
import { CalendarViewMode } from '../constants';
import { MonthInfo } from '../pages/shared/calendar/models/month-info.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly DAYS_IN_WEEK = 7;

  weekStartDate: Date = new Date();
  monthStartDate: Date = new Date();

  constructor() { }

  getWeek(date: Date = new Date()): Date[] {
    const start = this.getStartOfWeek(date);
    this.weekStartDate = start;
    return this.generateDays(start, this.DAYS_IN_WEEK);
  }

  getMonth(date: Date = new Date()): Date[]{
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    this.monthStartDate = new Date(firstDayOfMonth);

    // Step 1: Find Monday before or on the first of the month
    const startDay = new Date(firstDayOfMonth);
    const dayOfWeek = startDay.getDay() === 0 ? 7 : startDay.getDay(); // Sunday (0) → 7
    startDay.setDate(startDay.getDate() - (dayOfWeek - 1));

    // Step 2: Generate 6 weeks = 42 days
    const monthGridDays = this.generateDays(startDay, 6 * this.DAYS_IN_WEEK); // 42 days
    if(monthGridDays[0].getDate() == 1){ // remove last 7 days of month grid days
      monthGridDays.splice(monthGridDays.length - 7);
    }
    if(monthGridDays[monthGridDays.length - 7].getMonth() != date.getMonth()){ // remove last 7 days of month grid days
      monthGridDays.splice(monthGridDays.length - 7);
    }

    return monthGridDays;
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

  getMonthInfo(date: Date = new Date()): MonthInfo {
    const year = this.getFullYearFrom(date);
    const monthIndex = date.getMonth();
    const month = this.getMonthNameBy(monthIndex);
    const label = month + "'" + year;
    const shortLabel = month + "'" + year % 100;
    return { month, monthIndex, year, label, shortLabel };
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
