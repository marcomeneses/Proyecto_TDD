package com.choucair.formacion.pageobjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://colorlib.com/polygon/metis/login.html")

public class ColorlibLoginPage extends PageObject{
	@FindBy(xpath="//*[@id='login']/form/input[1]")
	public WebElementFacade txtUsername;
	
	@FindBy(xpath="//*[@id='login']/form/input[2]")
	public WebElementFacade txtPassword;
	
	@FindBy(xpath="//*[@id='login']/form/button")
	public WebElementFacade btnSingIn;
	
public void IngresarDatos(String strUsuario,String strPass){
	txtUsername.sendKeys(strUsuario);
	txtPassword.sendKeys(strPass);
	btnSingIn.click();
}
}
