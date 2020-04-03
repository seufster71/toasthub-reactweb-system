import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function ClientDomainView({clientDomains }) {

  let columns = [];
  if (clientDomains.prefLabels != null && clientDomains.prefLabels.SYSTEM_CLIENT_DOMAIN_TABLE != null) {
    columns = clientDomains.prefLabels.SYSTEM_CLIENT_DOMAIN_TABLE;
  }

    return (
      <Table items={clientDomains.items} columns={columns} />
    );
}


ClientDomainView.propTypes = {
  clientDomains: PropTypes.object
};
