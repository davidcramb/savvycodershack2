var book1 = {
  title: 'The Color of Magic',
  author: 'Terry Pratchett',
  year: '1987',
  price: '19.87',
  category: 'first',
  img: '<img src="./images/the-colour-of-magic-1.jpg">',
  selling_points: 'The first in the acclaimed series! Journey with Rincewind and Twoflower on the strange world of the Disc.'
}
var book2 = {
  title: 'The Light Fantastic',
  author: 'Terry Pratchett',
  year: '1988',
  price: '19.88',
  category: 'second',
  img: '<img src="./images/the-light-fantastic-1.jpg">',
  selling_points: 'The follow-up to the first and concluding their cowardly adventure.'
}
var book3 = {
  title: 'The Light Fantastic',
  author: 'Terry Pratchett',
  year: '1990',
  price: '20.00',
  category: 'third',
  img: '<img src="./images/equal-rites-1.jpg">',
  selling_points: "Granny Weatherwax breaks down barriers in Ankh Morpork's Unseen University."
}

var hat1 = {
  hat_type: 'bowler',
  hat_category: 'dressy',
  price: 49.99,
  selling_points: "The favorite hat of the Riddler."
}

var hat2 = {
  hat_type: 'cat in the hat',
  hat_category: 'Dr. Seuss',
  price: 100,
  selling_points: "This hat will make lots of good fun that is funny when the sun is not sunny."
}

$('#book1 .title').text(book1.title);
$('#book1 .author').text(book1.author);
$('#book1 .price').text(book1.price);
$('#book1 .img').html(book1.img);
