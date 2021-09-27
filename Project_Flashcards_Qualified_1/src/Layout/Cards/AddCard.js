import React, {useState, useEffect} from "react";
import { useHistory, useParams} from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import Form from "../Form"

function AddCard(decks) {
    const [cardData, setCardData] = useState({front: "", back: ""});
    const [deck, setDeck] = useState({});
    const history = useHistory();
    const {deckId} = useParams();

    useEffect(() => {
        const abortController = new AbortController();
    
        async function fetchCards() {
          const deckData = await readDeck(deckId, abortController.signal);
          console.log(deckData)
          setDeck(deckData);
        }
        fetchCards();
      }, [deckId]);

    function handleChange({target}){
        setCardData({...cardData, [target.name]: target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(cardData, deckId);
        const response = await createCard(deckId, cardData);
        console.log(response);
        history.push(`/decks/${deckId}`)
      }
    return(
        <>
            <nav aria-label="nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{`${deck.name}`}</a></li>
                    <li className="breadcrumb-item">Add Card</li>
                </ol>
            </nav>
            <h1>{`${deck.name}: Add Card`}</h1>

            <Form handleChange={handleChange} handleSubmit={handleSubmit} cardData={cardData}/>

        </>
    )
}

export default AddCard;