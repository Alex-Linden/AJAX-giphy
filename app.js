"use strict";

/**this takes the val from the input el on HTML and returns it */
function getSearchVal() {
  let searchTerm = $('#search-text').val();
  console.log(searchTerm);
  //return searchTerm;
}
/** Ajax func */

async function getMeme() {


  let responce = await axios.get(
    "http://api.giphy.com/v1/gifs/search",
    {params: {"api_key":"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym","q":"funny"}})
  console.log(responce.data)
}

/**On submit this function will use getSearchVal to send the input val to
 * giphy api */
function handleSubmit(evt){
  evt.preventDefault();
  //let word = getSearchVal()
  getMeme()


}

$('.submit-form').on('submit', handleSubmit);

//console.log("Let's get this party started!");
