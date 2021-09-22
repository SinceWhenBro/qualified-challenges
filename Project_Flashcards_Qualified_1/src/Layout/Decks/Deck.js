import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck, deleteCard } from "../../utils/api";

export default function Deck(){
    const [deck, setDeck] = useState({cards: []});
    const {deckId} = useParams();
    const message ="Delete this card?";
    function handleDelete(deckID){
        if (window.confirm(message)){
            deleteCard(deckID);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
    
        async function fetchCards() {
          const deckData = await readDeck(deckId, abortController.signal);
          console.log(deckData)
          setDeck(deckData);
        }
        fetchCards();
      }, [deckId]);

    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Deck</a></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <Link to={`/decks/${deckId}/edit`}>
                <button className="btn btn-secondary">Edit</button>
            </Link>
            <Link to={`/decks/${deckId}/study`}>
                <button className="btn btn-primary">Study</button>
            </Link>
            <Link to={`/decks/${deckId}/cards/new`}>
                <button className="btn btn-primary">Add Cards</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <h2>Cards</h2>
            {deck.cards.map(card =>{
                return(
                    <div key={card.id} className="card-body">
                        <p className="card-text">{card.front}</p>
                        <p className="card-text">{card.back}</p>
                        <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                            <button className="btn btn-secondary">Edit</button>
                        </Link>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                )
            }
                
            )}

        </nav>
    )
}