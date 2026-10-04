var wms_layers = [];


        var lyr_CitraSatelite_0 = new ol.layer.Tile({
            'title': 'Citra Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_line_1 = new ol.format.GeoJSON();
var features_Jalan_line_1 = format_Jalan_line_1.readFeatures(json_Jalan_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_line_1.addFeatures(features_Jalan_line_1);
var lyr_Jalan_line_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_line_1, 
                style: style_Jalan_line_1,
                popuplayertitle: 'Jalan_line',
                interactive: true,
                title: '<img src="styles/legend/Jalan_line_1.png" /> Jalan_line'
            });
var format_BatasWilayah_2 = new ol.format.GeoJSON();
var features_BatasWilayah_2 = format_BatasWilayah_2.readFeatures(json_BatasWilayah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayah_2.addFeatures(features_BatasWilayah_2);
var lyr_BatasWilayah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayah_2, 
                style: style_BatasWilayah_2,
                popuplayertitle: 'BatasWilayah',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayah_2.png" /> BatasWilayah'
            });
var format_Jogoyasan_3 = new ol.format.GeoJSON();
var features_Jogoyasan_3 = format_Jogoyasan_3.readFeatures(json_Jogoyasan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jogoyasan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jogoyasan_3.addFeatures(features_Jogoyasan_3);
var lyr_Jogoyasan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jogoyasan_3, 
                style: style_Jogoyasan_3,
                popuplayertitle: 'Jogoyasan',
                interactive: true,
                title: '<img src="styles/legend/Jogoyasan_3.png" /> Jogoyasan'
            });
var format_BC_Andong_4 = new ol.format.GeoJSON();
var features_BC_Andong_4 = format_BC_Andong_4.readFeatures(json_BC_Andong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BC_Andong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BC_Andong_4.addFeatures(features_BC_Andong_4);
var lyr_BC_Andong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BC_Andong_4, 
                style: style_BC_Andong_4,
                popuplayertitle: 'BC_Andong',
                interactive: true,
                title: '<img src="styles/legend/BC_Andong_4.png" /> BC_Andong'
            });
var format_Al__Barokah_Store_5 = new ol.format.GeoJSON();
var features_Al__Barokah_Store_5 = format_Al__Barokah_Store_5.readFeatures(json_Al__Barokah_Store_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Al__Barokah_Store_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Al__Barokah_Store_5.addFeatures(features_Al__Barokah_Store_5);
var lyr_Al__Barokah_Store_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Al__Barokah_Store_5, 
                style: style_Al__Barokah_Store_5,
                popuplayertitle: 'Al_-_Barokah_Store',
                interactive: true,
                title: '<img src="styles/legend/Al__Barokah_Store_5.png" /> Al_-_Barokah_Store'
            });
var format_Gerit_6 = new ol.format.GeoJSON();
var features_Gerit_6 = format_Gerit_6.readFeatures(json_Gerit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gerit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gerit_6.addFeatures(features_Gerit_6);
var lyr_Gerit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gerit_6, 
                style: style_Gerit_6,
                popuplayertitle: 'Gerit',
                interactive: true,
                title: '<img src="styles/legend/Gerit_6.png" /> Gerit'
            });
var format_Jumpa_Farm_7 = new ol.format.GeoJSON();
var features_Jumpa_Farm_7 = format_Jumpa_Farm_7.readFeatures(json_Jumpa_Farm_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jumpa_Farm_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jumpa_Farm_7.addFeatures(features_Jumpa_Farm_7);
var lyr_Jumpa_Farm_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jumpa_Farm_7, 
                style: style_Jumpa_Farm_7,
                popuplayertitle: 'Jumpa_Farm',
                interactive: true,
                title: '<img src="styles/legend/Jumpa_Farm_7.png" /> Jumpa_Farm'
            });
var format_Nitnot_Cake_Bakery_8 = new ol.format.GeoJSON();
var features_Nitnot_Cake_Bakery_8 = format_Nitnot_Cake_Bakery_8.readFeatures(json_Nitnot_Cake_Bakery_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nitnot_Cake_Bakery_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nitnot_Cake_Bakery_8.addFeatures(features_Nitnot_Cake_Bakery_8);
var lyr_Nitnot_Cake_Bakery_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nitnot_Cake_Bakery_8, 
                style: style_Nitnot_Cake_Bakery_8,
                popuplayertitle: 'Nitnot_Cake_(Bakery)',
                interactive: true,
                title: '<img src="styles/legend/Nitnot_Cake_Bakery_8.png" /> Nitnot_Cake_(Bakery)'
            });
var format_Toko_Om_Papang_9 = new ol.format.GeoJSON();
var features_Toko_Om_Papang_9 = format_Toko_Om_Papang_9.readFeatures(json_Toko_Om_Papang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_Om_Papang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_Om_Papang_9.addFeatures(features_Toko_Om_Papang_9);
var lyr_Toko_Om_Papang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_Om_Papang_9, 
                style: style_Toko_Om_Papang_9,
                popuplayertitle: 'Toko_Om_Papang',
                interactive: true,
                title: '<img src="styles/legend/Toko_Om_Papang_9.png" /> Toko_Om_Papang'
            });
var format_Toko_Rohim_10 = new ol.format.GeoJSON();
var features_Toko_Rohim_10 = format_Toko_Rohim_10.readFeatures(json_Toko_Rohim_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_Rohim_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_Rohim_10.addFeatures(features_Toko_Rohim_10);
var lyr_Toko_Rohim_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_Rohim_10, 
                style: style_Toko_Rohim_10,
                popuplayertitle: 'Toko_Rohim',
                interactive: true,
                title: '<img src="styles/legend/Toko_Rohim_10.png" /> Toko_Rohim'
            });
var format_TokoNida_11 = new ol.format.GeoJSON();
var features_TokoNida_11 = format_TokoNida_11.readFeatures(json_TokoNida_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TokoNida_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokoNida_11.addFeatures(features_TokoNida_11);
var lyr_TokoNida_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TokoNida_11, 
                style: style_TokoNida_11,
                popuplayertitle: 'TokoNida',
                interactive: true,
                title: '<img src="styles/legend/TokoNida_11.png" /> TokoNida'
            });
var format_Warung_Sembako_12 = new ol.format.GeoJSON();
var features_Warung_Sembako_12 = format_Warung_Sembako_12.readFeatures(json_Warung_Sembako_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warung_Sembako_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_Sembako_12.addFeatures(features_Warung_Sembako_12);
var lyr_Warung_Sembako_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_Sembako_12, 
                style: style_Warung_Sembako_12,
                popuplayertitle: 'Warung_Sembako',
                interactive: true,
                title: '<img src="styles/legend/Warung_Sembako_12.png" /> Warung_Sembako'
            });
var format_WarungMbakBi1_13 = new ol.format.GeoJSON();
var features_WarungMbakBi1_13 = format_WarungMbakBi1_13.readFeatures(json_WarungMbakBi1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarungMbakBi1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarungMbakBi1_13.addFeatures(features_WarungMbakBi1_13);
var lyr_WarungMbakBi1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarungMbakBi1_13, 
                style: style_WarungMbakBi1_13,
                popuplayertitle: 'WarungMbakBi1',
                interactive: true,
                title: '<img src="styles/legend/WarungMbakBi1_13.png" /> WarungMbakBi1'
            });

lyr_CitraSatelite_0.setVisible(true);lyr_Jalan_line_1.setVisible(true);lyr_BatasWilayah_2.setVisible(true);lyr_Jogoyasan_3.setVisible(true);lyr_BC_Andong_4.setVisible(true);lyr_Al__Barokah_Store_5.setVisible(true);lyr_Gerit_6.setVisible(true);lyr_Jumpa_Farm_7.setVisible(true);lyr_Nitnot_Cake_Bakery_8.setVisible(true);lyr_Toko_Om_Papang_9.setVisible(true);lyr_Toko_Rohim_10.setVisible(true);lyr_TokoNida_11.setVisible(true);lyr_Warung_Sembako_12.setVisible(true);lyr_WarungMbakBi1_13.setVisible(true);
var layersList = [lyr_CitraSatelite_0,lyr_Jalan_line_1,lyr_BatasWilayah_2,lyr_Jogoyasan_3,lyr_BC_Andong_4,lyr_Al__Barokah_Store_5,lyr_Gerit_6,lyr_Jumpa_Farm_7,lyr_Nitnot_Cake_Bakery_8,lyr_Toko_Om_Papang_9,lyr_Toko_Rohim_10,lyr_TokoNida_11,lyr_Warung_Sembako_12,lyr_WarungMbakBi1_13];
lyr_Jalan_line_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'tunnel': 'tunnel', 'railway': 'railway', 'width': 'width', 'oneway': 'oneway', 'building': 'building', 'amenity': 'amenity', 'capacity': 'capacity', 'highway': 'highway', 'smoothness': 'smoothness', 'name': 'name', 'public_tra': 'public_tra', 'layer': 'layer', 'operator': 'operator', 'barrier': 'barrier', 'bridge': 'bridge', 'aeroway': 'aeroway', 'parking': 'parking', });
lyr_BatasWilayah_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jogoyasan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BC_Andong_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Al__Barokah_Store_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Gerit_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Jumpa_Farm_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Nitnot_Cake_Bakery_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Toko_Om_Papang_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Toko_Rohim_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_TokoNida_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Warung_Sembako_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_WarungMbakBi1_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Alamat': 'Alamat', 'Nama_UMKM': 'Nama_UMKM', 'Nama_Pemil': 'Nama_Pemil', 'Deskripsi': 'Deskripsi', 'Foto': 'Foto', });
lyr_Jalan_line_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'tunnel': 'TextEdit', 'railway': 'TextEdit', 'width': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'capacity': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'layer': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'parking': 'TextEdit', });
lyr_BatasWilayah_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jogoyasan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BC_Andong_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Al__Barokah_Store_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Gerit_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Jumpa_Farm_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Nitnot_Cake_Bakery_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Toko_Om_Papang_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Toko_Rohim_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_TokoNida_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Warung_Sembako_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_WarungMbakBi1_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Alamat': 'TextEdit', 'Nama_UMKM': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Deskripsi': '', 'Foto': '', });
lyr_Jalan_line_1.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'surface': 'no label', 'tunnel': 'no label', 'railway': 'no label', 'width': 'no label', 'oneway': 'no label', 'building': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'name': 'no label', 'public_tra': 'no label', 'layer': 'no label', 'operator': 'no label', 'barrier': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'parking': 'no label', });
lyr_BatasWilayah_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jogoyasan_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BC_Andong_4.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'header label - visible with data', 'Foto': 'no label', });
lyr_Al__Barokah_Store_5.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Gerit_6.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Jumpa_Farm_7.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Nitnot_Cake_Bakery_8.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Toko_Om_Papang_9.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Toko_Rohim_10.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_TokoNida_11.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_Warung_Sembako_12.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_WarungMbakBi1_13.set('fieldLabels', {'OBJECTID': 'no label', 'Alamat': 'header label - visible with data', 'Nama_UMKM': 'header label - visible with data', 'Nama_Pemil': 'header label - visible with data', 'Deskripsi': 'no label', 'Foto': 'no label', });
lyr_WarungMbakBi1_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});