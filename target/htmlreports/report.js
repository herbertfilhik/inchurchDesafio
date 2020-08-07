$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 349296894,
  "status": "passed"
});
formatter.before({
  "duration": 45171,
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
  "duration": 7492207400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_search_for_Entrar_como_visitante()"
});
formatter.result({
  "duration": 6518119942,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_make_login_on_system()"
});
formatter.result({
  "duration": 28598947345,
  "status": "passed"
});
formatter.after({
  "duration": 1422238021,
  "status": "passed"
});
formatter.after({
  "duration": 24118,
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
  "duration": 182151879,
  "status": "passed"
});
formatter.before({
  "duration": 41799,
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
  "duration": 9715943515,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.inputdatafornewuser()"
});
formatter.result({
  "duration": 6485187621,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.insertregisteronthebase()"
});
formatter.result({
  "duration": 28890845252,
  "status": "passed"
});
formatter.after({
  "duration": 605608234,
  "status": "passed"
});
formatter.after({
  "duration": 13150,
  "status": "passed"
});
});