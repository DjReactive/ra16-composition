function Card({item}) {
  return (
    <div className="card card-item">
      <CardImage data={item.image} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <a href={item.button.link} className="btn btn-primary">{item.button.name}</a>
      </div>
    </div>
  );
}

const CardImage = ({data}) => {
  return data && <img src={data.src} className="card-img-top image" alt={data.alt} />
}

export default Card;
