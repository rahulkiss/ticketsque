export interface AuthResponse {
    errors: boolean;
    status: boolean;
    payload: {
        auth_type:number,
        user:string,
        role:string,
        email:string,
    };
    message: string;
}

export interface ErrorData {
    code: string;
    description: string;
}