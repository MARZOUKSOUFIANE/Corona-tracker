import React from 'react'
import { Card,CardContent,Typography,Grid } from '@material-ui/core'
import CountUp from "react-countup";
import styles from "./Cards.module.css"
import cx from 'classnames';


function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {

    if(!confirmed){
        return "Loading ...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={confirmed.value/2} end={confirmed.value} duration={1.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovred</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={recovered.value/2} end={recovered.value} duration={1.5} separator=','/>    
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={deaths.value/2} end={deaths.value} duration={1.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
