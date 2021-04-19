import React from 'react'
import TrelloCard from './TrelloCard';

export default function TrelloList({title}) {
    const styles = {
        container: {
            backgroundColor: "grey",
            borderRadius : 3,
            width : 300,
            padding : 8
        }
    }
    
    return (
        <div style = {styles.container}>
            <h3>List</h3>
            <TrelloCard/>
        </div>
    )
}
