/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/?path=/story/colorpickerpalette--light', { timeout: 10000 });
  });

  it('should click on canvas', () => {
    cy.get('canvas').click('topLeft');
  });
});
