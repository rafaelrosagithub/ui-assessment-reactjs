import React from 'react';
import styled from 'styled-components';
import UploadSuccess from './uploadsuccess';
import LinesSaved from './linesSaved';
import { salesOverviewPropTypes } from '../../../utils/propsTypesValidation';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  margin-top: 3px;
`;


const SalesData = ({ data }) => {
  return (
    <GridContainer data-testid="sales-data">
      <UploadSuccess data={data}/>
      <LinesSaved data={data}/>
    </GridContainer>
  );
};

// Using centralized PropTypes
SalesData.propTypes = {
  data: salesOverviewPropTypes.isRequired,
};

export default SalesData;
