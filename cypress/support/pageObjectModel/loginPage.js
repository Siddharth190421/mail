export class LoginPage {
    visit() {
      cy.visit('https://mailosaur.com/app/servers/ddqjhhki/messages/inbox');

    }
  
    enterEmail(email) {
      cy.get('#email').type(email);
    }
  
    clickContinue() {
      cy.contains('Continue').click();
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('[type="submit"]').click();
    }
  }

  