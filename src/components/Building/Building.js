import Main from './Main'
import Info from './Info'
import Photos from './Photos'
import Statistics from './Statistics'
import Distinctives from './Distinctives'
import { Routes, Route, NavLink } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import '../../blocks/Building.scss'

function Building(props) {

    return (
      <div className='building'>
          <div className='building__container'>
            <h1 className='building__header'>{props.data.name}</h1>
            <NavLink to='/'>Back</NavLink>
            <div className='building__nav'>
              <NavLink className='building__nav-element' to={'main'}>Главная</NavLink>
              <NavLink className='building__nav-element' to={'info'}>Инфо</NavLink>
              <NavLink className='building__nav-element' to={'photos'}>Фото</NavLink>
              <NavLink className='building__nav-element' to={'statistics'}>Статистика</NavLink>
              <NavLink className='building__nav-element' to={'distinctives'}>Отличительные детали</NavLink>
            </div>
              <Routes>
                  <Route path={`main`} element={<Main data={props.data}/>}/>
                  <Route path={`info`} element={<Info data={props.data}/>}/>
                  <Route path={`photos`} element={<Photos data={props.data}/>}/>
                  <Route path={`statistics`} element={<Statistics data={props.data}/>}/>
                  <Route path={`distinctives`} element={<Distinctives data={props.data}/>}/>
              </Routes>
          </div>
      </div>
    );
}

export default Building