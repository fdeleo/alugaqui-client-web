/*
Alugaqui JavaScript File
*/

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
  return
};