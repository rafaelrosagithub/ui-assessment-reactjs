import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import { accountOverviewStub } from './Mocks/mockData'; 
import Header from './components/Header/header';
import UploadSuccess from './components/Sales/SalesData/uploadsuccess';
import LinesSaved from './components/Sales/SalesData/linesSaved';

test('Renders components inside AccountOverview', () => {
  render(<AccountOverview data={accountOverviewStub} />);
  
 // Checks the presence of each component
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('sales-information')).toBeInTheDocument();
  expect(screen.getByTestId('sales-data')).toBeInTheDocument();
});


test('Checks if the text exists inside the component', () => {
  render(<Header data={accountOverviewStub}/>);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});

test('Checks if the text exists inside the component', () => {
  render(<UploadSuccess data={accountOverviewStub}/>);
  const element = screen.getByText(/UPLOAD SUCCESS/i);
  expect(element).toBeInTheDocument();
});

test('Checks if the text exists inside the component', () => {
  render(<LinesSaved data={accountOverviewStub}/>);
  const element = screen.getByText(/LINES SAVED/i);
  expect(element).toBeInTheDocument();
});



