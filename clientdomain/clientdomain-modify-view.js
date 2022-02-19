import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function ClientDomainModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, onBlur}) {
    
	let formName = "SYSTEM_CLIENT_DOMAIN_FORM";
	let formTitle = "Client Domain";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup}
    	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange}/>
    );
}


ClientDomainModifyView.propTypes = {
	itemState: PropTypes.object.isRequired,
	appPrefs: PropTypes.object.isRequired,
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
	inputChange: PropTypes.func,
	onBlur: PropTypes.func
};
