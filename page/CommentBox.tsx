import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CommentReplay,
  commentReplayBox,
  CommentWillBeSet,
} from '../action/SetAllVideoData';

import CommentInputBox from '../component/CommentInputBox';
import { selectComment } from '../store/reducer/HandelComment';
import './commentBox.css';
const CommentBox = () => {
  const getComment = useSelector(selectComment);
  const [comment1, setComment1] = useState('');
  const [id, setId] = useState('');
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setComment1('');
  }, [comment1]);

  const AddToComment = (comment: any) => {
    console.log('AddTo comment');
    if (comment !== '') {
      setComment1(comment.comment);
      let currentTimeDate = new Date();
      const arr = [];
      dispatch(
        CommentWillBeSet(comment, currentTimeDate.getTime().toString(), arr)
      );
    }
  };

  const AddReply = (comment: string) => {
    console.log('comment===== ===', comment);
    dispatch(CommentReplay(id, comment));
  };

  const ReplyBox = (id: string) => {
    setShowReplyBox(!showReplyBox);
    dispatch(commentReplayBox(id));
    setId(id);
  };

  return (
    <div>
      <div className="container">
        <div className="side">
          <CommentInputBox AddToComment={AddToComment} />
        </div>
        <div className="comment">
          <ul>
            {getComment.map((comment: any) => {
              return (
                <li>
                  <h5>{comment.setComment}</h5>
                  <p>
                    <i className="fa-regular fa-thumbs-up"></i>{' '}
                    <i className="fa-solid fa-thumbs-up"></i>
                    <i className="fa-regular fa-thumbs-down"></i>{' '}
                    <i className="fa-solid fa-thumbs-down"></i>
                    <span>
                      {comment.On ? (
                        <CommentInputBox AddToComment={AddReply} />
                      ) : null}
                      <span
                        onClick={() => {
                          ReplyBox(comment.setCommentId);
                        }}
                      >
                        Replay
                      </span>
                    </span>
                  </p>
                  <ul>
                    {comment?.replay?.map((item: any) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CommentBox;
