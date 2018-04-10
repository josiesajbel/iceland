//added at Example 2.3 line 20...function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
//no property named popupContent; instead, create html string with all properties
var popupContent = "";
if (feature.properties) {
//loop to add feature property names and values to html string
for (var property in feature.properties){
popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
}
layer.bindPopup(popupContent);
};
};
//function to retrieve the data and place it on the map
function getData(map){
//load the data
$.ajax("data/sub.geojson", {
dataType: "json",
success: function(response){
//create a Leaflet GeoJSON layer and add it to the map
L.geoJson(response, {
onEachFeature: onEachFeature
}).addTo(mymap);
}
});
};