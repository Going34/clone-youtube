import React, {memo , useEffect} from 'react';

import VideoComponent from '../component/VideoComponent';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectAllVideo } from '../store/reducer/HandelVideoData';
import { IVideo } from '../interface/interface';
import {useNavigate} from "react-router-dom";

const HomeVideoPage = () => {
  const videoData = useSelector(selectAllVideo);
  const navigate = useNavigate();
  useEffect(() => {
    
  },[videoData])
  console.log(videoData);
  return (
    <div>
    
    <div className="card-group video-class">
      {videoData.map((item: IVideo ) => {
        const { snippet , id } = item
        const { videoId } = id
        const { title , thumbnails } = snippet
        const { medium } = thumbnails
        const { url  }  = medium
        return (
          <div className="fx1" key={title}>
            <Link className="icon" to={`/singlepage/${title}`}>
              <VideoComponent title={title} videoId={videoId}  />
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default memo(HomeVideoPage);
