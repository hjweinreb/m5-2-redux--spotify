import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ArtistRoute from '../ArtistRoute/index'

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../actions';



const DEFAULT_ARTIST_ID = '5W5bDNCqJ1jbCgTxDD0Cb3';

const App = () => {


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch('/spotify_access_token')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch(err => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  console.log("in app js")

  return <Router>
    <Switch>
      <Route path="/artist/:artistId">
        <ArtistRoute artistId={DEFAULT_ARTIST_ID} />
      </Route>
      <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
    </Switch>
  </Router>;
};

export default App;
