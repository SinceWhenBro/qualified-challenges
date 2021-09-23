import React from "react";

export default function StudyBreadcrumb({currentDeck}){
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href={`/decks/${currentDeck.id}`}>{currentDeck.name}</a></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>
    )
}