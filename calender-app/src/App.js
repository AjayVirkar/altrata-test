import './App.css';
import Calendar from './components/Calender';
import { useState } from 'react';

const App = () => {
  const [date, setDate] = useState(new Date());

  const changeTheDate = (e) => {
    setDate(e.target.value);
  }
  return (
    <div>
      <div className="my-10 text-center" >
        <label htmlFor="">Date : </label>
        <input onChange={changeTheDate} type="date" name="date" id="date" />
      </div>
      <Calendar date={date} />
    </div>
  );
}

export default App;
