/* globals $ */
var book1 = {
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
};

var book2 = {
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
};

var book3 = {
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
};

var book4 = {
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
};

var appendToPage = function appendToPage( product ){
    var $container = $( "#content" );

    $container.append( "<h1>" + product.name + "</h1>",
    "<h2>" + product.author + "</h2>",
    "<img src='" + product.picture_url + "'/>",
    "<h3>" + product.price + "</h3>",
    "<ul>" + product.selling_points + "</ul>",
    "<span>" + product.id + "</span>" );
};

appendToPage( book1 );
appendToPage( book2 );
appendToPage( book3 );
appendToPage( book4 );
