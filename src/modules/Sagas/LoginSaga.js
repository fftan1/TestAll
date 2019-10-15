import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../actions/Types';
import ames247 from '../../axios';
import NavigateService from '../../NavigateService';

function* Login(action) {
  console.log("TCL: function*Login -> action", action)
  const ref = NavigateService.getNavigator(NavigateService.navigatorName.LoginNavigate);
  try {
    const response = yield ames247.post('/login-ames-app', {
      UserName: action.username,
      Password: action.password,
    });
    console.log("TCL: function*Login -> response", response)

    if (response.data.message === 'OK') {
      const { users } = response.data;
      users.loginMyAi = JSON.parse(users.loginMyAi);
      if (users.loginMyAi.message === 'OK') {
        console.log("TCL: function*Login -> users.loginMyAi", users.loginMyAi)
        yield put({ type: ActionTypes.AUTH_LOGIN_SUCCESS, loginInUser: users.loginMyAi.user });
        ref._navigation.navigate('STACK');
      } else {
        alert('sai sai');
      }
    }
  } catch (error) {
    alert(`erorr: ${error}`);
  }
}

// data: {
//   message: "OK"
//   users: {
//     loginMyAi: {
//       description: "Đăng nhập thành công"
//       message: "OK"
//       user: {
//         Avatar: null
//         ClassName: null
//         Email: ""
//         FullName: "tan"
//         GroupId: null
//         Id: 36551
//         ModuleId: ""
//         Phone: "0101010100"
//         Profile: null
//         PronunciationLevel: "Interactive"
//         Roles: "MYAI-STUDENTS"
//         SchoolId: null
//         SpeechRecognitionAPI: null
//         Status: "ACTIVE"
//         StudentId: 36551
//         UserId: 36551
//         UserName: "0101010100"
//         UserRoles: "[{"ID":5,"Name":"MYAI - STUDENTS"}]"
//         VerifyCode: null
//       }
//     }
//   }
// }

export default function* watchLogin() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, Login);
}
