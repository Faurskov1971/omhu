function Card(props: any) {
  const person = props;
  return (
    <div className="github-profile" style={{ margin: '1rem' }}>
      <img alt="Profile" src={person.avatar_url} style={{ backgroundColor: 'green', width: '100px', height: '100px' }} />
      <div className="info" style={{ display: 'inlineBlock', marginLeft: '10' }}>
        <div className="name" style={{ fontSize: '125%' }}>{person.name}</div>
        <div className="company">{person.company}</div>
        <div className="blog"><a href={person.blog} target='_blank' rel="noreferrer">Read more...</a></div>
      </div>
    </div>
  )
}
export default Card;