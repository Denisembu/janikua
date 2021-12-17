var size = 0;
var placement = 'point';
function categories_Polig_Thiessen_Clip_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CAMELINAS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(110,137,255,0.12549019607843137)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CIUDAD UNIVERSITARIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,5,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(228,74,51,0.12549019607843137)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CRUZ DEL BARRENO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,86,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(241,124,74,0.07450980392156863)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GERTRUDIZ SANCHEZ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(147,95,65,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(173,148,126,0.11764705882352941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'INDEPENDENCIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,126,126,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(251,154,153,0.12156862745098039)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'INDUSTRIAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,175,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(228,192,101,0.14901960784313725)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LOMAS DE LAS AMERICAS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(81,137,130,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(30,234,214,0.13333333333333333)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LOS VERGELES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,136,45,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(155,203,83,0.07450980392156863)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PRADERAS DE MORELIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(88,32,99,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(133,64,202,0.2196078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PRIMO TAPIA OTE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,65,201,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(233,171,230,0.16470588235294117)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TINIJARO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,58,58,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(155,164,169,0.10980392156862745)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VILLA MAGNA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,173,244,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}),fill: new ol.style.Fill({color: 'rgba(141,215,247,0.1411764705882353)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NULL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(44,123,182,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Polig_Thiessen_Clip_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NombreEst");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Futura Bk BT\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NoEstacion") !== null) {
        labelText = String(feature.get("NoEstacion"));
    }
    
var style = categories_Polig_Thiessen_Clip_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
