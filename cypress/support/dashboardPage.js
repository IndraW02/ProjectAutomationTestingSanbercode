class DashboardPage {
  clickMenuDirectory() {
    cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
  }

  verifyDirectoryPageLoaded() {
    cy.url().should("include", "/directory/viewDirectory");
    cy.contains("Directory").should("exist");
  }
}
export default new DashboardPage();
