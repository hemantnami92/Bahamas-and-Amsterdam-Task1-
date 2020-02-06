package stepDefinitions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition{

	 WebDriver driver;
String keyword;
	
/*
 * Launch the browser
 */


	 @Given("^Launch google chrome$")
	 public void user_already_on_login_page(){
			System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://www.google.co.in");
	 }
	
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	 
	 
	 /*
	  * 
	  * Provide the data into the serach box
	  */
	
	 @Then("^user enters \"([^\"]*)\"$")
	 public void enter_keyword(String keyword){
		 this.keyword=keyword;
	 driver.findElement(By.name("q")).sendKeys(keyword);
		 System.out.println("m2");
		 Actions a=new Actions(driver);
		 a.sendKeys(Keys.ENTER).build().perform();
	 }
	 
	 
/*
 * Assert the value in the page
 */
	 @When("^title of login page is displayed$")
	 public void title_of_login_page_is_free_CRM(){
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals(keyword+" - Google Search", title);

	 }
	/*
	 * Take a screen shot and store in the screenshot folder
	 */
	
	 @Then("^take the screen shot the page$")
	 public void user_clicks_on_login_button() throws IOException {
		 TakesScreenshot ts = (TakesScreenshot)driver;
		 File source = ts.getScreenshotAs(OutputType.FILE);
		 FileUtils.copyFile(source, new File("./screenshots/"+keyword+".png"));
		 System.out.println("the Screenshot is taken");	 
		 
	
		 }
	
	
	 @Then("^close browser$")
	 public void close_browser(){
	driver.close();
	 }
	 
	 

	
	

}
