import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: black 1px 2px 3px 0px;
  border-radius: 10px;
  background: #f4f2f2;
  margin: 12px;
  padding: 13px;
  width: 32em;
  background-image: url("./img/patternECOStransparente.png");

  @media (max-width: 768px) {
    margin: 2px 0;
    padding: 13px;
    width: 44em;
  }
  @media (max-width: 576px) {
    width: 32em;
    margin: 2px 0;
    padding: 13px;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
  @media (max-width: 414px) {
    width: 90%;
  }
  @media (max-width: 820px) {
    width: 95%;
    font-size: 30px;
  }
  @media (max-width: 912px) {
    width: 95%;
    font-size: 30px;
    margin-bottom: 2vh;

    button {
      font-size: 20px;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 10px 10px 16px 0;
  @media (max-width: 768px) {
    font-size: 30px;
    @media (max-width: 576px) {
      font-size: 20px;
    }
  }
`;

const Item = styled.li`
  color: ${(props) => props.color || "#696565"};
`;

const handleSeniorityBackground = (seniority) => {
  const seniorityCondition = seniority.toLowerCase();
  switch (seniorityCondition) {
    case "junior":
      return "#32b06a";
    case "pleno":
      return "#5289c2";
    case "sênior":
      return "#e26868";
    default:
      return "white";
  }
};

const SeniorityTag = styled.span`
  background-color: ${({ seniority }) => handleSeniorityBackground(seniority)};
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  padding: 0 4px;
  margin-left: 8px;
  border-radius: 4px;
`;

export { Card, List, Item, SeniorityTag };
