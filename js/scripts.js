/* globals $ */
var products = {
    "albums": [
        {
            "id": 1,
            "name": "Sparkles",
            "author": "Lady Jane",
            "picture_url": "http://midwestlaminating.com/wp-content/uploads/2012/12/Sparkles.jpg",
            "price": 20,
            "selling_points": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            ]
        },

        {
            "id": 2,
            "name": "Copper Sparkles",
            "author": "Lady Jane",
            "picture_url": "https://s-media-cache-ak0.pinimg.com/originals/f6/4d/5e/f64d5e21bb16926fa3f7c5912928ce6d.jpg",
            "price": 20,
            "selling_points": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            ]
        },

        {
            "id": 3,
            "name": "Green Sparkles",
            "author": "Lady Jane",
            "picture_url": "https://s-media-cache-ak0.pinimg.com/564x/41/d7/15/41d7156dedcbbe9abb325ce17bb6d7ef.jpg",
            "price": 20,
            "selling_points": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            ]
        },

        {
            "id": 4,
            "name": "Sparkles",
            "author": "Lady Jane",
            "picture_url": "http://midwestlaminating.com/wp-content/uploads/2012/12/Sparkles.jpg",
            "price": 20,
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
