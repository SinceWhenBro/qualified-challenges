import React, { useEffect } from "react";
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

  }, []);

  function handleDelete(deckID){
    if (window.confirm(message)){
        deleteDeck(deckID);
    }
}

  return (
    <>
        <Link to="/decks/new">
            <button className="btn btn-secondary">Create Deck</button>
        </Link>
        <div className="card w-50">
            {decks.map(deck => {
                return(
                    <div key={deck.id} className="card-body">
                        <h5 className="card-title">{deck.name}</h5>
                        <p className="card-text">{deck.description}</p>
                        <p>{deck.cards.length} cards</p>
                        <Link to={`/decks/${deck.id}`}>
                            <button className="btn btn-primary">View</button>
                        </Link>
                        <Link to={`/decks/${deck.id}/study`}>
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


