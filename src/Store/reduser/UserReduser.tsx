
import { UserActionTypes, SET_USER, CLEAR_USER, UPDATE_USER } from '../Actions/UserActions'; 

interface UserState {
  name: string | null;
  email: string | null;
  phoneNo: any | null;
  city:any | null;
}

const initialState: UserState = {
  name: null,
  email: null,
  phoneNo: null,
  city: 'Bangaluru',
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, name: action.payload.name, email: action.payload.email, phoneNo: action.payload.phoneNo, city: action.payload.city };
    case CLEAR_USER:
      return { ...state, name: null, email: null, phoneNo: null,city: null, };
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload, 
      };
    default:
      return state;
  }
};
