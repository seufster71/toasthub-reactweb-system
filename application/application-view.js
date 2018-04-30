import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function ApplicationView({applications }) {

  let columns = [];
  if (applications.appLabels != null && applications.appLabels.SYSTEM_APPLICATION_TABLE != null) {
    columns = applications.appLabels.SYSTEM_APPLICATION_TABLE;
  }
  return (
    <Table items={applications.items} columns={columns} />
  );
}


ApplicationView.propTypes = {
  applications: PropTypes.object
};
