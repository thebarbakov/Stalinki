import React from "react"
import Scale from './Scale'
import {totalStatics} from '../../utils/utils.js'

function Statistics(props) {
    const photoStat = ((props.data.statistics.photo / totalStatics) * 10).toFixed()
    const mapStat = ((props.data.statistics.map / totalStatics) * 10).toFixed()
    const factStat = ((props.data.statistics.quetion / totalStatics) * 10).toFixed()
    
    const resultStat = (Number(mapStat) + Number(photoStat))/2
    return (
      <div className="building__static">
          <div className="static__scales">
                <div className="static__scale">
                    <h2 className="static__title">Узнаваемость</h2>
                    <Scale size={resultStat}/>
                </div>
                <div className="static__scale">
                    <h2 className="static__title">Осведомленность</h2>
                    <Scale size={factStat}/>
                </div>
          </div>
          <div className="static__description">
              <p className="description__title">Узнаваемость</p>
              <p className="description__text">Данная шкала была сформирована в ходе проведенного опроса,
                целью которого являлся анализ знаний о Сталинских высотках в городе Москва.
                Респондентам предлагалось сопоставить фото и название. Опрос проводился в апреле-мае 2022
                года среди средней возрастной категории.</p>
              <p className="description__info">Сопоставили фото здания с названием <span>{props.data.statistics.photo}</span> из <span>{totalStatics}</span></p>  
              <p className="description__info">Правильно указали местоположение <span>{props.data.statistics.map}</span> из <span>{totalStatics}</span></p>  
              <p className="description__title"> Осведомленность</p>
              <p className="description__text">Для выявления уровня осведомленности респондентам предлагалось ответить на вопросы, составленные на основе фактов о зданиях.</p>
              <p className="description__fact">Кстати, а Вы знали, что {props.data.statistics.fact}</p>
              <p className="description__info">Правильно сопоставили данный факт с зданием <span>{props.data.statistics.quetion}</span> из <span>{totalStatics}</span></p>  
          </div>
      </div>
    )
}

export default Statistics