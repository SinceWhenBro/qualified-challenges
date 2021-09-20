import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";
const message = "Delete this deck?";

//NEED HELP

export default function Home({decks , setDecks}) {

  useEffect(() => {

    const abortController = new AbortController();

    async function fetchDecks() {
      const decksData = await listDecks(abortController.signal);
      setDecks(decksData);
    }
    fetchDecks();

  }, [decks]);

  function handleDelete(deckID){
    if (window.confirm(message)){
        deleteDeck(deckID);
    }
}

  return (
    <>
        <Link to="/decks/new">
            <button class="btn btn-secondary">Create Deck</button>
        </Link>
        <div class="card w-50">
            {decks.map(deck => {
                return(
                    <div class="card-body">
                        <h5 class="card-title">{deck.name}</h5>
                        <p class="card-text">{deck.description}</p>
    
                        <Link to="">
                            <button className="btn btn-primary">View</button>
                        </Link>
                        <Link to="/decks/:deckId/study">
                            <button className="btn btn-secondary">Study</button>
                        </Link>
                
                        <button className="btn btn-danger" onClick={() => handleDelete(deck.id)}>
                            Trash
                        </button>
                    </div>
                )
            }
            )}
        </div>
    </>
  );
}


