import { useParams } from "react-router-dom";
import PopBrowse from "../components/PopBrowse/PopBrowse";

function CardPage() {
  const { id } = useParams();
  return <PopBrowse cardId={id} />;
}

export default CardPage;
