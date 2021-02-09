export function init() {
	const pointA = "Москва, метро Сокольники";
	const pointB = "Москва, Колодезный пер. 2А";
	const pointC = "Москва, метро Преображенская площадь";

	const multiRoute1 = new window.ymaps.multiRouter.MultiRoute(
		{
			referencePoints: [pointA, pointB],
			params: {
				routingMode: 'pedestrian'
			}
		}
	);

	const multiRoute2 = new window.ymaps.multiRouter.MultiRoute(
		{
			referencePoints: [pointC, pointB],
			params: {
				routingMode: 'pedestrian'
			}
		},
		{
			wayPointFinishVisible: false
		}
	);

	const myMap = new window.ymaps.Map('map', {
		// center: [55.798682, 37.695816],
		center: [55.793901, 37.696501],
		zoom: 13.5,
	});

	myMap.geoObjects.add(multiRoute1).add(multiRoute2);
}
