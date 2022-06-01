"use strict";

/**this takes the val from the input el on HTML and returns it */
function getSearchVal() {
  let searchTerm = $('#search-text').val();
  console.log(searchTerm);
  return searchTerm;
}
/** Ajax func */

async function getMeme(word) {
  let responce = await axios.get(
    "http://api.giphy.com/v1/gifs/search",
    { params: { "api_key": "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", "q": word } });
  console.log("getMeme=", responce.data.data[0]['images']['original']['url']);
  let newMeme = responce.data.data[0]['images']['original']['url'];
    renderGiph(newMeme)
}

function renderGiph(newMeme) {
  let image = $('<img>');
  image.attr('src', newMeme);
  $('.giphs').append(image);
}

/**On submit this function will use getSearchVal to send the input val to
 * giphy api */
function handleSubmit(evt) {
  evt.preventDefault();
  let word = getSearchVal();
  let newMeme = getMeme(word);
  console.log("newMeme=", newMeme);
}

$('.submit-form').on('submit', handleSubmit);

//console.log("Let's get this party started!");


/* let image = $('<img>');
image.attr('src', newMeme);
$('.giphs').append(image); */