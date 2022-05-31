"use strict";

/**this takes the val from the input el on HTML and returns it */
function getSearchVal() {
  let searchTerm = $('#search-text').val();
  console.log(searchTerm);
  //return searchTerm;
}

/**On submit this function will use getSearchVal to send the input val to
 * giphy api */
function handleSubmit(evt){
  evt.preventDefault();
  getSearchVal()
}

$('.submit-form').on('submit', handleSubmit);

//console.log("Let's get this party started!");