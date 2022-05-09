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
        if (this.counter > 0) {
            this.map = DG.map(this.mapRef.current, {
                'center': this.props.data.coordinates,
                'zoom': 13,
                'layers': [],
            })
            DG.marker(this.props.data.coordinates).addTo(this.map).bindPopup(this.props.data.name)
        }
        this.counter ++
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
                <div className='main__map-block'>
                    <p className='main__title_map'>Где находится?</p>
                    <div className='main__map' ref={this.mapRef} id="map" style={{width: '100%', height:250, maxWidth: 600}}></div>
                </div>
        </div>
        );
    }
}

export default Building