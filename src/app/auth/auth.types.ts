export interface LoginRequest {
    email: string;
    password: string;
}

export interface JwtPayLoadFriendly {
    name: string;
    id: string;
    role: string;
    exp: number;
    iss: string;
    aud: string;
}

export interface JwtPayLoadRaw {
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string,
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string,
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string,
    'exp': number,
    'iss': string,
    'aud': string
}