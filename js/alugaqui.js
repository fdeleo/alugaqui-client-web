/*
Alugaqui JavaScript File
*/


/* 1 - FORM FUNCTIONS */

/* Search function */

function buscaImovel() {  
  var bairros = [
    "barra", 
    "recreio", 
    "ilha", 
    "ipanema", 
    "leblon", 
    "botafogo", 
    "lagoa" 
  ];
  var bairrosTamanho = bairros.length;      
  var input = document.getElementById("buscaBairro");
  var inputValue = input.value;
  console.log("Valor de busca:" + inputValue);
  console.log("Valores de bairros:");
  var i;  
  for (i = 0; i < bairrosTamanho; i++) {
    console.log(bairros[i]);
  }
}

/* Formats FORM data as a JSON string */
function formJSON() {
  // Test with 3 sample inputs
  var numberInputs = 3;
  var count;
  var jsonString = '{';
  
  for (count = 0; count < numberInputs ; count++) {
    if (count != 0){
      jsonString += ',';
    }          
    jsonString += $("input").eq(count).attr('id') + ':';
    jsonString += $("input").eq(count).val();        
  }
  
  jsonString += '}';
    
  // Testing to validate response
  console.log (jsonString);
  return jsonString;
};

/* Send JSON formatted data to Server */
function sendFormData(){
  // Gets JSON formatted data
  var data = formJSON();
  //Sends data to the server
    
}

/* Validates FORM data */
function validateFormData(){
  
}
  