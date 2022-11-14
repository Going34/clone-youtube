import { IVideo } from '../interface/interface';

export const setVideoData = (setVideo: IVideo) => {
  return {
    type: 'SET_VIDEO_DATA',
    payload: setVideo,
  };
};

export const callFunction = (search:string) => {
  return {
    type: 'CALL_FUNCTION',
    payload:search
  };
};

export const CommentWillBeSet = (
  setComment: string,
  setCommentId: string,
  replay: any
) => {
  return {
    type: 'SET_COMMENT',
    payload: {
      setComment: setComment,
      setCommentId: setCommentId,
      replay: replay,
      On: false,
    },
  };
};

export const CommentReplay = (Id: String, Comment: string) => {
  return {
    type: 'COMMENT_REPLAY',
    payload: {
      Id: Id,
      Comment: Comment,
    },
  };
};

export const commentReplayBox = (id: string) => {
  return {
    type: 'COMMENT_REPLAY_BOX',
    payload: {
      Id: id,
    },
  };
};
