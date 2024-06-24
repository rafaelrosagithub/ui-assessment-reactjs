import React from 'react';
import styled from 'styled-components';
import SupportContact from './SupportContact/support-contact';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 30px;
`;

const Title = styled.h2`
  margin: 0;
  color: #423f3f;
  font-size: 2.5rem;
`;

const Header = ({ data }) => {
  return (
    <Container data-testid="header">
      <Title>Account Overview</Title>
      <SupportContact data={data.supportContact} />
    </Container>
  );
};

export default Header;
