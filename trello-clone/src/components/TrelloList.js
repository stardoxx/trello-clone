import React from 'react'
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

export default function TrelloList({title, cards}) {
    const styles = {
        container: {
            backgroundColor: "khaki",
            borderRadius : 3,
            width : 300,
            padding : 8,
            margin : 8,
            height : "100%"
        }
    }
    
    return (
        <div style = {styles.container}>
            <h3>{title}</h3>
            {cards.map(card => (
                <TrelloCard key = {card.id} text = {card.text} />
            ))}
            <TrelloActionButton />
        </div>
    )
}