fb = new Firebase('https://boss-of-awesomsauce.firebaseio.com');
fb.remove();
fb.push({
  artist: 'Aaliyah',
  catchiness: 9,
  danciness: 7,
  singability: 5,
  title: 'One In A Million'
});

fb.push({
  artist: 'Aaliyah',
  catchiness: 3,
  danciness: 6,
  singability: 4,
  title: 'Age Ain\'t Nothing But A Number'
});

fb.push({
  artist: 'Aaliyah',
  catchiness: 7,
  danciness: 7,
  singability: 6,
  title: 'Hot Like Fire'
});

fb.push({
  artist: 'Aaliyah',
  catchiness: 9,
  danciness: 10,
  singability: 8,
  title: 'If Your Girl Only Knew'
});

$(document).ready(function(){
  $('button').on('click',function () {
    var artist = $('input[name="artist"]').val();
    var title = $('input[name="title"]').val();
    var danciness = $('input[name="danciness"]').val();
    var singability = $('input[name="singability"]').val();
    var catchiness = $('input[name="catchiness"]').val();

    fb.push({
      'artist': artist,
      'title': title,
      'danciness': danciness,
      'singability': singability,
      'catchiness': catchiness
    });
    fb.on('value',function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(data) {
          // console.log("The " + data.key() + " dinosaur's score is " + data.val());
        // });
        var node = '<div>Artist: '+ data.val().artist + '</div>';
        node += '<div>Title: '+ data.val().title + '</div>';
        node += '<div>Danciness: '+ data.val().danciness + '</div>';
        node += '<div>Singability: '+ data.val().singability + '</div>';
        node += '<div>Catchiness: '+ data.val().catchiness + '</div>';
        node += '<br>';
        console.log('node', node);
        $('.songs').prepend(node);
      });
    });
  });
});