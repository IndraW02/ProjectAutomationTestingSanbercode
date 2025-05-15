import loginPage from "../support/loginPage";
import dashboardPage from "../support/dashboardPage";

describe("Access Directory Menu", () => {
  it("should login and open Directory menu", () => {
    loginPage.visit();
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    dashboardPage.clickMenuDirectory();
    dashboardPage.verifyDirectoryPageLoaded();
  });
});
