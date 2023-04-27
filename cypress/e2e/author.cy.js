context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-quote");
  });

  it("type into the author input using a correct author name and a correct quote", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lionel Messi");
      cy.get('[name="quote"]').type(
        "Sin la ayuda de mis compañeros no seria nada de nada"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/all-quotes");
  });

  it("type into the author input using an author name with special characters", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lionel Me$si");
      cy.get('[name="quote"]').type(
        "Sin la ayuda de mis compañeros no seria nada de nada"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });

  it("type into the author input using a short author name", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lio");
      cy.get('[name="quote"]').type(
        "Sin la ayuda de mis compañeros no seria nada de nada"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });

  it("Dont type into the author input", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="quote"]').type(
        "Sin la ayuda de mis compañeros no seria nada de nada"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });
});
