import { AUTH_LOGIN, AUTH_LOGIN_ERROR_NETWORK, AUTH_LOGIN_FAIL, AUTH_LOGIN_PENDING, AUTH_LOGIN_SUCCESS } from '../actions/Types';

const initialState = {
  loginInUser: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loginInUser: null,
        error: null,
        loading: true,
      };
    }

    case AUTH_LOGIN_FAIL: {
      return {
        ...state,
        loginInUser: null,
        error: null,
        loading: false,
      };
    }

    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loginInUser: action.loginInUser,
        error: null,
        loading: false,
      };
    }

    case AUTH_LOGIN_ERROR_NETWORK: {
      return {
        ...state,
        loginInUser: null,
        error: action.error,
        loading: false,
      };
    }
    default:
      return state;
  }
};
