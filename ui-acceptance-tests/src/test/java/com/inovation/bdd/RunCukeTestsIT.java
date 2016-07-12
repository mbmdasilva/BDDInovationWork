package com.inovation.bdd;


import com.innovation.bdd.support.Driver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, strict = true,
        tags = {"@test"},
        features = "src/main/resources/com/innovation/bdd/features/",
        format = {"html:target/cucumber"},
        glue = {"com.innovation.bdd.stepdefinition",
        "com.innovation.bdd.pages"})
public class RunCukeTestsIT {

    @BeforeClass
    public static void setup(){
        Driver.initialiseDriver();
    }

    @AfterClass
    public static void teardown(){
        Driver.driver.quit();
    }

}
