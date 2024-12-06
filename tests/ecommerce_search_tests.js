const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Search Functionality Tests", function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("Test Case 1.1: Exact product name", async function () {
    await driver.get("https://www.YOUR_URL.com/"); // I've changed the URL for portfolio
    await driver
      .findElement(By.name("search"))
      .sendKeys("iPhone 14 Pro", Key.RETURN);
    await driver.wait(until.elementLocated(By.css(".product-item")), 5000);
    let firstProduct = await driver
      .findElement(By.css(".product-item"))
      .getText();

    expect(firstProduct).to.include("iPhone 14 Pro");
  });

  it("Test Case 2.1: Partial keywords", async function () {
    await driver.findElement(By.name("search")).clear();
    await driver
      .findElement(By.name("search"))
      .sendKeys("iPhone 14", Key.RETURN);
    await driver.wait(until.elementLocated(By.css(".product-item")), 5000);
    let results = await driver.findElements(By.css(".product-item"));

    expect(results.length).to.be.greaterThan(0);
  });

  it("Test Case 3.1: Misspelled keywords", async function () {
    await driver.findElement(By.name("search")).clear();
    await driver
      .findElement(By.name("search"))
      .sendKeys("iPhon 14", Key.RETURN);
    let suggestion = await driver.findElement(By.css(".suggestion")).getText();

    expect(suggestion).to.include("Did you mean: iPhone 14");
  });

  it("Test Case 4.1: Filtering results by price", async function () {
    await driver.findElement(By.name("search")).clear();
    await driver.findElement(By.name("search")).sendKeys("laptop", Key.RETURN);
    await driver.wait(until.elementLocated(By.id("filter-price")), 5000);
    await driver
      .findElement(By.id("filter-price"))
      .sendKeys("Under $1000", Key.RETURN);
    let filteredResults = await driver.findElements(By.css(".product-item"));

    expect(filteredResults.length).to.be.greaterThan(0);
  });

  it("Test Case 6.1: Empty search", async function () {
    await driver.findElement(By.name("search")).clear();
    await driver.findElement(By.name("search")).sendKeys("", Key.RETURN);
    let emptyMessage = await driver
      .findElement(By.css(".error-message"))
      .getText();

    expect(emptyMessage).to.equal("Please enter a keyword to search.");
  });
});
