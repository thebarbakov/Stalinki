import React from "react"
import DistinctivesMSU from './DistinctivesList/DistinctivesMSU'
import DistinctivesKotel from './DistinctivesList/DistinctivesKotel'
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