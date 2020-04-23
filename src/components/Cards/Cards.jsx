import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return("Loading...")
    }
    return(
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md= {3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <CardMedia className={styles.media} image="https://img.icons8.com/material-outlined/100/000000/being-sick.png" title=""/>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Numero de Casos Activos de COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md= {3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <CardMedia className={styles.media} image="https://img.icons8.com/ios/100/000000/recovery.png" title=""/>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Numero de Casos Recuperados de COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md= {3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <CardMedia className={styles.media} image="https://img.icons8.com/dotty/80/000000/die-in-bed.png" title=""/>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">{new Date(lastUpdate).toUTCString()}</Typography>
                        <Typography variant="caption">Numero de Óbitos de COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

