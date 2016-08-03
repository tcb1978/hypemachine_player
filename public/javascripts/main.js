$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        artist = (dataFromTheServer[i].artist);
        album = (dataFromTheServer[i].album);
        art = (dataFromTheServer[i].artwork_url);
        $("#trackData").append('<table border="1" cellpadding="5" cellspacing="5"><tbody><tr><th>Artist: ' + '<em>' + artist + '</em>' + '</th><tr><th>Featured Album: ' + '<em>' + album + '</em>' + '</th></tr><td><img class="album-artwork" src="" alt="artwork featured with this album"></td></tr></tbody></table>');
        $('img.album-artwork').attr({src: art});
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

