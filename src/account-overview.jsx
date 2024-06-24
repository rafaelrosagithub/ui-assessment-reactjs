import React from 'react';
import './account-overview.css';
import Header from './components/Header/header';
import SalesInformation from './components/Sales/SalesInformation/sales-information'
import SalesData from './components/Sales/SalesData/sales-data';
import { accountOverviewPropTypes } from './utils/propsTypesValidation'

export const AccountOverview = ({data}) => {

  return (
    <div className="AccountOverview">
      <Header data={data}/>
      <SalesInformation data={data.salesOverview}/>
      <SalesData data={data.salesOverview}/>
    </div>
  )

}

// Using centralized PropTypes
AccountOverview.propTypes = {
  data: accountOverviewPropTypes.isRequired,
};

export default AccountOverview;