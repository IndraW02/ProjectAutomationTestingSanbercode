class ForgotPasswordPage {
  clickForgotPassword() {
    cy.get(".orangehrm-login-forgot").click();
  }

  enterUsername(username) {
    cy.get("input[placeholder='Username']").type(username);
  }

  clickResetPassword() {
    cy.intercept("POST", "**/auth/sendPasswordReset").as("resetRequest");
    cy.get("button[type='submit']").click();
    cy.wait(2000);
    cy.url().should("include", "/sendPasswordReset");
  }
}
export default new ForgotPasswordPage();
