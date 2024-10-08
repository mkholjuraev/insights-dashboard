const { IntlProvider } = require('@redhat-cloud-services/frontend-components-translations');
const { default: DeniedState } = require('./DeniedState');
import React from 'react';

import messages from '../../../locales/data.json';

describe('DeniedState', () => {
    it('renders correctly', () => {
        cy.mount(
            <IntlProvider messages={messages}>
                <DeniedState appName={'Foobar'}/>
            </IntlProvider>
        );
        cy.get('.pf-v5-c-empty-state__title-text').should('have.text', 'You do not have access to Foobar');
    });
});
