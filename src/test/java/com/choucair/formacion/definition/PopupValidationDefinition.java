package com.choucair.formacion.definition;

import com.choucair.formacion.steps.PopupValidationSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

public class PopupValidationDefinition {
	
	@Steps
	PopupValidationSteps popupValidationSteps;
	
	@Given("^Autentico en ColorLib con usuario \"([^\"]*)\" y clave \"([^\"]*)\"$")
	public void autentico_en_ColorLib_con_usuario_y_clave(String Usuario, String Clave) {
		popupValidationSteps.login_colorlib(Usuario, Clave);
	}

	@Given("^Ingreso a la funcionalidad Forms Validation$")
	public void ingreso_a_la_funcionalidad_Forms_Validation(){
	}

	@When("^Diligencio Formulario Popup Validation$")
	public void diligencio_Formulario_Popup_Validation(){
	}

	@Then("^Verifico Ingreso Exitoso$")
	public void verifico_Ingreso_Exitoso(){
	}
}
