$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login1.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Test Page",
  "description": "",
  "id": "sample-test-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Sample Login Page",
  "description": "",
  "id": "sample-test-page;sample-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch google chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003ckeyword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "title of login page is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "take the screen shot the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "sample-test-page;sample-login-page;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 10,
      "id": "sample-test-page;sample-login-page;;1"
    },
    {
      "cells": [
        "Bahamas"
      ],
      "line": 11,
      "id": "sample-test-page;sample-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Sample Login Page",
  "description": "",
  "id": "sample-test-page;sample-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch google chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Bahamas\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "title of login page is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "take the screen shot the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bahamas",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.enter_keyword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
});