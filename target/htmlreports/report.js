$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 326045129,
  "status": "passed"
});
formatter.before({
  "duration": 43805,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login to inchurch site and validate the user name",
  "description": "",
  "id": "login;login-to-inchurch-site-and-validate-the-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on inchurch site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Entrar como visitante",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should make login on system and validate the user name",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_inchurch_site()"
});
formatter.result({
  "duration": 7027373644,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_search_for_Entrar_como_visitante()"
});
formatter.result({
  "duration": 79260041,
  "error_message": "org.openqa.selenium.WebDriverException: TypeError: rect is undefined\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027herberts-MacBook-Pro.local\u0027, ip: \u00272804:431:c7e0:6c73:1d00:5a67:9ac0:e885%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 28100, moz:profile: /var/folders/7t/pcfjnxqn27s..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 19.5.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 804d1e33-8ab6-874a-b841-65c0c8017aa9\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\tat stepdefinitions.inchurch.LoginSteps.i_search_for_Entrar_como_visitante(LoginSteps.java:43)\n\tat ✽.When I search for Entrar como visitante(login.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_should_make_login_on_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4428850256,
  "status": "passed"
});
formatter.after({
  "duration": 25823,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "Create User",
  "description": "",
  "id": "create-user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 178866722,
  "status": "passed"
});
formatter.before({
  "duration": 17914,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new user for inchurch",
  "description": "",
  "id": "create-user;create-a-new-user-for-inchurch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on inchurch site to create a user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for Entrar como visitante to open option and input data for new user",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I must be inform data to insert register on the base",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.i_am_on_inchurch_site()"
});
formatter.result({
  "duration": 10759508153,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.inputdatafornewuser()"
});
formatter.result({
  "duration": 6514257777,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.insertregisteronthebase()"
});
formatter.result({
  "duration": 28846297600,
  "status": "passed"
});
formatter.after({
  "duration": 581130992,
  "status": "passed"
});
formatter.after({
  "duration": 20549,
  "status": "passed"
});
});