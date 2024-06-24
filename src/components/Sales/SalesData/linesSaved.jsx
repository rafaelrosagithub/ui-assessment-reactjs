import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom-right-radius: 10px;
  padding: 25px;
`;

const RowsValue = styled.h2`
  margin: 0;
  color: #22ab55;
  font-size: 3.5rem;
`;

const StatusDescription = styled.h2`
  margin: 0;
  color: #bbb9b9
`;

const LinesSaved = ({ data }) => {
  return (
    <Container>
      <RowsValue>{data.linesSaved}%</RowsValue>
      <StatusDescription>LINES SAVED</StatusDescription>
    </Container>
  );
};

export default LinesSaved;
