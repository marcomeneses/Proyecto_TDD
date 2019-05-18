package com.choucair.formacion.steps;

import com.choucair.formacion.pageobjects.ColorlibLoginPage;

import net.thucydides.core.annotations.Step;

public class PopupValidationSteps {

	ColorlibLoginPage  colorlibLoginPage;
	
	@Step
	public void login_colorlib(String strUsuario,String strPass){
		colorlibLoginPage.open();
		colorlibLoginPage.IngresarDatos(strUsuario,strPass);
		//colorlibLoginPage.VerificaHome();
	}
	
}
