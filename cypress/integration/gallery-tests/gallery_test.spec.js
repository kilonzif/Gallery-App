describe('Gallery App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the home page', () => {
      cy.contains('Welcome to the Gallery App').should('be.visible');
    });
  
    it('should navigate to Sign In page', () => {
      cy.contains('Sign In').click();
      cy.url().should('include', '/signin');
    });
  
    it('should navigate to Sign Up page', () => {
      cy.contains('Sign Up').click();
      cy.url().should('include', '/signup');
    });
  
    it('should navigate to Gallery page', () => {
      cy.contains('Gallery').click();
      cy.url().should('include', '/gallery');
    });
  });
  