const BASE_URL = 'https://localhost:7168/api';

export const API_AUTH = {
    LOGIN: `${BASE_URL}/auth/login`
};

export const API_ADMIN = {
    REGISTER_DOCTOR: `${BASE_URL}/admin/register-doctor`,
};

export const LOCAL_STORAGE_KEYS = {
    AUTH_USER: 'authUser'
};

export const ROLES = {
    ADMIN: 'Admin',
    DOCTOR: 'Doctor'
}