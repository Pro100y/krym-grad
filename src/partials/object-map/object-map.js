document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | YANDEX MAP
    |--------------------------------------------------------------------------
    |
    | Интерактивная карта
    |
    */

    $(document).ready(function () {
        if ($('.object-map').length) {
            ymaps.ready(function () {
                var placemark, center;
                var query = [
                    'Россия, Республика Крым, Ялта, Садовая улица, 2 ',
                    'Россия, Республика Крым, Ялта, Садовая улица, 4 ',
                    'Россия, Республика Крым, Ялта, Садовая улица, 6 ',
                    'Россия, Республика Крым, Ялта, Садовая улица, 8 ',
                    'Россия, Республика Крым, Ялта, Садовая улица, 10 ',
                    'Россия, Республика Крым, Ялта, Садовая улица, 3 ',
                ];

                var map = new ymaps.Map('object-map-widget', {
                    zoom: 17,
                    center: [50, 50],
                    behaviors: ['drag', 'zoomControl', 'scrollZoom', 'typeSelector']
                });

                map.controls.add('zoomControl');

                map.controls.add('mapTools', {
                    left: 35,
                    top: 5
                });

                $.each(query, function (i, addr) {
                    ymaps.geocode(addr, {
                        results: 1
                    }).then(function (res) {
                        var firstGeoObject = res.geoObjects.get(0);

                        if (firstGeoObject) {
                            if (typeof coords != 'object') {
                                var coords = firstGeoObject.geometry.getCoordinates();
                            }

                            placemark = new ymaps.Placemark(coords, {
                                hintContent: addr
                            });

                            map.geoObjects.add(placemark);

                            map.setCenter(coords);
                        }
                    });
                });
            });
        }
    });

});