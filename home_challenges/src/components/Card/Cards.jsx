import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import challenges from '../../infoGalery.js'
import ChallengeCard from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },

  input: {
       marginBottom:"15px"
  }

}));



const result = challenges
/* const  filter = ""
this.state.filter ={stats:" "}

const result = challenges.filter(challenge=>challenge.name.includes(filter)) */

// console.log(result)

// ==================================

/* const filter = ""
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.map(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `

        result.appendChild(li)
    })
} */

/* function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
} */


// ==================================

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
{/*      <input type="text" id="filter" placeholder="Search" value={this.state.stats} 
     /> */}

      <Grid container spacing={3}>

        {
          result.map(result => 
            <Grid item xs={12} sm={6} md={4} lg={3}>
          <ChallengeCard key={result.id} challenge={result}/>
        </Grid>
          )
        }
        
      </Grid>
        
    </div>
  );
}