/// <reference types="cypress" />

import { camel2snake } from './util.ts';

Cypress.Commands.add('interrupt', () => {
  eval("window.top.document.body.querySelector('header button.stop').click()");
});

Cypress.Commands.add('spyAllApiCalls', () => {
  cy.intercept(`${Cypress.config('baseUrl')}/api/**`).as('apicalls');
});

Cypress.Commands.add('g', (testId, params = {}) => {
  cy.get(`[data-test-id='${testId}']`, params);
});

Cypress.Commands.add('clearPjs', () => {
  cy.request('GET', `${Cypress.config('baseUrl')}/api/projects`).then((res) => {
    console.log('res', res.body);
    for (const pj of res.body) {
      cy.request('DELETE', `${Cypress.config('baseUrl')}/api/projects/${pj.project_id}`);
    }
  });
});

Cypress.Commands.add('onPage', (urlPart, allowError: boolean = false) => {
  if (!allowError)
    cy.get('[class="ant-message-custom-content ant-message-error"]', { timeout: 100 }).should(
      'not.exist',
    );
  const url_part = camel2snake(urlPart);
  cy.url({ timeout: 15000 }).should('contain', url_part);
  if (!allowError)
    cy.get('[class="ant-message-custom-content ant-message-error"]', { timeout: 100 }).should(
      'not.exist',
    );
  cy.wait('@apicalls', { timeout: 15000 });
  if (!allowError)
    cy.get('[class="ant-message-custom-content ant-message-error"]', { timeout: 100 }).should(
      'not.exist',
    );
  cy.g('global.loading').should('not.exist');
  if (!allowError)
    cy.get('[class="ant-message-custom-content ant-message-error"]', { timeout: 100 }).should(
      'not.exist',
    );
});

Cypress.Commands.add('printDebugId', (debugId: string) => {
  debugId = debugId.replace(/\//g, '|');
  console.log('replace', debugId);
  cy.request('GET', `${Cypress.config('baseUrl')}/api/debug/printid/${debugId}`);
});
