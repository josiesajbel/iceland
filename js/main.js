var mymap = L.map('mapid').setView([65, -18.525262], 7);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(mymap);

// var geojsonLayer = new L.GeoJSON.AJAX("data/volc.json");

$.ajax("data/sub.geojson", {
dataType: "json",
success: function(response){
//create marker options
var geojsonMarkerOptions = {
radius: 8,
fillColor: "#ff7800",
color: "#000",
weight: 1,
opacity: 1,
fillOpacity: 0.8
iconAnchor: [22, 22]
};
//create a Leaflet GeoJSON layer and add it to the map
L.geoJson(response, {
pointToLayer: function (feature, latlng){
return L.circleMarker(latlng, geojsonMarkerOptions);
}
}).addTo(mymap);
}
});