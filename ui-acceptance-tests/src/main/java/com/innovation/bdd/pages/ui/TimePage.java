package com.innovation.bdd.pages.ui;


import com.innovation.bdd.support.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class TimePage extends Driver {




  public void enterCityName(){
    inputCity.clear();
    inputCity.sendKeys("Luanda");

    }
    public void enterNumber(){
        inputNumber.clear();
        inputNumber.sendKeys("1");

    }

    public void clickButton(){
        button.click();

    }
    @FindBy(css = "input.form-control")
    private WebElement inputCity;
    @FindBy(xpath = "(//input[@type='text'])[2]")
    private WebElement inputNumber;
    @FindBy(css = "button.btn.btn-primary")
    private WebElement button;


}





