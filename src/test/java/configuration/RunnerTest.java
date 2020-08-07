package configuration;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import core.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/htmlreports" }, features = {
		"src/test/resources/features/inchurch/" }, glue = { "stepdefinitions" })
public class RunnerTest {
	@AfterClass
	public static void finalizaTudo() {
		DriverFactory.killDriver();
	}
}
