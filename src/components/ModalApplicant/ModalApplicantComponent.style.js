import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 15px;

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
  background: #1ab24e;
  border-radius: 8px;
  padding: 4px;
  border: none;
  cursor: pointer;
  :hover {
    background: #16a23d;
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
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: -15px;
`;

export { ButtonTag, Info, CardFechar };
