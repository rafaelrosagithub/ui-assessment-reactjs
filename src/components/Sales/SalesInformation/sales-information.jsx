import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { salesOverviewPropTypes } from '../../../utils/propsTypesValidation';


const Container = styled.div`
  background-color: #ffffff;
  height: 110px;  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-left: 10px;
  color: #423f3f;
  font-size: 1.6rem;
  font-weight: bold;
`;

const Description = styled.span`
  margin-top: 25px;
  color: #808080;
  font-size: 1.4rem;
  font-weight: bold;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  color: #474747;
`;

const InfoTooltip = styled.span`
  position: absolute;
  top: 180px;
  left: 74%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;

const SalesInformation = ({ data }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container data-testid="sales-information">
      <Header>
        <LeftSection>
          <FontAwesomeIcon icon={faUpload} color="#3eaeea" size="2x" />
          <Title>Sales</Title>
        </LeftSection>
        <FontAwesomeIcon   icon={faInfoCircle}
          color="#bebabb"
          size="2x"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}/>
      </Header>
      <Description>You had <BoldSpan>{data.uploads} uploads</BoldSpan> and <BoldSpan>{data.linesAttempted}</BoldSpan> lines added.</Description>
      <InfoTooltip visible={showTooltip}>
        Useful information when hovering the mouse
      </InfoTooltip>
  </Container>
  );
};

// Using centralized PropTypes
SalesInformation.propTypes = {
  data: salesOverviewPropTypes.isRequired,
};

export default SalesInformation;
