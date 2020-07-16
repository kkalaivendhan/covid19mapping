
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleRoad_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "THIRUVARUR_1": {
            "type": "geojson",
            "data": json_THIRUVARUR_1
        }
                    ,
        "highriskzone_2": {
            "type": "geojson",
            "data": json_highriskzone_2
        }
                    ,
        "riskzone7km_3": {
            "type": "geojson",
            "data": json_riskzone7km_3
        }
                    ,
        "mainpersonplace_4": {
            "type": "geojson",
            "data": json_mainpersonplace_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleRoad_0_0",
            "type": "raster",
            "source": "GoogleRoad_0"
        },
        {
            "id": "lyr_THIRUVARUR_1_0",
            "type": "fill",
            "source": "THIRUVARUR_1",
            "layout": {},
            "paint": {'fill-opacity': 0.5, 'fill-color': '#cccccc'}
        }
,
        {
            "id": "lyr_highriskzone_2_0",
            "type": "fill",
            "source": "highriskzone_2",
            "layout": {},
            "paint": {'fill-opacity': 0.75, 'fill-color': '#e31a1c'}
        }
,
        {
            "id": "lyr_riskzone7km_3_0",
            "type": "fill",
            "source": "riskzone7km_3",
            "layout": {},
            "paint": {'fill-opacity': 0.5, 'fill-color': '#e31a1c'}
        }
,
        {
            "id": "lyr_mainpersonplace_4_0",
            "type": "circle",
            "source": "mainpersonplace_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 24.94488189006, 2], 'circle-color': '#1f78b4', 'circle-opacity': 1.0, 'circle-stroke-width': 0.75590551182, 'circle-stroke-color': '#b80808'}
        }
],
}