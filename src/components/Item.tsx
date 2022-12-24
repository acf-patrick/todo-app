import "../assets/styles/Item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faGrip } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
  content: string;
	checked: boolean;
	onCheck: () => void;
	onRemove: () => void;
}

function Item({ content, checked, onCheck, onRemove }: ItemProps) {
  return (
    <>
			<span>
				<FontAwesomeIcon icon={faGrip} className="grip" />
      	<span className={`content ${checked ? "checked" : ""}`}>{content}</span>
			</span>
      <div className="buttons">
        <button onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={onCheck}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </>
  );
}

export default Item;
