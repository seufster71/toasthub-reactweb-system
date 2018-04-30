import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../../coreView/common/table';

export default function ClientDomainView({clientdomains }) {

  let columns = [];
  if (clientdomains.appLabels != null && clientdomains.appLabels.SYSTEM_CLIENTDOMAIN_TABLE != null) {
    columns = clientdomains.appLabels.SYSTEM_CLIENTDOMAIN_TABLE;
  }

    return (
      <Table items={clientdomains.items} columns={columns} />
    );
}


ClientDomainView.propTypes = {
  clientdomains: PropTypes.object
};
