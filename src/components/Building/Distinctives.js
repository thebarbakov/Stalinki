import React from "react"
import DistinctivesMSU from './DistinctivesList/DistinctivesMSU'
import DistinctivesKotel from './DistinctivesList/DistinctivesKotel'
import DistinctivesMid from './DistinctivesList/DistinctivesMid'
import DistinctivesUkr from './DistinctivesList/DistinctivesUkr'
import DistinctivesKudr from './DistinctivesList/DistinctivesKudr'
import DistinctivesVorota from './DistinctivesList/DistinctivesVorota'
import DistinctivesLenin from './DistinctivesList/DistinctivesLenin'
import '../../blocks/Distinctives.scss'

class Distinctives extends React.Component {
    constructor(props) {
        super(props);

        this.state = {popup: null}
    }

    closePopup = () => {
        this.setState({popup: null})
    }

    handlePopup = (text) => {
        this.setState({popup: text})
    }
    
    render(){
        return (
            <>
            {this.props.data.name === 'Московский государственный университет'
            ? <DistinctivesMSU popup={this.handlePopup} data={this.props.data}/> 
            : this.props.data.name === 'Жилой дом на Котельнической набережной'
            ? <DistinctivesKotel popup={this.handlePopup} data={this.props.data}/>
            : this.props.data.name === 'Министерство иностранных дел РФ'
            ? <DistinctivesMid popup={this.handlePopup} data={this.props.data}/>
            : this.props.data.name === 'Гостиница «Украина»'
            ? <DistinctivesUkr popup={this.handlePopup} data={this.props.data}/>
            : this.props.data.name === 'Жилой дом на Кудринской площади'
            ? <DistinctivesKudr popup={this.handlePopup} data={this.props.data}/>
            : this.props.data.name === 'Административно-жилое здание возле «Красных ворот»'
            ? <DistinctivesVorota popup={this.handlePopup} data={this.props.data}/>
            : this.props.data.name === 'Гостиница «Ленинградская»'
            ? <DistinctivesLenin popup={this.handlePopup} data={this.props.data}/>
            : ''}
            <div className={`popup ${this.state.popup !== null && 'popup_opened'}`}>
                <div className="popup__container">
                    <button className="popup__button-close" type="button" id="button-close-profile" onClick={this.closePopup}></button>
                    <p>{this.state.popup}</p>
                </div>
                <div className="popup__overlay" onClick={this.closePopup}></div>
            </div>
            </>
        )
    }
}

export default Distinctives