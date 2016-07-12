package com.innovation.bdd.support;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Driver {

    public static WebDriver driver;

    public static void initialiseDriver(){
        driver = new FirefoxDriver();
    }
}
