package stepdefinitions.inchurch;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.github.javafaker.Faker;

import core.DriverFactory;

import static core.DriverFactory.getDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserSteps {
	Faker faker = new Faker();
	private long time = 5000;
	private String name = faker.name().fullName();
	private String emailNovoUsuario = faker.internet().safeEmailAddress();
	private String senha = faker.internet().password();
	private String confirmarSenha = senha;
	private String igrejaLocal = "Igreja Amiga do Povo";

	@Before
	public void beforeScenario() {
	}

	@After
	public void afterScenario() {
		DriverFactory.killDriver();
	}

	@Given("^I am on inchurch site to create a user$")
	public void i_am_on_inchurch_site() throws Throwable {
		getDriver().get("https://qa-suaigreja.inchurch.com.br/");
		sleep(time);
	}

	@When("^I search for Entrar como visitante to open option and input data for new user$")
	public void inputdatafornewuser() throws Throwable {
		Actions actions = new Actions(getDriver());
		String actualUrl = getDriver().getCurrentUrl();
		String expectedUrl = "https://qa-suaigreja.inchurch.com.br/#/";
		Assert.assertEquals(actualUrl, expectedUrl, "https://qa-suaigreja.inchurch.com.br/#/");
		WebElement elementLocator = getDriver().findElement(By.xpath("/html/body/div[2]/div/div/div[2]/a"));
		actions.click(elementLocator).perform();
		sleep(time);
		WebElement noWantButton = getDriver().findElement(By.xpath("//*[@id=\"onesignal-slidedown-cancel-button\"]"));
		noWantButton.click();
		sleep(time);
	}

	@Then("^I must be inform data to insert register on the base$")
	public void insertregisteronthebase() throws Throwable {
		WebElement logInButton = getDriver().findElement(By.xpath("/html/body/div[2]/header/div[1]/a[1]"));
		logInButton.click();
		sleep(time);
		WebElement linkRegistrese = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div/p[2]/a"));
		linkRegistrese.click();
		sleep(time);
		WebElement txtName = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/div[1]/input"));
		txtName.click();
		txtName.sendKeys(name);
		sleep(time);
		WebElement txtMail = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/div[2]/input"));
		txtMail.click();
		txtMail.sendKeys(emailNovoUsuario);
		sleep(time);
		WebElement txtPassword = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/div[3]/input"));
		txtPassword.click();
		txtPassword.sendKeys(senha);
		sleep(time);
		WebElement txtConfirmPassword = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/div[4]/input"));
		txtConfirmPassword.click();
		txtConfirmPassword.sendKeys(confirmarSenha);
		sleep(time);
		WebElement comboIgrejaLocal = getDriver().findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/div[5]/select"));
		Select selectObject = new Select(comboIgrejaLocal);
		selectObject.selectByVisibleText(igrejaLocal);
		sleep(time);
		WebElement createUserButton = getDriver().findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/form/div/div/button"));
		createUserButton.click();
		sleep(time);
		WebElement confirmeNewUser = getDriver().findElement(By.xpath("/html/body/div[1]/div/div/div[1]/h3"));
		String actualNewUserText = confirmeNewUser.getText();
		String expectedNewUserText = "Confirmação de E-mail";
		Assert.assertEquals(expectedNewUserText, actualNewUserText);
		sleep(time);
	}

	private void sleep(long m) {
		try {
			Thread.sleep(m);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
