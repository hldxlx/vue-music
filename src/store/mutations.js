/**
 * Created by cyb on 2019/4/21.
 */
import * as types from './mutation-types';
const mutations ={
  [types.SET_SINGER](state,singer){
    state.singer = singer;

  }
}
export default mutations
