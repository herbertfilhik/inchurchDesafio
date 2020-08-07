$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 367746859,
  "status": "passed"
});
formatter.before({
  "duration": 53844,
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
  "duration": 12861489811,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_search_for_Entrar_como_visitante()"
});
formatter.result({
  "duration": 6590520275,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_make_login_on_system()"
});
formatter.result({
  "duration": 28559773802,
  "status": "passed"
});
formatter.after({
  "duration": 2457828836,
  "status": "passed"
});
formatter.after({
  "duration": 27151,
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
  "duration": 135090163,
  "status": "passed"
});
formatter.before({
  "duration": 17689,
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
  "duration": 10886301801,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.inputdatafornewuser()"
});
formatter.result({
  "duration": 6485709897,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.insertregisteronthebase()"
});
formatter.result({
  "duration": 28832090778,
  "status": "passed"
});
formatter.after({
  "duration": 2440119649,
  "status": "passed"
});
formatter.after({
  "duration": 19140,
  "status": "passed"
});
});