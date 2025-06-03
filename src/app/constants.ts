import { InjectionToken } from "@angular/core";

const BASE_URL = 'https://localhost:7168/api';

// export const API_AUTH = {
//     LOGIN: `${BASE_URL}/auth/login`
// };

// export const API_ADMIN = {
//     REGISTER_DOCTOR: `${BASE_URL}/admin/register-doctor`,
// };

// export const LOCAL_STORAGE_KEYS = {
//     AUTH_USER: 'authUser'
// };

// export const ROLES = {
//     ADMIN: 'Admin',
//     DOCTOR: 'Doctor'
// };

export const AppConstants = {
    ROLES: {
        ADMIN: 'Admin',
        DOCTOR: 'Doctor'
    },
    API_ENDPOINTS: {
        AUTH: {
            LOGIN: `${BASE_URL}/auth/login`,
        },
        ADMIN: {
            REGISTER_DOCTOR: `${BASE_URL}/admin/register-doctor`,
        }
    },
    LOCAL_STORAGE_KEYS: {
        AUTH_USER: 'authUser',
    }
};

export const CalendarViewMode = { 'WEEK': 'week', 'MONTH': 'month'};
export const CALENDAR_VIEW_MODE_TOKEN = new InjectionToken<string>(CalendarViewMode.WEEK);

export const MONTH_NAMES: readonly string[] = [
    'Януари',
    'Февруари',
    'Март',
    'Април',
    'Май',
    'Юни',
    'Юли',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември'
];