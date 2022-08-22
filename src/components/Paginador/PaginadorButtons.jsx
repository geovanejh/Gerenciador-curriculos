import { PaginadorButton } from "./PaginadorButtons.styled";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginadorButtons = ({ pages, setCurrentPage, currentPage }) => {
  const decrementaPaginador = () => {
    if (currentPage > 0) {
      setCurrentPage(Number(currentPage - 1));
    }
  };

  const incrementaPaginador = () => {
    if (currentPage < pages - 1) {
      setCurrentPage(Number(currentPage + 1));
    }
  };

  return (
    <>
      <PaginadorButton onClick={() => decrementaPaginador()}>
        <BsChevronLeft />
      </PaginadorButton>
      {Array.from(Array(pages), (item, index) => {
        return (
          <PaginadorButton
            active={currentPage == index ? true : false}
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </PaginadorButton>
        );
      })}
      <PaginadorButton onClick={() => incrementaPaginador()} id="proximaPagina">
        <BsChevronRight />
      </PaginadorButton>
    </>
  );
};
export default PaginadorButtons;
