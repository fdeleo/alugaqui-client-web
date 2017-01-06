/*
Alugaqui JavaScript File
*/

function formJSON() {
  // Test with 3 sample inputs

  var inputKey1 = $("input").eq(0).attr('id');
  var inputValue1 = $("input").eq(0).val();
  var inputKey2 = $("input").eq(1).attr('id');
  var inputValue2 = $("input").eq(1).val();
  var inputKey3 = $("input").eq(2).attr('id');
  var inputValue3 = $("input").eq(2).val();
  
  var jsonString = '{' + inputKey1 + ':' + inputValue1
  + ',' + inputKey2 + ':' + inputValue2 
  + ',' + inputKey3 + ':' + inputValue3 + '}' ;
  
  // Testing to validate response
  console.log (jsonString);

};