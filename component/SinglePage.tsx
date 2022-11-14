import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Ratio, Card } from 'react-bootstrap';
import { selectAllVideo } from '../store/reducer/HandelVideoData';
import { useSelector } from 'react-redux';
import CommentBox from '../page/CommentBox';
import { IVideo } from '../interface/interface';
import HomeVideoPage from '../page/HomeVideoPage';

const SinglePage = () => {
  const { bb } = useParams();
  const video = useSelector(selectAllVideo);
  const singlePageVideo: IVideo = video.find(
    (item: IVideo) => item.snippet.title === bb
  );
  console.log('good===', singlePageVideo);
  const { snippet, id } = singlePageVideo;
  const { videoId } = id;
  const { title, description, thumbnails } = snippet;
  const { high } = thumbnails;
  const { url } = high;
  console.log(id);
  return (
    <div className="single-page">
      <div className="single-page-video" style={{ width: 740, height: 'auto' }}>
        <Card>
          <div>
            <div>
              <Ratio aspectRatio="16x9">
                <iframe
                  className="bo"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Ratio>
            </div>
          </div>
          <Card.Body>
            <Card.Title contentEditable={true}>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div>
              <p title="verify">
                {' '}
                <span>
                  {' '}
                  <i className="gg-check-o"></i>{' '}
                </span>{' '}
              </p>
              <span className="verify">verify</span>
            </div>
          </Card.Body>
        </Card>
      </div>
      <CommentBox />
      <div className="single-page-video-box">
        <HomeVideoPage />
      </div>
    </div>
  );
};

export default memo(SinglePage);
