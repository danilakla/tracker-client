export class TokenManager {
    static getToken(){
        return "Bearer "+localStorage.getItem('access_token');
    }
}