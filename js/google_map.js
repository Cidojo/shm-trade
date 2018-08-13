    function initialize() {
    	var lating = new google.maps.LatLng(59.855673,29.065832); // 55.775849,37.621123 - это координаты.
    	var mapOptions = {
    		disableDefaultUI: true, // отключение интерфейса, чтобы отображалась только карта
    		zoom: 16, // величина приближения карты
    		center: lating, // центрирование на координаты, которые указывали мы.
    		mapTypeId: google.maps.MapTypeId.ROADMAP /* 
    		в каком виде отображать.
			ROADMAP – обычная двухмерная карта, используемая по умолчанию
			SATELLITE – фотографическая карта
			HYBRID – комбинация фотографий и слоя обычной карты с наиболее важными объектами (дорогами, названиями городов).
			TERRAIN – физический рельеф местности с отображением высот и гидрографических объектов (гор, рек и т. д.).
    		*/
    	}
    	var map = new google.maps.Map(document.getElementById('contacts__map'), mapOptions);
    }