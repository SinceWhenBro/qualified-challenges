import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams} from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";

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
        const response = await createCard(cardData);
        history.push(`/decks/${response.id}`)
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

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Front side of card</label>
                    <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Deck name" onChange={handleChange} value={cardData.front}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Back side of card</label>
                    <input name="description" type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Brief description of the deck." onChange={handleChange} value={cardData.back}/>
                </div>
                
                    <button type="submit" className="btn btn-secondary">Save</button>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Done</button>
                </Link>
            </form>

        </>
    )
}

export default AddCard;