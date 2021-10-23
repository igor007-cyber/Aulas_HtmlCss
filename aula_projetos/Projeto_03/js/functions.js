window.onload = function(){
    
    var map;

    function iniciar() {
        var mapProp = {
            center: new google.maps.LatLng(-3.7350712, -38.4915204),
            scrollWhell:false,
            zoom:12,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }

        function addMaker(lat,long,icon,content,click){
            var latLng = {'lat':lat,'lng': long};
            
            var marker = new google.maps.Marcar({
                'position':latLng,
                map:map,
                icon:icon
            })

            var infoWindow = new google.maps.infoWindow({
                content:content,
                maxWidth:200,
                pixelOffset: new google.maps.Size(0,20)
            })
            
            if(click == true){
                google.maps.event.addListener(marker,'click',function(){
                    infoWindow.open(map,marker)
                })
            }else if(click == false){
                infoWindow.open(map,marker)
            }    
        }
        
        map = new google.map.map(document.getElementById("mapa"),mapProp);
        
    }

    iniciar()
    addMaker(-3.7350712, -38.4915204, "",'meu indereço personalizado',true)
}