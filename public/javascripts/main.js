$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        var data = dataFromTheServer[i];
        var type = (data.type);
        if (type == 'premiere' && data.tracks){
            var artist, album, art, sitename = null;
            for (var j = 0; j < data.tracks.length; j++){
                artist = (data.artist);
                album = (data.album);
                art = (data.artwork_url_sm);
                sitename = data.sitename;
                var soundcloud = data.soundcloud_set;
                var artistUrl = data.premiere_url;
                var label = (data.us_link);
                var title = (data.tracks[j].title);
                var audio = (data.tracks[j].stream_url);
                track_id = "track_row_" + data.tracks[j].sc_id;
                $("#trackData").append(
                    '<tr id="'+track_id+'">' +
                    '<td><div class="col-xs-4 col-md-6"><a href="' + artistUrl + '">' +
                    '<img class="album-artwork" src="'+ art +'" alt="artwork featured with this album"></a></div></td>' +
                    '<td><div class="col-xs-4 col-md-6"><a href="' + artistUrl + '">' + artist + '</a></div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' + album + '</div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' + title + '</div></td>' +
                    '<td><div class="col-xs-4 col-md-6"><a href="' + label + '">' + label + '</a></div></td>' +
                    '<td><div class="col-xs-4 col-md-6"><a class="siteurl" href="'+ soundcloud +'">SOUNDCLOUD</a></div></td>' +
                    '</tr>');
                $("#playerElements" ).append('<li><div class="col-xs-4 col-md-6">' +
                    '<a href="' + artistUrl + '">' +
                    '<img class="album-artwork" src="'+ art +'" alt="artwork featured with this album"></a></div></li>' +
                    '<li><div class="col-xs-4 col-md-6"><a href="' + artistUrl + '">' + artist + '</a></div></li>' +
                    '<li><div class="col-xs-4 col-md-6">' + album + '</div></li>' +
                    '<li><div class="col-xs-4 col-md-6">' + title + '</div></li>' +
                    '<li><div class="col-xs-4 col-md-6">' +
                    '<audio controls="controls">' +
                    '<source src="' + audio + '" type="audio/ogg">' +
                    '<source src="' + audio + '" type="audio/mpeg">' +
                    'Your browser does not support the audio element.' +
                    '</audio></div></li>');
            }
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
})

