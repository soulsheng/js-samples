// JavaScript Document
  
  function loadMapLocal( myLatlng, zoom, divID )
  {		    
    var myOptions = {
      zoom: zoom,
      center: myLatlng,
      mapTypeControlOptions: {
            mapTypeIds: ["local", google.maps.MapTypeId.ROADMAP]
        }
    };
    var map = new google.maps.Map(document.getElementById( divID ), myOptions);
    map.mapTypes.set('local', new LocalMapType() );
    map.setMapTypeId('local');
	return map;
  }
  
  function loadMapRemote( myLatlng, zoom, divID )
  {
	var myOptions = {
      zoom: zoom,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById( divID ), myOptions);
	return map;
  }
	  
  function tlen(len, mystr){
	mystr = String(mystr);
	var num = len - mystr.length;
	for (var i = 0; i <= num; i++)
	{
		mystr = "0" + mystr;
	}
	return mystr;
	};
	
  function CoordMapType(tileSize) {
    this.tileSize = tileSize;
  }
 
  CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement('DIV');
    var ymax = 1 << zoom;
	var y = coord.y;
	y = tlen(5,y);
	var x = tlen(5,coord.x);
	zoom = tlen(1,zoom);
	
    div.innerHTML = y + "," + x + "," + zoom;
    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#AAAAAA';
    return div;
  };
				
  function LocalMapType() {}
  LocalMapType.prototype.tileSize = new google.maps.Size(256, 256);
  LocalMapType.prototype.maxZoom = 9;
  LocalMapType.prototype.minZoom = 1;
  LocalMapType.prototype.name = "本地";
  LocalMapType.prototype.alt = "显示本地地图";
  LocalMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
	var img = ownerDocument.createElement("img");
	img.style.width = this.tileSize.width + "px";
	img.style.height = this.tileSize.height + "px";
      
	var ymax = 1 << zoom;
	var y = coord.y;
	y = tlen(5,y);
	var x = tlen(5,coord.x);
	zoom = tlen(1,zoom);

	var strURL = "..\\data\\L" + zoom + "\\" + y + "-" + x + ".jpg";
	
	img.src = strURL;
	return img;
  };
  
  