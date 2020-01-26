import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import LandingPage from './pages/LandingPage';
import Context from './context/Context';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState();
  const [destinations, setDestinations] = useState();
  const [checklists, setChecklists] = useState();
  const [destinationSelected, setDestinationSelected] = useState();
  const [arrayOfBadges, setArrayOfBadges] = React.useState();
  const [connectedUser, setConnectedUser] = React.useState();
  const [focusList, setFocusList] = React.useState(0); // liste visible sur le dashboard par défaut (index 0 = Santé)
  const [reload, setReload] = React.useState(0);
  const [backdrop, setBackdrop] = React.useState(true);
  const [fadeState, setFadeState] = React.useState(false);

  const [show_FAQ, setShow_FAQ] = useState(false);
  const [show_POLITIQUE, setShow_POLITIQUE] = useState(false);
  const [show_PROFIL, setShow_PROFIL] = useState(false);
  const [show_COPYRIGHT, setShow_COPYRIGHT] = useState(false);
  const [show_ADD_DESTINATION, setShow_ADD_DESTINATION] = useState(false);
  const [show_DELETE_DESTINATION, setShow_DELETE_DESTINATION] = useState(false);
  const [show_EDIT_DESTINATION, setShow_EDIT_DESTINATION] = useState(false);

  //FETCH ALL DATAS
  useEffect(() => {
    setBackdrop(true);
    connectedUser &&
      axios
        .all([
          axios.get(`/api/datas/userData?user=${connectedUser}`),
          axios.get(`/api/datas/userDestinations?user=${connectedUser}`),
          axios.get(`/api/datas/userChecklists?user=${connectedUser}`),
          axios.get(`/api/datas/stats?destination=${destinationSelected}`)
        ])
        .then(
          axios.spread((userData, destinations, checklists, stats) => {
            setUserData(userData.data);
            setDestinations(destinations.data);
            setChecklists(checklists.data);
            if (destinationSelected) {
              setArrayOfBadges(stats.data);
            }
            if (destinations.data.length && !destinationSelected) {
              setDestinationSelected(destinations.data[0].id);
            }
          })
        )
        .finally(
          setTimeout(() => {
            setBackdrop(false);
          }, 500),
          setTimeout(() => {
            setFadeState(true);
          }, 2000)
        );
  }, [connectedUser, destinationSelected, reload]);

  return (
    <div>
      <Context.Provider
        value={{
          show_FAQ,
          setShow_FAQ,
          show_POLITIQUE,
          setShow_POLITIQUE,
          show_PROFIL,
          setShow_PROFIL,
          show_COPYRIGHT,
          setShow_COPYRIGHT,
          show_ADD_DESTINATION,
          setShow_ADD_DESTINATION,
          show_DELETE_DESTINATION,
          setShow_DELETE_DESTINATION,
          show_EDIT_DESTINATION,
          setShow_EDIT_DESTINATION,
          focusList,
          setFocusList,
          userData,
          setUserData,
          checklists,
          setChecklists,
          destinations,
          setDestinations,
          destinationSelected,
          setDestinationSelected,
          arrayOfBadges,
          setArrayOfBadges,
          connectedUser,
          setConnectedUser,
          reload,
          setReload,
          backdrop,
          setBackdrop,
          fadeState,
          setFadeState
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default App;
