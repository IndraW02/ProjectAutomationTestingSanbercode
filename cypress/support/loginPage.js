class LoginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  enterUsername(username) {
    cy.get("input[name='username']").type(username);
  }

  enterPassword(password) {
    cy.get("input[name='password']").type(password);
  }

  clickLogin() {
    cy.intercept("POST", "/web/index.php/api/v2/login").as("loginRequest");
    cy.get("button[type='submit']").click();
    cy.wait(2000);
    cy.url().should("include", "/dashboard");
  }
}
export default new LoginPage();
