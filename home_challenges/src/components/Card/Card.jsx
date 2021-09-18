import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  action:{
    marginTop: '1rem',
  },

}));

export default function ChallengeCard({challenge}) {
  const classes = useStyles();
  

  
  return (
    <Card className={classes.root}>
      <CardHeader

        action={
          <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'>
          </Typography>
        }
        title={challenge.name}

      />

      <CardMedia
        className={classes.media}
        image={challenge.img}
 
      />


         

        <IconButton>
        <a href={challenge.repo}><GitHubIcon fontSize='large'/>
        </a></IconButton> 


        <IconButton>
          <a href={challenge.link}><LinkIcon /> </a>
        </IconButton>


    </Card>
  );
}
