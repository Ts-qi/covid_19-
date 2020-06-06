import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './index.module.css';
// interface ICardsItemPops {
//     confirmed: any;
//     recovered: any;
//     deaths: any;
//     lastUpdate: any;
// }
export interface ICardsProps {
    data : any
}
const Cards :React.FC<ICardsProps> = ({ 
    data: { 
        confirmed, 
        recovered, 
        deaths, 
        lastUpdate
     } 
})  => {
    return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Infected
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp start={0} end={9} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of active cases of COVID-19.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp start={0} end={ 9} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of recoveries from COVID-19.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp start={0} end={19} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of deaths caused by COVID-19.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      );
}

export default Cards;