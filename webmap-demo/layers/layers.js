var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SLCo_Healthcare_Tract_Joined_1 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Tract_Joined_1 = format_SLCo_Healthcare_Tract_Joined_1.readFeatures(json_SLCo_Healthcare_Tract_Joined_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Tract_Joined_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Tract_Joined_1.addFeatures(features_SLCo_Healthcare_Tract_Joined_1);
var lyr_SLCo_Healthcare_Tract_Joined_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_Healthcare_Tract_Joined_1, 
                style: style_SLCo_Healthcare_Tract_Joined_1,
                interactive: true,
    title: 'SLCo_Healthcare_Tract_Joined<br />\
    <img src="styles/legend/SLCo_Healthcare_Tract_Joined_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SLCo_Healthcare_Tract_Joined_1_1.png" /> 0 - 0<br />\
    <img src="styles/legend/SLCo_Healthcare_Tract_Joined_1_2.png" /> 0 - 1<br />\
    <img src="styles/legend/SLCo_Healthcare_Tract_Joined_1_3.png" /> 1 - 3<br />\
    <img src="styles/legend/SLCo_Healthcare_Tract_Joined_1_4.png" /> 3 - 17<br />'
        });
var format_SLCo_Healthcare_Facilities_2 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Facilities_2 = format_SLCo_Healthcare_Facilities_2.readFeatures(json_SLCo_Healthcare_Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Facilities_2.addFeatures(features_SLCo_Healthcare_Facilities_2);
var lyr_SLCo_Healthcare_Facilities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_Healthcare_Facilities_2, 
                style: style_SLCo_Healthcare_Facilities_2,
                interactive: false,
                title: '<img src="styles/legend/SLCo_Healthcare_Facilities_2.png" /> SLCo_Healthcare_Facilities'
            });
var format_SLCo_County_Boundary_3 = new ol.format.GeoJSON();
var features_SLCo_County_Boundary_3 = format_SLCo_County_Boundary_3.readFeatures(json_SLCo_County_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_County_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_County_Boundary_3.addFeatures(features_SLCo_County_Boundary_3);
var lyr_SLCo_County_Boundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_County_Boundary_3, 
                style: style_SLCo_County_Boundary_3,
                interactive: true,
                title: '<img src="styles/legend/SLCo_County_Boundary_3.png" /> SLCo_County_Boundary'
            });

lyr_CartoLight_0.setVisible(true);lyr_SLCo_Healthcare_Tract_Joined_1.setVisible(true);lyr_SLCo_Healthcare_Facilities_2.setVisible(true);lyr_SLCo_County_Boundary_3.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SLCo_Healthcare_Tract_Joined_1,lyr_SLCo_Healthcare_Facilities_2,lyr_SLCo_County_Boundary_3];
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_coun': 'total_coun', 'total': 'total', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FACTYPE': 'FACTYPE', 'FACILITY_I': 'FACILITY_I', 'FACID': 'FACID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTY': 'COUNTY', 'TELEHEALTH': 'TELEHEALTH', 'FUNCTIONAL': 'FUNCTIONAL', });
lyr_SLCo_County_Boundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_coun': 'TextEdit', 'total': 'TextEdit', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldImages', {'OBJECTID': 'Range', 'FACTYPE': 'TextEdit', 'FACILITY_I': 'TextEdit', 'FACID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTY': 'TextEdit', 'TELEHEALTH': 'TextEdit', 'FUNCTIONAL': 'TextEdit', });
lyr_SLCo_County_Boundary_3.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SLCo_Healthcare_Tract_Joined_1.set('fieldLabels', {'objectid': 'no label', 'geoid10': 'no label', 'total_coun': 'no label', 'total': 'no label', });
lyr_SLCo_Healthcare_Facilities_2.set('fieldLabels', {'OBJECTID': 'no label', 'FACTYPE': 'no label', 'FACILITY_I': 'no label', 'FACID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTY': 'no label', 'TELEHEALTH': 'no label', 'FUNCTIONAL': 'no label', });
lyr_SLCo_County_Boundary_3.set('fieldLabels', {'OBJECTID': 'inline label', 'COUNTYNBR': 'inline label', 'ENTITYNBR': 'inline label', 'ENTITYYR': 'inline label', 'NAME': 'inline label', 'FIPS': 'inline label', 'STATEPLANE': 'inline label', 'POP_LASTCE': 'inline label', 'POP_CURRES': 'inline label', 'GlobalID': 'inline label', 'FIPS_STR': 'inline label', 'COLOR4': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_SLCo_County_Boundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});