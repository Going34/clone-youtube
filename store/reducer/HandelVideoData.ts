import { IVideo } from '../../interface/interface';
import * as actions from '../../action/SetAllVideoData';
import { ActionType } from 'typesafe-actions';

const initialState: any = [];
interface tt {
  type: string;
  payload: IVideo;
}
const HandelVideoData = (state: IVideo = initialState, action: tt) => {
  switch (action.type) {
    case 'SET_VIDEO_DATA':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default HandelVideoData;

export const selectAllVideo = (state: any) => state.HandelVideoData;
