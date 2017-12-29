import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends PureComponent {
	static contextTypes = {
		routes: PropTypes.array,
		location: PropTypes.object,
		breadcrumbNameMap: PropTypes.object,
	}

	
}