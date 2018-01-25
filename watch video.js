<script>;(function(){
	
	// Create Elements
	var videoLink = document.createElement('a');
	var videoInfo = document.createElement('div');
	var videoThumbnail = document.createElement('div');
	var videoTitle = document.createElement('div');
	var videoMeta = document.createElement('div');
	var videoCTA = document.createElement('div');
	var videoCTAText = document.createElement('div');
	var videoCTALogo = document.createElement('div');
	var youtubeLogo = '<svg class="youtube-logo" enable-background="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="64" cy="64" fill="#CC191E" r="64"/></g><path d="M103.201,48.004c0,0-0.781-5.513-3.18-7.939c-3.043-3.187-6.453-3.203-8.016-3.389  c-11.191-0.81-27.988-0.81-27.988-0.81h-0.036c0,0-16.795,0-27.988,0.81c-1.564,0.186-4.972,0.201-8.015,3.389  c-2.399,2.426-3.18,7.939-3.18,7.939S24,54.478,24,60.953v6.071c0,6.471,0.799,12.947,0.799,12.947s0.781,5.51,3.18,7.938  c3.044,3.189,7.041,3.088,8.82,3.422c6.401,0.615,27.202,0.805,27.202,0.805s16.81-0.025,28.005-0.834  c1.564-0.188,4.975-0.203,8.016-3.391c2.4-2.43,3.182-7.939,3.182-7.939S104,73.496,104,67.023v-6.071  C104,54.478,103.201,48.004,103.201,48.004 M54.729,75.428l-0.003-24.581l23.637,12.332L54.729,75.428z" fill="#FFFFFF"/></svg>';
	
	// Return Video URL from Meta Tag
	function getVideoURL() { 
		 var metas = document.getElementsByTagName('meta'); 

		 for (var i=0; i<metas.length; i++) { 
				if (metas[i].getAttribute("property") == "video-url") { 
					 return metas[i].getAttribute("content"); 
				} 
		 } 

			return "";
	}	

	// Return Video Title from Meta Tag
	function getVideoTitle() { 
		 var metas = document.getElementsByTagName('meta'); 

		 for (var i=0; i<metas.length; i++) { 
				if (metas[i].getAttribute("property") == "video-title") { 
					 return metas[i].getAttribute("content"); 
				} 
		 } 

			return "";
	}	
	
	// Return Video URL from Meta Tag
	function getVideoThumbail() { 
		 var metas = document.getElementsByTagName('meta'); 

		 for (var i=0; i<metas.length; i++) { 
				if (metas[i].getAttribute("property") == "video-thumbnail") { 
					 return metas[i].getAttribute("content"); 
				} 
		 } 

			return "";
	}	
	
	// Return Video Meta from Meta Tag
	function getVideoMeta() { 
		 var metas = document.getElementsByTagName('meta'); 

		 for (var i=0; i<metas.length; i++) { 
				if (metas[i].getAttribute("property") == "video-meta") { 
					 return metas[i].getAttribute("content"); 
				} 
		 } 

			return "";
	}
	
	// Return Video CTA from Meta Tag
	function getVideoCTA() { 
		 var metas = document.getElementsByTagName('meta'); 

		 for (var i=0; i<metas.length; i++) { 
				if (metas[i].getAttribute("property") == "video-cta") { 
					 return metas[i].getAttribute("content"); 
				} 
		 } 

			return "";
	}	
	
	// Assign meta data to video object
	var video = {};
	video.url = getVideoURL();
	video.title = getVideoTitle();
	video.thumbnail = getVideoThumbail();
	video.meta = getVideoMeta();
	video.cta = getVideoCTA();
	
	// Video Link - attributes
	videoLink.setAttribute('href',video.url);
	videoLink.setAttribute('target','_blank');
	videoLink.className = 'video-link';
  
	// Video Info - attributes
	videoInfo.className = 'video-info';
	
	// Video Thumbnail - attributes
	videoThumbnail.className = 'video-thumbnail';
	videoThumbnail.style.backgroundImage = "url('" + video.thumbnail + "')";
	
	// Video Title - attributes
	videoTitle.className = 'video-title';
	videoTitle.innerHTML = video.title;
	
	// Video Meta - attributes
	videoMeta.className = 'video-meta';
	videoMeta.innerHTML = video.meta;
	
	// Video CTA - attributes
	videoCTA.className = 'video-cta';
	
	// Video CTA Text - attributes
	videoCTAText.className = 'video-cta-text';
	videoCTAText.innerHTML = video.cta;
	
	// Video CTA Logo - attributes
	videoCTALogo.className = 'video-cta-logo'
	videoCTALogo.innerHTML = youtubeLogo;
	
	
	// Insert inline style block in head
	document.head.insertAdjacentHTML('beforeend','<style>.video-info:after,.video-link{box-shadow:2px 12px 30px rgba(0,0,0,.2)}.video-info,.video-info .video-title{-webkit-flex-direction:column;box-sizing:border-box}.video-cta,.video-link{border-top-left-radius:24px;border-bottom-left-radius:24px}.video-link{position:fixed;right:0;bottom:500px;width:200px;height:45px;text-decoration:none;background:0 0;cursor:pointer}.video-info,.video-info:after{position:absolute;top:0;left:0;right:0;height:225px}.video-link:hover .video-info{visibility:visible;clip:rect(-50px,200px,225px,-50px);-webkit-transition:clip .5s cubic-bezier(.65,.05,.36,1);transition:clip .5s cubic-bezier(.65,.05,.36,1);opacity:1}.video-info{visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:25px;background:#fff;-webkit-transform:translate(0,-200px);transform:translate(0,-200px);-webkit-transform:translate3d(0,-200px,0);transform:translate3d(0,-200px,0);-webkit-transition:visibility .2s .3s,opacity .2s .3s,clip .5s cubic-bezier(.65,.05,.36,1);transition:visibility .2s .3s,opacity .2s .3s,clip .5s cubic-bezier(.65,.05,.36,1);clip:rect(200px,200px,225px,0);will-change:clip;opacity:0}.video-info:after{display:block;content:"";bottom:0;background:0 0}.video-info .video-meta,.video-info .video-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal;font-size:13px;color:#333}.video-info .video-title{display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:36px;padding:10px 10px 5px;font-weight:700;letter-spacing:.5px}.video-info .video-thumbnail{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;height:112.5px;background-size:cover;background-position:center center}.video-info .video-meta{display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0 10px 10px;font-weight:400;text-align:left;letter-spacing:1px}.video-cta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff}.video-cta .video-cta-logo{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:45px}.video-cta .video-cta-logo .youtube-logo{width:45px;height:45px}.video-cta .video-cta-text{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-left:20px;font-size:14px;font-weight:700;text-align:left;letter-spacing:1px;color:#333}</style>');	
	
	// Insert Elements into DOM
 	document.body.appendChild(videoLink);	
	videoLink.appendChild(videoInfo);
	videoLink.appendChild(videoCTA);
	
	videoInfo.appendChild(videoThumbnail);
	videoInfo.appendChild(videoTitle);
	videoInfo.appendChild(videoMeta);

	videoCTA.appendChild(videoCTALogo);
	videoCTA.appendChild(videoCTAText);

	
	
})();	</script>
<script>$(document).ready(function() {
	var button = $("button");
	var bgRAW = $(".background_RAW");
	var bgFiltered = $(".background_Filtered");
	var phone = $("img");

	button.click(function(event) {
		bgRAW.myAnimation("scaleDown");
		bgFiltered.myAnimation("fadeIn");
		phone.myAnimation("revealUp");
	});

	$.fn.extend({
		myAnimation: function(animationName) {
			var animationEnd =
				"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			this.addClass("animated " + animationName).one(animationEnd, function() {
				$(this).removeClass("animated " + animationName);
			});
		}
	});
});

//# sourceURL=pen.js
</script>
