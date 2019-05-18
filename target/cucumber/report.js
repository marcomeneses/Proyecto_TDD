$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ColorLib/Forms/PopupValidation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Formulario Popup Validation",
  "description": "I want to use this template for my feature file",
  "id": "formulario-popup-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Regresión"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Diligenciamiento exitoso del formulario Popup Validation",
  "description": "",
  "id": "formulario-popup-validation;diligenciamiento-exitoso-del-formulario-popup-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Casoexitoso"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Autentico en ColorLib con usuario \"demo\" y clave \"demo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Ingreso a la funcionalidad Forms Validation",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Diligencio Formulario Popup Validation",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verifico Ingreso Exitoso",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 35
    },
    {
      "val": "demo",
      "offset": 50
    }
  ],
  "location": "PopupValidationDefinition.autentico_en_ColorLib_con_usuario_y_clave(String,String)"
});
formatter.result({
  "duration": 8976507337,
  "status": "passed"
});
formatter.match({
  "location": "PopupValidationDefinition.ingreso_a_la_funcionalidad_Forms_Validation()"
});
formatter.result({
  "duration": 18773,
  "status": "passed"
});
formatter.match({
  "location": "PopupValidationDefinition.diligencio_Formulario_Popup_Validation()"
});
formatter.result({
  "duration": 14933,
  "status": "passed"
});
formatter.match({
  "location": "PopupValidationDefinition.verifico_Ingreso_Exitoso()"
});
formatter.result({
  "duration": 17920,
  "status": "passed"
});
});