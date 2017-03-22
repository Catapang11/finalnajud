$('#app').html(`
	<div class="center">
	<div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        <
  .ilike-blue-container {
    @extend .blue, .lighten-4;
  }
        /div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
	</div>
        
	`);
setTimeout(function(){
	x();
},3000);

function x(){
	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:adele&type=album"
}).done(function(response){
	$.ajax({
		url:response.albums.items[0].href
	}).done(function(album){
	console.log(album);
	let name = response.albums.items[0].artists[0].name;
	let image1 = response.albums.items[0].images[1].url;
	let mp3 = album.tracks.items[0].preview_url;
	var html = `
	<h1>${name}</h1>
	<img src="${image1}"/>
	<audio controls>
	<source src="${mp3}" type="audio/mpeg">
	Your browser does not support the audio element.
	</audio>


	`;
	$('#app').html(html);
		
	});
});
}