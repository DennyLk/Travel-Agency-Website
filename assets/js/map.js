var map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-74.006, 40.7128]), // Example center: New York
    zoom: 10,
  }),
});
var redDotFeature = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-74.006, 40.7128])), // Location for the red dot
});

// Apply a style to the red dot
redDotFeature.setStyle(
  new ol.style.Style({
    image: new ol.style.Circle({
      radius: 10, // Size of the red dot
      fill: new ol.style.Fill({ color: "blue" }), // Color of the red dot
    }),
  })
);

// Create a vector source and add the red dot feature
var vectorSource = new ol.source.Vector({
  features: [redDotFeature], // Adding the feature to the source
});

// Create a vector layer using the source
var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
});

// Add the vector layer to the map
map.addLayer(vectorLayer);
