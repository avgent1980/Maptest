import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({ x_text, y_text}) => {
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(y_text, x_text),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, [x_text, y_text]);

    return (
        <div id='myMap' style={{
            width: '100%', 
            height: '500px'
        }}></div>
    );
}

export default MapContainer; 