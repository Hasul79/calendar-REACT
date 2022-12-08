import moment from 'moment';
import Header from '../Header';
import Monitor from '../Monitor';
import CalendarGrid from '../CalendarGrid';
import styled from 'styled-components';


const ShadowWrapper = styled('div')`
border-top: 1px solid #737374;
border-left: 1px solid #464648;
border-right: 1px solid #464648;
border-bottom: 2px solid #464648;
border-radius: 8px;
overflow:hidden;
box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
// display: flex;
// flex-direction: column;

`

function App() {

   window.moment = moment;

  moment.updateLocale('en', {week:{dow: 1} })
  const startDay = moment().startOf('month').startOf('week')
  // const endDay = moment().endOf('month').endOf('week')
  
// console.log(startDay.format("YYYY-MM-DD"));
// console.log(endDay.format("YYYY-MM-DD"));

//   const calendar = [];
//    const day = startDay.clone();

//   while(!day.isAfter(endDay)) {
//   calendar
//   console.log(day)
// calendar.push(day.clone());
// day.add(1, 'day')
//   }

//   console.log(calendar);
//   window.startDay = startDay;
//   window.endDay = endDay;
//   window.day = day;
 

  return (
    <ShadowWrapper >
      <Header />
      <Monitor />
      <CalendarGrid  startDay={startDay}/>
    </ShadowWrapper>
  );
}

export default App;
