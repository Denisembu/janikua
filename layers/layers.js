var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Polig_Thiessen_Clip_1 = new ol.format.GeoJSON();
var features_Polig_Thiessen_Clip_1 = format_Polig_Thiessen_Clip_1.readFeatures(json_Polig_Thiessen_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polig_Thiessen_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polig_Thiessen_Clip_1.addFeatures(features_Polig_Thiessen_Clip_1);
var lyr_Polig_Thiessen_Clip_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polig_Thiessen_Clip_1, 
                style: style_Polig_Thiessen_Clip_1,
                interactive: true,
    title: 'Polig_Thiessen_Clip<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_0.png" /> CAMELINAS<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_1.png" /> CIUDAD UNIVERSITARIA<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_2.png" /> CRUZ DEL BARRENO<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_3.png" /> GERTRUDIZ SANCHEZ<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_4.png" /> INDEPENDENCIA<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_5.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_6.png" /> LOMAS DE LAS AMERICAS<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_7.png" /> LOS VERGELES<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_8.png" /> PRADERAS DE MORELIA<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_9.png" /> PRIMO TAPIA OTE<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_10.png" /> TINIJARO<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_11.png" /> VILLA MAGNA<br />\
    <img src="styles/legend/Polig_Thiessen_Clip_1_12.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Polig_Thiessen_Clip_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Polig_Thiessen_Clip_1];
lyr_Polig_Thiessen_Clip_1.set('fieldAliases', {'NombreEst': 'NombreEst', 'NoEstacion': 'NoEstacion', });
lyr_Polig_Thiessen_Clip_1.set('fieldImages', {'NombreEst': '', 'NoEstacion': '', });
lyr_Polig_Thiessen_Clip_1.set('fieldLabels', {'NombreEst': 'header label', 'NoEstacion': 'header label', });
lyr_Polig_Thiessen_Clip_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});