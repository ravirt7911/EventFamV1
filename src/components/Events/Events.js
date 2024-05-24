import './Events.css';
import right from './half 2.svg';
import left from './half 1.svg';

function Events() {
  return (
    <div className='events'>
      <img src={right} className='image right' alt='Right' />
      <img src={left} className='image left' alt='Left' />
      <div className='heading'>Events</div>
      <div className='date1'>29th February 2024</div>
      <div className='event'>
        <div className='title'>Gruhapravesham</div>
        <div className='time'>3:03 AM</div>
      </div>
      <div className='event'>
        <div className='title'>Satyanarayana Vratam</div>
        <div className='time'>4:00 AM</div>
      </div>
      <div className='event'>
        <div className='title'>Lunch</div>
        <div className='time'>12:00 PM</div>
      </div>
    </div>
  );
}

export default Events;
