const initialState: any = [];

interface IComment {
  Comment?: string;
  Id: string;
  replay?: string[];
  On?: boolean;
}
interface II {
  type: string;
  payload: IComment;
}

const HandelComment = (state = initialState, action: II) => {
  switch (action.type) {
    case 'SET_COMMENT':
      state.push(action.payload);
      return state;
    case 'COMMENT_REPLAY':
      let c = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].setCommentId === action.payload.Id) {
          state[i].replay.push(action.payload.Comment);
        }
        c.push(state[i]);
      }
      state = c;
      return state;
    case 'COMMENT_REPLAY_BOX':
      let d = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].setCommentId === action.payload.Id) {
          state[i].On = !state[i].On;
        } else state[i].On = false;
        d.push(state[i]);
      }
      state = d;
      return state;
    default:
      return state;
  }
};

export default HandelComment;

export const selectComment = (state: any) => state.HandelComment;
