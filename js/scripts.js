/* globals $ */
var products = [
    {
        "id": 1,
        "name": "The Communist Manifesto",
        "author": "Karl Marx",
        "picture_url": "images/the-communist-manifesto.jpg",
        "price": 50,
        "selling_points": [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        ]
    },

    {
        "id": 2,
        "name": "The Communist Manifesto",
        "author": "Karl Marx",
        "picture_url": "images/the-communist-manifesto.jpg",
        "price": 50,
        "selling_points": [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        ]
    },

    {
        "id": 3,
        "name": "The Communist Manifesto",
        "author": "Karl Marx",
        "picture_url": "images/the-communist-manifesto.jpg",
        "price": 50,
        "selling_points": [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        ]
    },

    {
        "id": 4,
        "name": "The Communist Manifesto",
        "author": "Karl Marx",
        "picture_url": "images/the-communist-manifesto.jpg",
        "price": 50,
        "selling_points": [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        ]
    }
];


var appendToPage = function appendToPage( product ){
    var $container = $( "#content" );

    var sellingPoints = "<ul>";

    product.selling_points.forEach(
        ( point ) => sellingPoints += "<li>" + point + "</li>"
    );

    sellingPoints += "</ul>";

    $container.append(
        "<h1>" + product.name + "</h1>",
        "<h2>" + product.author + "</h2>",
        "<img src='" + product.picture_url + "'/>",
        "<h3>" + product.price + "</h3>",
        sellingPoints,
        "<span>" + product.id + "</span>"
    );
};

products.forEach( appendToPage );
