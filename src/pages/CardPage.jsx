import { useParams } from 'react-router-dom';

function CardPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Card {id}</h1>
    </div>
  );
}

export default CardPage;
