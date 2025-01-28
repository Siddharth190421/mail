import { LoginPage } from "../support/pageObjectModel/loginPage";
import { MailPage } from "../support/pageObjectModel/mailpage";

describe('template spec with POM', () => {
  const loginPage = new LoginPage();
  const mailPage = new MailPage();


  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
    Cypress.session.clearAllSavedSessions();
    Cypress.session.clearCurrentSessionData();
    cy.intercept("GET","/api/messages?server=ddqjhhki&page=0&itemsPerPage=50&dir=Received").as("all")
  });

  it('Login ', () => {

    loginPage.visit();
    loginPage.enterEmail('sumit.rai@testriq.com');
    loginPage.clickContinue();
    loginPage.enterPassword('Logitech@2');
    loginPage.submit();
    cy.wait('@all')
  });

  it('Create email and send', () => {
    mailPage.visit();
    mailPage.composeMail('sumit.rai@testriq.com', 'Hello Test', 'This Description of the test email');
  });

  it('Read Recevied Email and Validate content', () => {
    mailPage.visit();
    mailPage.searchMail('cypress');
    mailPage.verifySearchResult('cypress' , "cytest\n");
 
  });

  it
  ('Search Email' , () =>{
    mailPage.visit();
    cy.wait('@all')
    mailPage.sentButton();
    mailPage.searchMail('Sent Test');
    mailPage.verifySearchResult('Sent Test' ,"Test Sent");
  })
});
