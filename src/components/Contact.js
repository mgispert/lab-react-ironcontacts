import "./Contact.css";

export default function Contact(props) {
  return (
    <tr className="Contact-info">
      <td>
        <img src={props.picture} alt="actor or actress" />
      </td>

      <td>
        <h4>{props.name}</h4>
      </td>

      <td>
        <h4>{props.popularity}</h4>
      </td>

      <td>{props.wonOscar && <span>🏆 </span>}</td>

      <td>{props.wonEmy && <span>🌟</span>}</td>

      <td>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </td>
    </tr>
  );
}
