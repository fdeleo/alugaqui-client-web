/*
Alugaqui JavaScript File
*/

/* Search function */

function buscaImovel() {
  // Get the value to be searched
  var input = document.getElementById("buscaBairro");
  var inputValue = input.value;
  // Sends HTTP Request to get the response
  sendFormData(inputValue);
};

/* Send JSON formatted data to Server */
function sendFormData(data){
  //Sends data to the server
  var httpReq = new XMLHttpRequest();

  httpReq.open("GET", "/bairro/" + data , true);
  httpReq.send(null);
  /* Renders the page with the HTTP Response from Server */
  httpReq.onreadystatechange = function () {
        if(httpReq.readyState === XMLHttpRequest.DONE && httpReq.status === 200) {
            document.write(httpReq.responseText);
        }
    };
};
