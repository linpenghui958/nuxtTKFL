import * as types from './mutation-types'

const mutations = {
  [types.SET_HOME_HEAD_ACTIVE_INDEX] (state, index) {
    state.homeHeadActiveIndex = index
  },
  [types.SET_ABOUT_US_ACTIVE_INDEX] (state, index) {
    state.aboutUsActiveIndex = index
  }
}
export default mutations
