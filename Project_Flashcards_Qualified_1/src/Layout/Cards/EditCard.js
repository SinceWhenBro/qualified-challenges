import React, {useState, useEffect} from "react";
import { useHistory, useParams} from "react-router-dom";
import { updateCard, readCard } from "../../utils/api";
import Form from "../Form"

function EditCard() {
    const [cardData, setCardData] = useState({front: "", back: ""});
    const history = useHistory();
    const {cardId} = useParams();

    useEffect(() => {
        const abortController = new AbortController();
    
        async function fetchCards() {
          const cardsData = await readCard(cardId, abortController.signal);
          setCardData(cardsData);
        }
        fetchCards();
      }, [cardId]);

    function handleChange({target}){
        setCardData({...cardData, [target.name]: target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await updateCard(cardData);
        console.log(response);
        history.push(`/decks/${cardData.deckId}`)
      }
    return(
        <>
            <nav aria-label="nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item">Edit Deck</li>
                </ol>
            </nav>
            <h1>Edit Card</h1>

            <Form handleChange={handleChange} handleSubmit={handleSubmit} cardData={cardData}/>

        </>
    )
}

export default EditCard;