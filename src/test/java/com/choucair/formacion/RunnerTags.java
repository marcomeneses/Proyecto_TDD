package com.choucair.formacion;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)

@CucumberOptions (features = "src/test/resources/features/ColorLib/Forms/PopupValidation.feature", tags = "@Casoexitoso")

public class RunnerTags {

}
