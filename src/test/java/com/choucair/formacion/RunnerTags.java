package com.choucair.formacion;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)

@CucumberOptions ( features = "src/test/resources/features/ColorLib/Forms/PopupValidation.feature", format = "json:target/cucumber-reports/cucumber.json", tags = "@Casoexitoso")
//@CucumberOptions(format = {"json:target/cucumber.json"})
// format = {"json:target/cucumber.json"})
//plugin = {"json:target/cucumber-reports/cucumber.json "})
public class RunnerTags {

}
