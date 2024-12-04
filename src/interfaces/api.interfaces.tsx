export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface ErrorData {
    code: string;
    description: string;
}