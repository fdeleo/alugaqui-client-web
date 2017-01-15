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
  /* Validation of the search */
  var resultadoBusca = false;
    
  for (i = 0; i < bairrosTamanho; i++) {
    if ( inputValue == bairros[i]){
      resultadoBusca = true;
    }
  }
  console.log("O resultado da busca:")
  
  if ( resultadoBusca == true ){
    console.log("FOI ENCONTRADO! =)")
  }
  else{
    console.log("NÃO FOI ENCONTRADO! =(")
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
  