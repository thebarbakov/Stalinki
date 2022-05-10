import React from "react"
const DG = require('2gis-maps');

class Building extends React.Component {
    constructor(props) {
        super(props);
        this.description = this.props.data.description
        this.mapRef = React.createRef();
        this.counter = 0
        this.map = null
    }

    componentDidMount(){
            this.map = DG.map(this.mapRef.current, {
                'center': this.props.data.coordinates,
                'zoom': 13,
                'layers': [],
            })
            DG.marker(this.props.data.coordinates).addTo(this.map).bindPopup(this.props.data.name)
        
    }

    render() {
        return (
        <div className='building__main'>
                <div className='main__list'>
                    <div className='main__element'>
                        <p className='main__title'>Годы постройки</p>
                        <p className='main__text'>{this.description.yearsOfBuilding}</p>
                    </div>
                    <div className='main__element'>
                        <p className='main__title'>Архитектор</p>
                        <p className='main__text'>{this.description.architect}</p>
                    </div>
                    <div className='main__element'>
                        <p className='main__title'>Высотность</p>
                        <p className='main__text'>{this.description.height}</p>
                    </div>
                    <div className='main__element'>
                        <p className='main__title'>Тип</p>
                        <p className='main__text' >{this.description.type}</p>
                    </div>
                </div>
                <p className='main__title_map'>Где находится?</p>
                <div className="main__block">
                    <div className='main__map-block'>
                        <div className='main__map' ref={this.mapRef} id="map" style={{width: '100%', height:250}}></div>
                        <a href={`https://yandex.ru/maps/?rtext=${this.props.data.coordinates[0]},${this.props.data.coordinates[1]}&rtt=mt`} className='main__adress'>Построить маршрут до {this.props.data.adress.adress}</a>
                    </div>
                    <div className='map-metro'>
                        <h3 className="map-metro__title">Метро рядом</h3>
                        <ul className="map-metro__list">
                            {this.props.data.adress.metro.map((station, i) => (
                                <li className="map-metro__element" key={i}>
                                    <div className={`map-metro__line _${station.line}`}>{station.line}</div>
                                    <p className="map-metro__name">{station.name}</p>
                                    <p className="map-metro__distance">{station.distance}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </div>
        );
    }
}

export default Building