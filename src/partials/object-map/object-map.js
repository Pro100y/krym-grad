document.addEventListener('DOMContentLoaded', function () {

    ymaps.ready()
        .done(function (ym) {
            var map = new ym.Map('object-map-widget', {
                center: [44.49540857460564,34.16389149999997],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            });


            var query = [
                'Россия, Республика Крым, Ялта, Садовая улица, 2',
                'Россия, Республика Крым, Ялта, Садовая улица, 4',
                'Россия, Республика Крым, Ялта, Садовая улица, 6',
                'Россия, Республика Крым, Ялта, Садовая улица, 8',
                'Россия, Республика Крым, Ялта, Садовая улица, 10',
                'Россия, Республика Крым, Ялта, Садовая улица, 3',
            ];

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

                        map.setBounds(map.geoObjects.getBounds());
                    }
                });
            });

        });

});