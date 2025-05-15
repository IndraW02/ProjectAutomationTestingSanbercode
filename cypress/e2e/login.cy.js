import loginPage from "../support/loginPage";

describe("Login Test with Intercept and POM", () => {
  it("should login successfully", () => {
    loginPage.visit();
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });
});
