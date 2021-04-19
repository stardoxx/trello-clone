import React from 'react'
import TrelloCard from './TrelloCard';

export default function TrelloList({title, cards}) {
    const styles = {
        container: {
            backgroundColor: "#C0C0C0",
            borderRadius : 3,
            width : 300,
            padding : 8,
            margin : 8,
        }
    }
    
    return (
        <div style = {styles.container}>
            <h3>{title}</h3>
            {cards.map(card => (
                <TrelloCard text = {card.text} />
            ))}
        </div>
    )
}