import './MainInvite.css';
import top from './half 3.svg';
import line from './Line 1.svg';
import leaf from './gold-leaf 3.svg'
import { FaDirections } from "react-icons/fa";
function MainInvite() {
  return (
    <div className='MainInvite'>
      <img src={top} className='imagetop' alt='top'/>
      <img src={leaf} className='leaf1' alt='leaf'/>
      <img src={leaf} className='leaf2' alt='leaf'/>
      <div className='container'>
        <div className='heading1'>House Warming</div>
        <div className='heading1'>Ceremony</div>
        <img src={line} className='line' alt='line'/>
        <div className='date2'>2 9 . 0 2 . 2 0 2 4</div>
        <div className='address1'>Novus Florence Village</div>
        <div className='address2'>#101, K Block, Phase 2</div>
        <button className='navigate-button' onClick={() => window.open('https://maps.app.goo.gl/p5vPzhecuRPRax458', '_blank')}> Navigate Me <FaDirections /></button>
        <div className='Family'>
          <div className='Person'>
            <div className='Names'>Kamsu Bhaskara Rao</div>
            <div className='Designation'>Ex Armed Forces</div>
          </div>
          <div className='Person'>
            <div className='Names'>Kamsu Aruna</div>
            <div className='Designation'>Home Maker</div>
          </div>
          <div className='Person'>
            <div className='Names'>Kamsu Sasi Teja</div>
            <div className='Designation'>Software Engineer</div>
          </div>
          <div className='Person'>
            <div className='Names'>Kamsu Ravi Teeja</div>
            <div className='Designation'>Software Engineer</div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default MainInvite;
