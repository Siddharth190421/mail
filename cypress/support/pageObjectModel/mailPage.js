export class MailPage {
    visit() {
      cy.visit('https://mailosaur.com/app/servers/ddqjhhki/messages/inbox');
    }
  
    composeMail(to, subject, body) {
      cy.contains('Compose').click();
      cy.get('[data-testid="to-input"]').type(`${to}, {enter}`);
      cy.get('[data-testid="subject-input"]').click({ force: true }).type(subject);
      cy.get('[data-testid="html-input"]').type(body);
      cy.get('[data-testid="send-btn"]').click({ force: true });
    }
  
    searchMail(query) {
      cy.get('[data-testid="header-filter-input"]').type(`${query} {enter}`); //keyboard action and event
      cy.wait(3000)
    }
  
    verifySearchResult(subject , body) {
      cy.get('[data-testid="subject"]').eq(0).should('have.text', subject);
      cy.get('[data-testid="subject"]').first().click({ multiple: true });
      cy.get('#mailcontainer').should('have.text', body);


    }

    sentButton(){
      cy.get('[data-testid="tab-/app/servers/ddqjhhki/messages/sent"]').click();
    }
  }