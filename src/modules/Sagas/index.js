import { fork } from 'redux-saga/effects';
import LoginSaga from './LoginSaga';

export default function* rootSaga() {
  yield [
    fork(LoginSaga),
  ];
}
