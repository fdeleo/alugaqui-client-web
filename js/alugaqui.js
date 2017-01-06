

// 1 - Event from the form submit | 2 - Selection of the ids.value | 3 - Transform to JSON string 

$( "#myId" ); 

function formJSON() {
  // Test with 1 input only

  var inputKey1 = $("input").eq(0).attr('id');
  var inputValue1 = $("input").eq(0).val();
  
  var jsonString = '{' + inputKey1 + ':' + inputValue1 + '}' ;
  // Testing to validate response
  
  console.log (jsonString);

};