context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-quote");
  });

  it("type into the author input using a correct author name and a correct quote", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Sócrates");
      cy.get('[name="quote"]').type(
        "La verdadera sabiduría está en reconocer la propia ignorancia"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/all-quotes");
  });

  it("type into the quote input using a quote that contains less than 20 characters", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lionel Messi");
      cy.get('[name="quote"]').type("Sin la ayuda");
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });

  it("type into the quote input using a quote that contains special characters", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lionel Messi");
      cy.get('[name="quote"]').type(
        "Sin la @yuda de mis compañeros no seria nada de nada"
      );
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });

  it("Don't type into the quote input", () => {
    cy.get(".add-form").within(() => {
      cy.get('[name="author"]').type("Lionel Messi");
      cy.get('[type="submit"]').click();
    });
    cy.url().should("include", "/add-quote/error");
  });
});
