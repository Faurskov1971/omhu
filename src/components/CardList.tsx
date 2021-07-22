import Card from './Card';
import Grid from "@material-ui/core/Grid";

const CardList = (props: any) => {
  return (
    <Grid
      container 
      spacing={3}>
      {props.profiles.map((profile:any) => 
        <Grid  item xs={12} sm={4} key={profile.id}>
          <Card key={profile.id} {...profile} />
        </Grid>
        )}
    </Grid>
  )
}
export default CardList;