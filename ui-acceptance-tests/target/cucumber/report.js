$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/apitest.feature");
formatter.feature({
  "line": 1,
  "name": "Api level test of Time Machine",
  "description": "As world time checker\nI want to be able add times for different countrisin a table",
  "id": "api-level-test-of-time-machine",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "time is diplaying correctly",
  "description": "",
  "id": "api-level-test-of-time-machine;time-is-diplaying-correctly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have entered the url for time",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Then I assert a 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_have_entered_the_url_for_time()"
});
formatter.result({
  "duration": 126874186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 16
    }
  ],
  "location": "StepDef.then_I_assert_a_is_returned(int)"
});
formatter.result({
  "duration": 1203141664,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c404\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:598)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1597)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:160)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.get(ResponseSpecificationImpl.groovy:289)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.get(ResponseSpecificationImpl.groovy)\n\tat com.innovation.bdd.pages.api.ApiPage.apiTime(ApiPage.java:20)\n\tat com.innovation.bdd.stepdefinition.StepDef.then_I_assert_a_is_returned(StepDef.java:57)\n\tat ✽.Then Then I assert a 200 is returned(api/apitest.feature:10)\n",
  "status": "failed"
});
formatter.uri("ui/uitest.feature");
formatter.feature({
  "line": 1,
  "name": "Add A country and time",
  "description": "As world temi checker\nI want to be able add times for different countrisin a table",
  "id": "add-a-country-and-time",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Add a country and time",
  "description": "",
  "id": "add-a-country-and-time;add-a-country-and-time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have access to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a country",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add a number",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the add button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The table is populated with new country and time",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.I_have_access_to_the_url()"
});
formatter.result({
  "duration": 420516018,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.I_add_a_country()"
});
formatter.result({
  "duration": 249593134,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.I_add_a_number()"
});
formatter.result({
  "duration": 148161839,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_the_add_button()"
});
formatter.result({
  "duration": 137226030,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.The_table_is_populated_with_new_country_and_time()"
});
formatter.result({
  "duration": 23787,
  "status": "passed"
});
});