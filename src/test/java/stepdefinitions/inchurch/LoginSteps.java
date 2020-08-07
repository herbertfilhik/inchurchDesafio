package stepdefinitions.inchurch;

import static core.DriverFactory.getDriver;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import core.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	private String email = "desafio@qa.inchurch.com";
	private String password = "qainchurch";
	private long time = 3000;

	@Before
	public void beforeScenario() {
	}

	@After
	public void afterScenario() {
		DriverFactory.killDriver();
	}

	@Given("^I am on inchurch site$")
	public void i_am_on_inchurch_site() throws Throwable {
		getDriver().get("https://qa-suaigreja.inchurch.com.br/");
	}

	@When("^I search for Entrar como visitante$")
	public void i_search_for_Entrar_como_visitante() throws Throwable {
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

	@Then("^I should make login on system and validate the user name$")
	public void i_should_make_login_on_system() throws Throwable {
		WebElement logInButton = getDriver().findElement(By.xpath("/html/body/div[2]/header/div[1]/a[1]"));
		logInButton.click();
		sleep(time);
		WebElement logInTxtEmail = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div/div/form/div[1]/input"));
		logInTxtEmail.click();
		logInTxtEmail.sendKeys(email);
		sleep(time);
		WebElement logInTxtPassword = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div/div/form/div[2]/input"));
		logInTxtPassword.click();
		logInTxtPassword.sendKeys(password);
		sleep(time);
		WebElement enterButton = getDriver()
				.findElement(By.xpath("/html/body/div[2]/div/div[2]/section/div/div/div/div/form/button"));
		enterButton.click();
		sleep(time);
		Actions action = new Actions(getDriver());
		WebElement accountUser = getDriver()
				.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/div[2]/ul/li[12]/img"));
		action.moveToElement(accountUser).perform();
		WebElement verifyPerfil = getDriver()
				.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/div[2]/ul/li[12]/ul/li[1]/a"));
		String actualPerfilText = verifyPerfil.getText();
		String expectedPerfilText = "Perfil";
		Assert.assertEquals(expectedPerfilText, actualPerfilText);
		verifyPerfil.click();
		sleep(time);
		WebElement verifyUserName = getDriver().findElement(By.name("full_name"));
		String actualUserNameText = verifyUserName.getAttribute("value");
		String expectedUserNameText = "Usuário para desafio";
		Assert.assertEquals(expectedUserNameText, actualUserNameText);
		sleep(time);
		WebElement linkSuaIgreja = getDriver().findElement(By.xpath("/html/body/div[2]/header/div/div/nav/div[1]/a/img"));
		linkSuaIgreja.click();
		sleep(time);
		WebElement accountUserLogout = getDriver()
				.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/div[2]/ul/li[12]/a"));
		action.moveToElement(accountUserLogout).perform();
		sleep(time);
		WebElement verifyLogout = getDriver()
				.findElement(By.xpath("/html/body/div[2]/header/div/div/nav/div[2]/ul/li[12]/ul/li[8]/a"));
		verifyLogout.click();
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
