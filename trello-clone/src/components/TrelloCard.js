import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


export default function TrelloCard() {
    return (
        <div>
            <Card >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        
      </CardContent>
      
    </Card>
        </div>
    )
}
