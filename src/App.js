import React from 'react';
import './App.css';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Nav from './Nav';
import GetResults from './GetResults';

const linkNames = [
  {
    text: 'Leonardo DaVinci',
    path: '/Leonardo-DaVinci'
  },
  {
    text: 'Michelangelo',
    path: '/Michaelangelo'
  },
  {
    text: 'Pierre-August Renoir',
    path: '/Pierre-August-Renoir'
  },
  {
    text: 'Rembrandt',
    path: '/Rembrandt'
  }
]

const ArtistName = styled.h1`
 font-size: 5em;
`

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class App extends React.Component {

  render () {
    return (
      <Wrapper>
        <Router>
          <Nav
            links={linkNames}
          />
          <Switch>
            <Route path="/Leonardo-DaVinci">
              <ArtistName>Leonardo DaVinci</ArtistName>
              <GetResults searchTerm="Leonardo DaVinci"/>
            </Route>
            <Route path="/Michaelangelo">
              <ArtistName>Michaelangelo</ArtistName>
              <GetResults searchTerm="Michaelangelo" />
            </Route>
            <Route path="/Pierre-August-Renoir">
              <ArtistName>Pierre-August Renoir</ArtistName>
              <GetResults searchTerm="Pierre-August Renoir" />
            </Route>
            <Route path="/Rembrandt">
              <ArtistName>Rembrandt</ArtistName>
              <GetResults searchTerm="Rembrandt" />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
  );
  }
}
