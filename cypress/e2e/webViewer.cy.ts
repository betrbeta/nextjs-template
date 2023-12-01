import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import app from "../../lib/filebase/firebaseConfig";

describe("visit homepage", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Webpage Viewer App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should display the home page", () => {
    cy.contains("Webpage Viewer").should("be.visible");
  });
  it("should navigate to mySubscription page", () => {
    cy.contains("Subscription").click();
    cy.url().should("include", "/mySubscription");
  });
  it("should navigate to Feedback page", () => {
    cy.contains("Feedback Form").click();
    cy.url().should("include", "/feedback");
  });
});

describe("get data from FireStore", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should loaded table data from Firestore", async () => {
    const snapshot = await getDocs(
      query(collection(getFirestore(app), "subscriptions"))
    );
    const subscriptionData = snapshot.docs.map((doc) => doc.data());

    cy.contains("Subscription").click();
    cy.url().should("include", "/mySubscription");
    cy.get("table")
      .find("tr")
      .should("have.length", subscriptionData.length + 1);
  });
});
