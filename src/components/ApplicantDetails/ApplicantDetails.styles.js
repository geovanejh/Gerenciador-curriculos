import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  padding-top: 14vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f4f2f2;
  margin: 10px 0;
  padding: 13px;
  width: 32em;
`;

const Field = styled.div``;

const Group = styled.div``;

export { Card, Field, Group, Container };
