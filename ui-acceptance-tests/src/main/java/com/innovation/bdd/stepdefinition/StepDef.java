package com.innovation.bdd.stepdefinition;


import com.innovation.bdd.pages.TimePage;
import com.innovation.bdd.pages.api.ApiPage;
import com.innovation.bdd.support.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;


public class StepDef {

    TimePage timePage = PageFactory.initElements(Driver.driver,TimePage.class);
    ApiPage apiPage = PageFactory.initElements(Driver.driver, ApiPage.class);
    @Given("^I have access to the url$")
    public void I_have_access_to_the_url() throws Throwable {

        Driver.driver.navigate().to("http://54.194.199.152/public/");

    }

    @When("^I add a country$")
    public void I_add_a_country() throws Throwable {
        timePage.enterCityName();

    }

    @When("^I add a number$")
    public void I_add_a_number() throws Throwable {

        timePage.enterNumber();

    }

    @When("^I click the add button$")
    public void i_click_the_add_button() throws Throwable {

        timePage.clickButton();
    }

    @Then("^The table is populated with new country and time$")
    public void The_table_is_populated_with_new_country_and_time() throws Throwable {


    }
    @Given("^I have entered the url for time$")
    public void i_have_entered_the_url_for_time() throws Throwable {
      //For steps purposes
    }



    @Then("^Then I assert a (\\d+) is returned$")
    public void then_I_assert_a_is_returned(int arg1) throws Throwable {
        apiPage.apiTime();

    }



}
