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

export class EventsData {
    _id:string;
    images:ImageData[];
    description
    user: string;
    vendor: string;
    address: string;
    cancel_allowed: boolean;
    terms_and_conditions: string;
    capacity: number;
    capacity_type: string;
    event_start: string;
    event_end: string;
    distribution_start: string;
    distribution_end: string;
    event_tags: any;
    event_type: any;
}

export class ImageData{
    image_link:string;
    object_key?:string;
}