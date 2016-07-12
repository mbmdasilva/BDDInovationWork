package com.innovation.bdd.support;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;


public class SauceLabsRemoteWebDriver extends RemoteWebDriver {


    public SauceLabsRemoteWebDriver(URL seleniumGridURL, Capabilities desiredCapabilities) {
        super(seleniumGridURL, desiredCapabilities);

    }



}
