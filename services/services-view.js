import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function ServicesView({services}) {

  let columns = [];
  if (services.appLabels != null && services.appLabels.SYSTEM_SERVICE_CRAWLER_TABLE != null) {
    columns = services.appLabels.SYSTEM_SERVICE_CRAWLER_TABLE;
  }
  return (
    <Table items={services.items} columns={columns} />
  );
}


ServicesView.propTypes = {
  services: PropTypes.object
};
