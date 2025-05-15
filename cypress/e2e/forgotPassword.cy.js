import forgotPasswordPage from "../support/forgotPasswordPage";

describe("Forgot Password Test with Intercept and POM", () => {
  it("should send password reset", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.enterUsername("Admin");
    forgotPasswordPage.clickResetPassword();
  });
});
