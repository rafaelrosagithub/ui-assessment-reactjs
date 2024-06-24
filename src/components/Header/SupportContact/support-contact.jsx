import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { supportContactPropTypes } from '../../../utils/propsTypesValidation';

const SupportContactContainer = styled.div`
  width: 54%;
  height: 100px;
  margin-left: -30px;
  border-radius: 4px;
`;

const AccountTitle = styled.p`
  margin: 0;
  text-align: left;
  color: #9d9999;
  font-size: 1.3rem;
  font-weight: bold;
`;

const ContainerSuport = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 1.2rem;
  align-items: center;
`;

const CustomIcon = styled.div`
  background-color: #f9cf03;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 17px;
`;

const SupportText = styled.div`
    font-weight: bold;
    color: #423f3f;
`;

const EmailContact = styled.div`
  margin-top: 5px;
`;

const EmailSupoport = styled.span`
  margin-left: 10px;
  color: #808080;
  font-weight: bold;
`;

const NumberSupoport = styled.span`
  margin-left: 30px;
  color: #808080;
  font-weight: bold;
`;

const SupportContact = ({ data }) => {
  return (
    <SupportContactContainer>
        <AccountTitle>YOUR FEEFO SUPPORT CONTACT</AccountTitle>
        <ContainerSuport>
          <CustomIcon>S</CustomIcon>
          <ContentWrapper>
            <SupportText>Support</SupportText>
            <EmailContact>  
              <FontAwesomeIcon icon={faEnvelope} color="#606060"/>
              <EmailSupoport>{data.email}</EmailSupoport>
              <NumberSupoport>020 3362 4208</NumberSupoport>
            </EmailContact>
          </ContentWrapper>
        </ContainerSuport>
    </SupportContactContainer>
  );
};

// Using centralized PropTypes
SupportContact.propTypes = {
  data: supportContactPropTypes.isRequired,
};

export default SupportContact;
