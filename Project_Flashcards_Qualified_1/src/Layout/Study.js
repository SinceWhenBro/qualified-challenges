import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyBreadcrumb from "./StudyBreadcrumb";

function Study() {
  
  const {deckId} = useParams();
  const [currentDeck, setCurrentDeck] = useState({cards: []});
  const history = useHistory();
  const [side, setSide] = useState("front");
  const [currentCardId, setCurrentCardId] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      console.log(decksData)
      setCurrentDeck(decksData);
    }
    fetchCards();
  }, [deckId]);

  function handleFlip() {
    setSide("back");
  }

  function handleNext() {
    if (currentCardId+1 < currentDeck.cards.length) {
      setCurrentCardId(currentCardId + 1);
    } else {
      if (window.confirm("Restart Cards?")) {
        setCurrentCardId(0);
      }else{
        history.push("/");
      }
    }
    setSide("front");
  }

  
  if (currentDeck.cards.length <= 2) {
    return (
      <>
        <StudyBreadcrumb currentDeck={currentDeck} />
        <h1>Not enough cards.</h1>
        <p>
          You need at least 3 cards to study. There are {currentDeck.cards.length}{" "}
          cards in this deck.
        </p>
        <Link to="/decks/new">
          <button type="button">Add Cards</button>
        </Link>
      </>
    );
  } else if (side === "front") {
    return (
      <>
        <StudyBreadcrumb currentDeck={currentDeck} />
        <div className="card">
          <h1 className="card-title">
            Card {currentCardId+1} of {currentDeck.cards.length}
          </h1>
          <p>{currentDeck.cards[currentCardId].front}</p>
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <StudyBreadcrumb currentDeck={currentDeck} />
        <div className="card">
          <h1 className="card-title">
            Card {currentCardId+1} of {currentDeck.cards.length}
          </h1>
          <p>{currentDeck.cards[currentCardId].back}</p>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Study;


