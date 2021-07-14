import Card from './Card';

const CardList = (props: any) => {
  return (
    <div>
      {props.profiles.map((profile:any) => <Card key={profile.id} {...profile} />)}
    </div>
  )
}
export default CardList;