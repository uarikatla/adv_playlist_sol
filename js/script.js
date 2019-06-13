var songs = [
    {
        title: "Old Town Road",
        artist: "Lil Naz X",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Old_Town_Road_cover.jpg/220px-Old_Town_Road_cover.jpg",
        link: "https://www.youtube.com/watch?v=7ysFgElQtjI",
    },
];


function displaySongs(){
    $("#songs").empty();

    songs.forEach(function(song){
        $("#songs").append("<img class='img' src="+ song.image +">");
        $("#songs").append("<p>"+song.title+"</p>");
        $("#songs").append("<p>"+song.artist+"</p>");
        $("#songs").append("<a href="+ song.image +">Listen</a>");
        $("#songs").append("<hr>");
    });
}

function addSong(){
    var newSong= {
        title: $("#title").val(),
        artist: $("#artist").val(),
        image: $("#image").val(),
        link: $("#link").val(),
    }
    songs.push(newSong);
}


$("button").click(function(){
    addSong();
    displaySongs();
});

displaySongs();