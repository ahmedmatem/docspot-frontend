import { jwtDecode } from "jwt-decode";
import { JwtPayLoadFriendly, JwtPayLoadRaw } from "./auth.types";

export function getDecodedToken(): JwtPayLoadFriendly | null {
    const token = localStorage.getItem('token');
    if(!token) return null;

    try{
        const decoded = jwtDecode<JwtPayLoadRaw>(token);

        const friendly: JwtPayLoadFriendly = {
            name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            id: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
            exp: decoded.exp,
            iss: decoded.iss,
            aud: decoded.aud,
        };

        return friendly;
    } catch(e){
        console.error('Invalid token:', e);
        return null;
    }
}