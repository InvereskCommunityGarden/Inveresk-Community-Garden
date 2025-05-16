var wms_layers = [];


    var projection_Basemaps_AerialPhoto2024_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Basemaps_AerialPhoto2024_0 = projection_Basemaps_AerialPhoto2024_0.getExtent();
    var size_Basemaps_AerialPhoto2024_0 = ol.extent.getWidth(projectionExtent_Basemaps_AerialPhoto2024_0) / 256;
    var resolutions_Basemaps_AerialPhoto2024_0 = new Array(14);
    var matrixIds_Basemaps_AerialPhoto2024_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Basemaps_AerialPhoto2024_0[z] = size_Basemaps_AerialPhoto2024_0 / Math.pow(2, z);
        matrixIds_Basemaps_AerialPhoto2024_0[z] = z;
    }
    var lyr_Basemaps_AerialPhoto2024_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/AerialPhoto2024/MapServer/WMTS/1.0.0/WMTSCapabilities.xml",
                                attributions: ' ',
                                "layer": "Basemaps_AerialPhoto2024",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_Basemaps_AerialPhoto2024_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Basemaps_AerialPhoto2024_0),
                resolutions: resolutions_Basemaps_AerialPhoto2024_0,
                matrixIds: matrixIds_Basemaps_AerialPhoto2024_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Basemaps_AerialPhoto2024',
                            opacity: 1.0,
                            
                            
                          });

    var projection_Basemaps_Orthophoto_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Basemaps_Orthophoto_1 = projection_Basemaps_Orthophoto_1.getExtent();
    var size_Basemaps_Orthophoto_1 = ol.extent.getWidth(projectionExtent_Basemaps_Orthophoto_1) / 256;
    var resolutions_Basemaps_Orthophoto_1 = new Array(14);
    var matrixIds_Basemaps_Orthophoto_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Basemaps_Orthophoto_1[z] = size_Basemaps_Orthophoto_1 / Math.pow(2, z);
        matrixIds_Basemaps_Orthophoto_1[z] = z;
    }
    var lyr_Basemaps_Orthophoto_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Orthophoto/MapServer/WMTS/1.0.0/WMTSCapabilities.xml",
                                attributions: ' ',
                                "layer": "Basemaps_Orthophoto",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpgpng',
              projection: projection_Basemaps_Orthophoto_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Basemaps_Orthophoto_1),
                resolutions: resolutions_Basemaps_Orthophoto_1,
                matrixIds: matrixIds_Basemaps_Orthophoto_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Basemaps_Orthophoto',
                            opacity: 1.0,
                            
                            
                          });
var format_Olive_2 = new ol.format.GeoJSON();
var features_Olive_2 = format_Olive_2.readFeatures(json_Olive_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Olive_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Olive_2.addFeatures(features_Olive_2);
var lyr_Olive_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Olive_2, 
                style: style_Olive_2,
                popuplayertitle: 'Olive',
                interactive: true,
                title: '<img src="styles/legend/Olive_2.png" /> Olive'
            });

lyr_Basemaps_AerialPhoto2024_0.setVisible(true);lyr_Basemaps_Orthophoto_1.setVisible(true);lyr_Olive_2.setVisible(true);
var layersList = [lyr_Basemaps_AerialPhoto2024_0,lyr_Basemaps_Orthophoto_1,lyr_Olive_2];
lyr_Olive_2.set('fieldAliases', {'Name': 'Bed', 'Uses': 'Uses', 'Planted': 'Planted', 'Plants': 'Plants', });
lyr_Olive_2.set('fieldImages', {'Name': 'TextEdit', 'Uses': '', 'Planted': '', 'Plants': '', });
lyr_Olive_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Uses': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Plants': 'inline label - always visible', });
lyr_Olive_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});