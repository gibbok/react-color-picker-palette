/// <reference types="cypress" />

const CANVAS = '[data-cy=canvas]';
const RESULT_HEX = '[data-cy=result-hex]';
const RESULT_RGB = '[data-cy=result-rgb]';
const PICKED_COLOR = '[data-cy=picked-color]';
const PICKED_PREV_COLOR = '[data-cy=picked-prevColor]';

describe('ColorPickerPalette', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=colorpickerpalette--light', { timeout: 10000 });
  });

  describe('pickup color on palette', () => {
    it('should display in results hex and rgb colors', () => {
      cy.get(CANVAS).click();
      cy.get(RESULT_HEX).should('contain', '#00fdec');
      cy.get(RESULT_RGB).should('contain', 'rgb(0, 253, 236)');
      cy.get(PICKED_COLOR).should('have.css', 'background-color', 'rgb(0, 253, 236)');
      cy.get(PICKED_PREV_COLOR).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });
  });
});
