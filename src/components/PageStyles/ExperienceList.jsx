import { formateDateToBrazil } from "../../utils/dates";

const ExperienceList = ({ title, header, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <li>
          {header.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </li>
        {items.map((elemento, index) => (
          <li key={index}>
            <p>{elemento.company}</p>
            <p>{elemento.role}</p>
            <p>{formateDateToBrazil(elemento.startDate)}</p>
            <p>{formateDateToBrazil(elemento.endDate)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceList;
