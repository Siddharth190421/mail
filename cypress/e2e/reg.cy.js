describe('rege', () => {
    it("regestration",()=>{
        cy.visit("https://mailosaur.com/app/signup");
        cy.get("#email").type("arrive-involved@ddqjhhki.mailosaur.net");
        cy.get(`[type="submit"]`).contains("Create your account").click();
    })
})