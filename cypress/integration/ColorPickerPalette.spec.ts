/// <reference types="cypress" />

const CANVAS = '[data-cy=canvas]';
const RESULT_HEX = '[data-cy=result-hex]';
const RESULT_RGB = '[data-cy=result-rgb]';
const PICKED_COLOR = '[data-cy=picked-color]';
const PICKED_PREV_COLOR = '[data-cy=picked-prevColor]';
const MARKER = '[data-cy=marker]';

const COLOR_1 = '#00fae5';
const COLOR_2 = 'rgb(0, 250, 229)';
const COLOR_3 = 'rgba(0, 0, 0, 0)';

describe('ColorPickerPalette', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=colorpickerpalette--light');
  });

  it('should display results as transparent', () => {
    cy.get(PICKED_COLOR).should('have.css', 'background-color', COLOR_3);
    cy.get(PICKED_PREV_COLOR).should('have.css', 'background-color', COLOR_3);
  });

  it('should render marker on palette', () => {
    cy.get(CANVAS).click();
    cy.get(MARKER)
      .should('exist')
      .should('have.css', 'top', '88.5px')
      .should('have.css', 'left', '163.5px');
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
