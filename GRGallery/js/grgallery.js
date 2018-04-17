//Golden Ratio Video Thumbnail Gallery
//(c) 2018 by Jonathan Nguyen


$( document ).ready(function() {
		console.log( "ready!" );
    $.ajax({url:"videodata.xml",success:function(xml){
    	for(let i = 0; i < 6; i++){
    		var video = $(xml).find("video")[i];
    		var title = $(video).find("title").text();
    		var imgSrc = $(video).find("thumbnail").text();
    		var gifSrc = $(video).find("gif").text();
    		var link = $(video).find("link").text();
    		
    		$(".video"+i+">.container>.thumbnail").append($('<img>', {id: title, src: imgSrc}));
    		$(".video"+i+">.container>.overlay").append("<h1>"+title+"</h1>");
    		$(".video"+i+">.container>a").attr("href", link);
    		
    		$(".video"+i).mouseenter({gif:gifSrc, index: i}, mouseIn).mouseleave({img:imgSrc, index: i},mouseOut);
    	}
    }});
});

function mouseIn(event){
	i = event.data.index;
	$(".video"+i+">.container>.thumbnail>img").attr("src", event.data.gif);
}

function mouseOut(event){
	i = event.data.index;
	$(".video"+i+">.container>.thumbnail>img").attr("src", event.data.img);
}
