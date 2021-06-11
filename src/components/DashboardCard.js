import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import '../assets/components/Cards.module.css';
const Cards = () => {
    return(
        <Grid container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        >
            <Grid item xs={12} sm={3} >
                <Paper elevation={0}>
                    <Card className="" variant="outlined" className="primaryCard">
                        
                        <CardContent>
                        
                        <HomeIcon color="secondary" size='medium'/>
                
                        <Typography className="" color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                            beasdas
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Paper>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Paper elevation={0}>
                    <Card className="" variant="outlined" color="primary">
                        
                        <CardContent>
                        <HomeIcon /><Typography className="" color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                            beasdas
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Paper>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Paper elevation={0}>
                    <Card className="" variant="outlined" color="primary">
                        
                        <CardContent>
                        <HomeIcon /><Typography className="" color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                            beasdas
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Paper>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Paper elevation={0}>
                    <Card className="" variant="outlined" color="primary">
                        
                        <CardContent>
                        <HomeIcon /><Typography className="" color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                            beasdas
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Paper>
            </Grid>
        </Grid>
    );
}
export default Cards;
