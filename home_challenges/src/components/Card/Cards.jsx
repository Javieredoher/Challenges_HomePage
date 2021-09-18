/* import React from 'react';
import movies from '../../movieList.json'
import Card from '../Card/Card';
import style from './Cards.module.css'
//import movie from '../../movieList.json'

function Cards (){

     const result = movies.filter(gen=>gen.genre_ids.includes(27))
     console.log(result)
 

     return (

         <div className={style.Cards}>

         {result.map((result)=> console.log(result))} 

         {result.map((result,index)=> <Card  props={result} key={index}/>)}        

        </div>
     ) 


}

export default Cards */


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import challenges from '../../infoGalery.js'
import ChallengeCard from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },

}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {
          challenges.map(challenge => 
            <Grid item xs={12} sm={6} md={4} lg={3}>
          <ChallengeCard key={challenge.id} challenge={challenge}/>
        </Grid>
          )
        }
        
      </Grid>
        
    </div>
  );
}