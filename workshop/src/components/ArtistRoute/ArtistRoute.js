import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtistProfile } from '../../helpers/api-helpers';
import styled from 'styled-components'

import { getArtist, getArtistStatus } from '../../reducers/artists-reducer';

import {
  /*   requestAllArtistInfo, */
  receiveArtistProfile,
  receiveRelatedArtists,
  receiveTopTracks,
  finishReceivingAllArtistInfo,
  receiveArtistError,
} from '../../actions';

const ArtistRoute = (artistId) => {
  let dispatch = useDispatch();
  const artist = useSelector(getArtist);
  //let artistProfile;
  const accessToken = useSelector((state) => state.auth.token);

  React.useEffect((async) => {

    const artistPromise = fetchArtistProfile(accessToken, artistId).then(
      json => {
        if (accessToken) {
          dispatch(receiveArtistProfile(json));
        }
      }
    );





    /*  let artistProfile = useSelector(getArtist) */



    /* const entireState = useSelector((state) => state); */





    //console.log(" ENTIRE STATE", entireState)

    Promise.all([artistPromise])
      .then(() => {
        dispatch(finishReceivingAllArtistInfo())
      })
      .catch(err => {
        console.error(err);
        dispatch(receiveArtistError(err));
      });
  }, [accessToken, artistId]);




  console.log(artist)
  if (!artist) {
    return (
      <div>loading</div>
    )
  }



  return (
    <Section>
      <div>
        <Title>{artist.profile.name}</Title>
        <Image src={artist.profile.images[2].url}></Image>
        <Followers>{artist.profile.followers.total}</Followers><Followers2>followers</Followers2>
        <Top>Top Tracks</Top>
        <Vec1><VecArrow></VecArrow></Vec1>
        <Vec2><VecArrow2></VecArrow2></Vec2>
        <Vec3><VecArrow3></VecArrow3></Vec3>
        <Related>Related Artists</Related>


      </div>
    </Section>
  )

}


export default ArtistRoute;

const Section = styled.div`
  width: 400px;
  height: 600px;
  background-color: #0B0F14;
`;


const Image = styled.img`
 
position: absolute;
width: 175px;
height: 175px;
left: 104px;
top: 59px;

background: url(image.png);
border-radius: 190.5px;

`;

const Title = styled.h2`
position: absolute;
width: 268px;
height: 59px;
left: 80px;
top: 150px;
z-index: 3;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 33px;
line-height: 59px;
/* identical to box height */


/* White */

color: #FFFFFF;
/* Triple shadow */

text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 0, 0.75);

`;

const Top = styled.div`
position: absolute;
width: 109px;
height: 26px;
left: 133px;
top: 338px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 26px;
/* identical to box height */

text-transform: lowercase;
color: #FFFFFF;
`;

const Vec1 = styled.div`



position: absolute;
top: 370px;
left: 125px;
width: 30px;
height: 30px;
radius: 15px;
border: 1px white;
border-radius: 20px;

/* GrayFade */

background: rgba(75, 75, 75, 0.4);

`;

const VecArrow = styled.div`
position: absolute;
left: 25.83%;
right: 25.83%;
top: 12.5%;
bottom: 12.5%;

width: 0; 
height: 0; 
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;

border-left: 20px solid white
`;

const Vec2 = styled.div`



position: absolute;
top: 370px;
left: 175px;
width: 30px;
height: 30px;
radius: 15px;
border: 1px white;
border-radius: 20px;

/* GrayFade */

background: rgba(75, 75, 75, 0.4);

`;

const VecArrow2 = styled.div`
position: absolute;
left: 25.83%;
right: 25.83%;
top: 12.5%;
bottom: 12.5%;

width: 0; 
height: 0; 
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;

border-left: 20px solid white
`;


const Vec3 = styled.div`



position: absolute;
top: 370px;
left: 225px;
width: 30px;
height: 30px;
radius: 15px;
border: 1px white;
border-radius: 20px;

/* GrayFade */

background: rgba(75, 75, 75, 0.4);

`;

const VecArrow3 = styled.div`
position: absolute;
left: 25.83%;
right: 25.83%;
top: 12.5%;
bottom: 12.5%;

width: 0; 
height: 0; 
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;

border-left: 20px solid white
`;

const Followers = styled.div`
position: absolute;
width: 93px;
height: 17px;
left: 141px;
top: 257px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-transform: lowercase;

color: #FF4FD8;
`;

const Followers2 = styled.div`
position: absolute;
width: 93px;
height: 17px;
left: 190px;
top: 257px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-transform: lowercase;

color: white;
`;

const Related = styled.h3`
position: absolute;
width: 150px;
height: 26px;
left: 113px;
top: 450px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 26px;
/* identical to box height */

text-transform: lowercase;

/* White */

color: #FFFFFF;
`;