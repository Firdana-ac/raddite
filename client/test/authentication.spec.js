// // Generated by Selenium IDE
// const config = require('../config');
// const { Builder, By, Key, until } = require('selenium-webdriver');

// const { rootUrl, localAdmin, e2e: { drivers } } = config;

// drivers.forEach(driverName =>
// {
//   describe('Authentication', () =>
//   {
//     const { email, password } = localAdmin;
//     let driver

//     beforeEach(async () => 
//     {
//       driver = await new Builder().forBrowser(driverName).build()
//     });

//     afterEach(async () => 
//     {
//       await driver.quit();
//     });

//     it('lets you log in', async () => 
//     {
//       await driver.get(rootUrl)
//       await driver.findElement(By.linkText("Login")).click()
//       await driver.findElement(By.name("email")).sendKeys(email)
//       await driver.findElement(By.name("email")).sendKeys(Key.ENTER)
//       await driver.findElement(By.name("password")).sendKeys(password)
//       await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
//       await driver.wait(until.elementTextContains(driver.findElement(By.css('.navbar-brand')), 'Welcome John Doe'), 1000)
//     });
//   })
// });