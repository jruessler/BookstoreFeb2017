/* globals $ */
var products = {
    "albums": [
        {
            "id": 1,
            "name": "Some album",
            "author": "Artist Artist",
            "picture_url": "http://images.popmatters.com/news_art/b/bp-rush-2112-3501.jpg",
            "price": "FREE",
            "selling_points": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            ]
        },
    ],

    "books": [
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
    ]
};

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


for( let items in products ){
    products[ items ].forEach( appendToPage );
}

$( "nav" ).on( "click", "a", () => {
    $( "#content" ).empty();
    products.albums.forEach( appendToPage );
} );
