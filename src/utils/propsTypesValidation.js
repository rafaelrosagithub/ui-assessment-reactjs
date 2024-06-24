import PropTypes from 'prop-types';

// PropTypes para supportContact 
export const supportContactPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

// PropTypes para salesOverview
export const salesOverviewPropTypes = PropTypes.shape({
  uploads: PropTypes.number.isRequired,
  successfulUploads: PropTypes.number.isRequired,
  linesAttempted: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
  lastUploadDate: PropTypes.number.isRequired,
});

// PropTypes para accountOverview
export const accountOverviewPropTypes = PropTypes.shape({
  supportContact: supportContactPropTypes.isRequired,
  salesOverview: salesOverviewPropTypes.isRequired,
});
