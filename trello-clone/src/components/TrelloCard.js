import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


export default function TrelloCard({text}) {
  const styles = {
    cardContainer: {
      marginBottom: 8,
      background : "aliceblue"
    }
  };  
  
  return (
        <div>
            <Card style = {styles.cardContainer} >
      <CardContent >
        <Typography color="textSecondary" gutterBottom>
          {text}
        </Typography>
        
      </CardContent>
      
    </Card>
        </div>
    )
}