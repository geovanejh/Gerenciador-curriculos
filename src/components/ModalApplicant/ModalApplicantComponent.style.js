import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 15px;
  box-shadow: 2px 6px 5px 0px black;
  border-radius: 5px;
  border: 1px solid green;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin: 3px 0;
  }

  :hover {
    background-color: #00800044;
    transform: scale(1.02);
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 14px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 16px;
    @media (max-width: 576px) {
      flex-direction: column;
      padding: 5px 5px;
    }
  }
`;

const ButtonTag = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  background: ${({ typeAction }) =>
    typeAction === "bind" ? "#1ab24e" : "#de1d1d"};
  border-radius: 8px;
  padding: 4px;
  border: none;
  cursor: pointer;
  :hover {
    background: ${({ typeAction }) =>
      typeAction === "bind" ? "#16a23d" : "red"};
  }

  display: ${({ hide }) => (hide ? "none" : "flex")};

  :disabled {
    background-color: #8f9294;
    cursor: not-allowed;
  }

  @media (max-width: 992px) {
    margin: 14px 0 0 0;
  }

  @media (max-width: 768px) {
    margin-top: 14px;
    @media (max-width: 576px) {
      margin-top: 14px;
    }
  }
`;

const CardFechar = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  background: white;
  position: sticky;
  z-index: 999;
  top: -15px;
  align-items: center;
  border-bottom: 1px solid green;
`;

export { ButtonTag, Info, CardFechar };
