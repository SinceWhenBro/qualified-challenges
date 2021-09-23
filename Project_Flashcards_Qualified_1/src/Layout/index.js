
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Deck from "./Decks/Deck";
import CreateDeck from "./Decks/CreateDeck";
import { Route, Switch } from "react-router-dom";
import Study from "./Study";
import EditCard from "./Cards/EditCard";
import EditDeck from "./Decks/EditDeck";
import AddCard from "./Cards/AddCard";
import React, { useState } from "react";

function Layout() {
  const [ decks, setDecks ] = useState([]);
  

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks}/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck/>
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck deck={decks} setDeck={setDecks}/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* TODO: Implement the screen starting here */}
      </div>
    </>
  );
}

export default Layout;
