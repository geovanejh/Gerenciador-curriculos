import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: white;
  margin: 10px 0;
  padding: 13px;
  width: 32em;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 10px 10px 16px 0;
`;

const Item = styled.li`
  color: ${(props) => props.color || '#696565'};
`;

const handleSeniorityBackground = (seniority) => {
  const seniorityCondition = seniority.toLowerCase();
  switch (seniorityCondition) {
    case 'junior':
      return '#32b06a';
    case 'pleno':
      return '#5289c2';
    case 'sênior':
      return '#e26868';
    default:
      return 'white';
  }
};

const SeniorityTag = styled.span`
  background-color: ${({ seniority }) => handleSeniorityBackground(seniority)};
  color: ${(props) => props.color || '#403838'};
  border-radius: 14px;
  font-size: 14px;
  padding: 4px 8px;
  margin: 0 0.5em;
  font-weight: bold;
`;

export { Card, List, Item, SeniorityTag };