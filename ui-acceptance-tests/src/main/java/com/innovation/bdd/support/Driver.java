package com.innovation.bdd.support;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Driver {

    public static WebDriver driver;
    public static String osVersion;
    public static String browserVersion;
    public static String platformRunType;
    public static final String USERNAME = "tr-risk-fsp";
    public static final String ACCESS_KEY = "36691385-0c41-4a05-ac44-d5f48f76bc1f";
    public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";

    public static void initialiseDriver(){
        String workingDir = System.getProperty("user.dir");
        String workingOS = System.getProperty("os.name").toLowerCase();
        osVersion = (System.getProperty("osversion") == null) ? "OS X 10.10" : System.getProperty("osversion");
        browserVersion = (System.getProperty("browserversion") == null) ? "46.0.1" : System.getProperty("browserversion");
        platformRunType = (System.getProperty("platform") == null) ? "local" : System.getProperty("platform");
        String host = System.getProperty("host");
        String browser = System.getProperty("browser");

        DesiredCapabilities caps = DesiredCapabilities.firefox();
       /* caps.setCapability("platform", osVersion);
        caps.setCapability("version", browserVersion);
        caps.setCapability("marionette", true);*/

        caps.setCapability("idleTimeout", "999");
        caps.setCapability("maxDuration", "10800");
        caps.setCapability("commandTimeout", "600");

        caps.setCapability("recordVideo", false);
        caps.setCapability("recordScreenshots", false);
        caps.setCapability("recordLogs", false);
        caps.setCapability("webdriverRemoteQuietExceptions", false);

        try {
            driver = new SauceLabsRemoteWebDriver(new URL(URL), caps);
        } catch (Exception e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(300, TimeUnit.SECONDS);
    }
}
