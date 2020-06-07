import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './index.module.css';
interface item {
    value?: number;
    detail?: string;
}
interface ICardsItemPops {
    confirmed: item;
    recovered: item;
    deaths: item;
    lastUpdate: string;
}


const Cards :React.FC<ICardsItemPops>= ({confirmed, recovered, deaths,lastUpdate })  => {

        console.log(  confirmed, 
        recovered, 
        deaths,  
        lastUpdate,'data')
        // const {value } = confirmed as item;
    if(!confirmed ) {
        return   <div>  Loading........ </div> 
    }else {
        return (
            <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    感染
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp start={0} end={confirmed.value || 0} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                        COVID-19传染病例数.
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    康复
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp start={0} end={ recovered.value || 0} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                        COVID-19康复病例数.
                    </Typography>
                </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    死亡
                    </Typography>
                    <Typography variant="h5" component="h2">
                    <CountUp start={0} end={deaths.value || 0} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                        COVID-19死亡病例数.
                    </Typography>
                </CardContent>
                </Grid>
            </Grid>
            </div>
        );
    }
}


export default Cards ;