var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Indicadores_barrios_AMC_1 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_1 = format_Indicadores_barrios_AMC_1.readFeatures(json_Indicadores_barrios_AMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicadores_barrios_AMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_1.addFeatures(features_Indicadores_barrios_AMC_1);
var lyr_Indicadores_barrios_AMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_1, 
                style: style_Indicadores_barrios_AMC_1,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
    title: 'Indicadores_barrios_AMC<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_0.png" /> Aurora de Chile<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_1.png" /> Barrio Estación<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_2.png" /> Barrio Universitario<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_3.png" /> Cerro Verde Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_4.png" /> Chiguayante Sur<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_5.png" /> Chillancito<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_6.png" /> Collao<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_7.png" /> Colón 9000<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_8.png" /> Concepción Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_9.png" /> David Fuentes<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_10.png" /> El Morro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_11.png" /> Hualpencillo<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_12.png" /> Las Tres Pascualas<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_13.png" /> Lo Mendez<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_14.png" /> Lo Rojas<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_15.png" /> Lota Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_16.png" /> Mirador del Pacífico<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_17.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_18.png" /> Penco Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_1_19.png" /> San Pedro del Valle<br />' });
var format_PuntosdeInteres_2 = new ol.format.GeoJSON();
var features_PuntosdeInteres_2 = format_PuntosdeInteres_2.readFeatures(json_PuntosdeInteres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosdeInteres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdeInteres_2.addFeatures(features_PuntosdeInteres_2);
var lyr_PuntosdeInteres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosdeInteres_2, 
                style: style_PuntosdeInteres_2,
                popuplayertitle: 'Puntos de Interes',
                interactive: true,
    title: 'Puntos de Interes<br />\
    <img src="styles/legend/PuntosdeInteres_2_0.png" /> Cancha Huracán<br />\
    <img src="styles/legend/PuntosdeInteres_2_1.png" /> Casa del Arte - Pinacoteca<br />\
    <img src="styles/legend/PuntosdeInteres_2_2.png" /> Cementerio de Chiguayante<br />\
    <img src="styles/legend/PuntosdeInteres_2_3.png" /> Cementerio de Penco<br />\
    <img src="styles/legend/PuntosdeInteres_2_4.png" /> Club hipico de Concepcion<br />\
    <img src="styles/legend/PuntosdeInteres_2_5.png" /> El morro de Talcahuano<br />\
    <img src="styles/legend/PuntosdeInteres_2_6.png" /> Estadio Ester Roa<br />\
    <img src="styles/legend/PuntosdeInteres_2_7.png" /> Humedal Bayona del Valle<br />\
    <img src="styles/legend/PuntosdeInteres_2_8.png" /> Humedal urbado Prince<br />\
    <img src="styles/legend/PuntosdeInteres_2_9.png" /> Laguna las tres Pascualas<br />\
    <img src="styles/legend/PuntosdeInteres_2_10.png" /> Laguna Lo Méndez<br />\
    <img src="styles/legend/PuntosdeInteres_2_11.png" /> Mirador del Pacifico<br />\
    <img src="styles/legend/PuntosdeInteres_2_12.png" /> Parque Ecuador<br />\
    <img src="styles/legend/PuntosdeInteres_2_13.png" /> parque isidora cousiño<br />\
    <img src="styles/legend/PuntosdeInteres_2_14.png" /> Plaza de Armas de Penco<br />\
    <img src="styles/legend/PuntosdeInteres_2_15.png" /> Plaza de Armas de Talcahuano<br />\
    <img src="styles/legend/PuntosdeInteres_2_16.png" /> Plaza de Barrio Estacion<br />\
    <img src="styles/legend/PuntosdeInteres_2_17.png" /> Rio Andalien<br />\
    <img src="styles/legend/PuntosdeInteres_2_18.png" /> Tarro de Jurel - Coronel<br />\
    <img src="styles/legend/PuntosdeInteres_2_19.png" /> Teatro Universidad de Concepcion<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Indicadores_barrios_AMC_1.setVisible(true);lyr_PuntosdeInteres_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Indicadores_barrios_AMC_1,lyr_PuntosdeInteres_2];
lyr_Indicadores_barrios_AMC_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_PuntosdeInteres_2.set('fieldAliases', {'Name': 'Name', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Coor Y': 'Coor Y', 'Link video': 'Link video', 'Coor X': 'Coor X', });
lyr_Indicadores_barrios_AMC_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_PuntosdeInteres_2.set('fieldImages', {'Name': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Coor Y': 'TextEdit', 'Link video': 'TextEdit', 'Coor X': 'TextEdit', });
lyr_Indicadores_barrios_AMC_1.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'no label', 'Area': 'hidden field', 'hab_m2': 'hidden field', 'Sum_Poblac': 'hidden field', 'av_hab': 'hidden field', 'Long_tLic': 'hidden field', 'Long_tNLic': 'hidden field', 'Suma_Trans': 'hidden field', 'porc_cober': 'hidden field', 'Distance': 'hidden field', 'LongcicloK': 'hidden field', 'Long_rvial': 'hidden field', });
lyr_PuntosdeInteres_2.set('fieldLabels', {'Name': 'no label', 'Barrio': 'no label', 'Comuna': 'no label', 'Coor Y': 'no label', 'Link video': 'no label', 'Coor X': 'no label', });
lyr_PuntosdeInteres_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});