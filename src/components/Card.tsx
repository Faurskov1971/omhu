import { makeStyles } from "@material-ui/core/styles";
import CardStyle from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles:any = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: '300px',
  },
});

function Card(props: any) {
  const person = props;
  const classes = useStyles();
  return (
    <CardStyle 
      className = {classes.card}>
      <CardMedia 
        image     = {person.avatar_url}
        className = {classes.media}
         >
        </CardMedia>
      <CardContent>
        <div className  = "name" style={{ fontSize: '125%' }}>{person.name}</div>
        <div className  = "company">{person.company}</div>
        <div className  = "company">{person.location}</div>
        <div style={{display:person.blog ? 'block': 'none'}}><a href={person.blog} target='_blank' rel="noreferrer">Read more...</a></div>
      </CardContent>
    </CardStyle>
  )
}
export default Card;