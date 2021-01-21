
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects": [ {
      "name": "Waiting in line",
      "image": "lorempixel.people.1.jpeg",
      "id": "project1"
    },

    {
      "name": "Needfinding",
      "image": "lorempixel.city.1.jpeg",
      "id": "project2"
    },

    {
      "name": "ipad",
      "image": "lorempixel.technics.1.jpeg",
      "id": "project3"
    },

    {
      "name": "wheel",
      "image": "lorempixel.technics.2.jpeg",
      "id": "project4"
    },

    {
      "name": "wisps",
      "image": "lorempixel.abstract.1.jpeg",
      "id": "project5"
    },

    {
      "name": "art",
      "image": "lorempixel.abstract.2.jpeg",
      "id": "project6"
    },

    {
      "name": "city",
      "image": "lorempixel.city.2.jpeg",
      "id": "project7"
    },

    {
      "name": "peeps",
      "image": "lorempixel.people.2.jpeg",
      "id": "project8"
    },

    {
      "name": "jumbo dumbo",
      "image": "lorempixel.jumbotron.jpeg",
      "id": "project9"
    }
  ]
    
  });
};