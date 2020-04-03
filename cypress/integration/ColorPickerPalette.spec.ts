/// <reference types="cypress" />

const CANVAS = '[data-cy=canvas]';
const RESULT_HEX = '[data-cy=result-hex]';
const RESULT_RGB = '[data-cy=result-rgb]';
const PICKED_COLOR = '[data-cy=picked-color]';
const PICKED_PREV_COLOR = '[data-cy=picked-prevColor]';

const COLOR_1 = '#00fdec';
const COLOR_2 = 'rgb(0, 253, 236)';
const COLOR_3 = 'rgba(0, 0, 0, 0)';

describe('ColorPickerPalette', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=colorpickerpalette--light', { timeout: 10000 });
  });

  it('should display results as transparent', () => {
    cy.get(PICKED_COLOR).should('have.css', 'background-color', COLOR_3);
    cy.get(PICKED_PREV_COLOR).should('have.css', 'background-color', COLOR_3);
  });

  it('should display hex and rgb colors in results', () => {
    cy.get(CANVAS).click();
    cy.get(RESULT_HEX).should('contain', COLOR_1);
    cy.get(RESULT_RGB).should('contain', COLOR_2);
  });

  it('should display picked with previouse and current colors', () => {
    cy.get(CANVAS).click();
    cy.get(PICKED_COLOR).should('have.css', 'background-color', COLOR_2);
    cy.get(PICKED_PREV_COLOR).should('have.css', 'background-color', COLOR_3);
  });
});
