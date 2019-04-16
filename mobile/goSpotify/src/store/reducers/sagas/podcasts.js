import { call, put } from 'redux-saga/effects'
import api from '~/services/api'

import podcastActions from '~/store/ducks/podcasts'

export function * load () {
  try {
    const response = yield call(api.get, 'podcasts')

    yield put(podcastActions.loadSuccess(response.data))
  } catch (error) {
    yield put(podcastActions.loadFailure())
  }
}
