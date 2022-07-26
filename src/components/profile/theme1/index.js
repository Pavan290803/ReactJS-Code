import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import c from './theme1.module.scss';
import {AppIcon, YoutubeIcon} from '../../shared/svg';
import CardMedia from '@mui/material/CardMedia';
import {validHttps, videoURL} from '../../../helper/theme';
import {API_URLS} from "../../../config/api_urls/api_urls";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomModal from '../../shared/CustomModal';

const Theme1 = ({id, data, ...props}) => {
    const [play, setPlay] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [imgUrl, setImgUrl] = React.useState("");

    const handleFullImage = (img) => {
        setImgUrl(img);
        setOpen(true);
    }

    const handleModalClose = () => {
        setImgUrl("");
        setOpen(false);
    }
    
    const videoId = (data.FeaturedVideo ? data.FeaturedVideo.split("?v=")[1] : "testtest") //data.FeaturedVideo.split("?v=")[1];
    const thumb = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg"
    
    useEffect(() => {
        if (data.DirectLink == true) {
            const rurl = "https://" + data.SocialLinks[0].URL;
            window.location.href = rurl
        }
      }, []);

      function getBg() {
        if ("BackgroundImage" in data) {
            return data?.BackgroundImage;
        } else {
            return "none";
        }
      }
    
    if(data.DirectLink == true) {
        return null
    } else {
        return(
            <div style={{ background: `url(${getBg()})` }} 
                    className={classNames(c.theme1)}>
               <div className={classNames(c.modal)}>
                    {
                        data.PersonalInfo?.CoverImageLocation &&
                        <div className={classNames(c.profileBgContainer)} onClick={() => { handleFullImage(`data:image/png;base64,${data?.PersonalInfo?.CoverImageLocation}`)}}>
                            <img className={classNames(c.profileBgImage)} src={`data:image/png;base64,${data?.PersonalInfo?.CoverImageLocation}`} alt="bg-img"/>
                        </div>
                    }
                    
                    <div className={classNames("d-flex justify-content-center")} onClick={() => {data?.PersonalInfo?.ImageLocation && handleFullImage(`data:image/png;base64,${data?.PersonalInfo?.ImageLocation}`)}}>
                        <img className={classNames(c.profileImage, "rounded-circle", data.PersonalInfo?.CoverImageLocation ? c.withBg : c.withoutBg)} src={data?.PersonalInfo?.ImageLocation ? `data:image/png;base64,${data?.PersonalInfo?.ImageLocation}` : require('../../../assets/images/Profile.png')} alt="profile"/>
                    </div>
                    
                    <div className={classNames(c.profileName, "text-center")}>{data?.PersonalInfo.Name || "Update your name"}</div>
                    <div className={classNames(c.cityText, "text-center")}>{data?.PersonalInfo?.Work || "Update your work"}</div>
                    <div className={classNames(c.cityText, "text-center")}><LocationOnIcon/>{data?.PersonalInfo?.Location || "Update your location"}</div>
            
                    <div className={classNames(c.boxContainer)}>
                        <div className={classNames(c.boxTextContainer)}>
                            <div className={classNames(c.text)}>
                                {data?.PersonalInfo?.Bio || "Update your BIO"}
                            </div>
                        </div>
                        {
                            data && data?.SocialLinks?.map((item)=>{
                                        if (item.isActive === true) { 
                                            return (
                                                <center className={classNames("mt-1")} key={item?.Order}>
                                                    <a href={validHttps.includes(item?.Name) ? `${item?.URL}` : `https://${item?.URL}`} target="_blank" rel="noopener noreferrer" className={c.anchor}>
                                                        <img className={classNames(c.socialImage)} src={`${API_URLS.whiteAssets}${item?.Name}.svg`} alt={item?.Name}/>
                                                    </a>
                                                </center>) }
                                        else {
                                            return(
                                                null    
                                            )}
                                    })
                        }
                        {/* {
                            data.SocialLinks.filter(element => element.Name === 'Email' || element.Name === 'Call' || element.Name === 'Gmail' || element.Name === 'Facebook').map((item)=>{
                                if (item.isActive === true) { 
                                    return (
                                        <center className={classNames("mt-1")} key={item?.Order}>
                                            <a href={`${item?.URL}`} target="_blank" rel="noopener noreferrer" className={c.anchor}>
                                                <img className={classNames(c.socialImage)} src={`${API_URLS.whiteAssets}${item?.Name}.svg`} alt={item?.Name}/>
                                            </a>
                                        </center>) }
                                else {
                                    return(
                                        null    
                                        )}
                                })
                        } */}
        
                        {
                            data.FeaturedVideo ? (
                            <div className="my-5">
                                {
                                    play ?
                                    <CardMedia component="iframe" allow="autoplay" allowFullScreen="allowfullscreen" className={classNames(c.videoPlayer)} src={`${videoURL(data?.FeaturedVideo)}?autoplay=1&mute=1`}/>
                                    :
                                    <div className={classNames(c.video)} style={{backgroundImage: `url(${thumb})`}}>
                                        {
                                            data?.PersonalInfo?.ImageLocation ? 
                                            <div className={classNames(c.icon)} style={{backgroundImage: 'url('+ `data:image/png;base64,${data?.PersonalInfo?.ImageLocation}`+')'}}></div>
                                            :
                                            <div className={classNames(c.icon)} style={{backgroundImage: 'url('+ require("../../../assets/images/Profile.png") +')'}}></div>
                                        }
                                        <div className={classNames(c.text)}>{data?.PersonalInfo.Name || "Video Title"}</div>
                                        <div className={classNames(c.playerIcon)} onClick={()=>setPlay(true)}>
                                            <YoutubeIcon/>
                                        </div>                    
                                    </div>
                                }
                            </div> ) : (null)
                        }
        
                        <div className={classNames(c.bottomApp)}>
                            <a href='https://caard.club' target='_blank'>
                                <AppIcon/>
                            </a>
                            <center>
                                <div target='_blank' href='https://caard.club' style={{ textDecoration:'none'}} className={classNames(c.text)}>Powered by Caard</div>
                            </center>
                        </div>
                    
                </div>
               </div>
              <CustomModal handleModalClose={handleModalClose} imgUrl={imgUrl} open={open}/>
            </div>
        )
    }
}
export default Theme1;