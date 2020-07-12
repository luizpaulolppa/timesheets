import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import {
  ContainerClocks,
  Time,
  NameOfTheWeek,
  NumOfTheMonth,
  AmountOfTimeOfDay,
  ContainerEntriesMenu
} from './styles';

interface DayOfWeek {
  weekName: string;
  monthNumber: number;
  amountOfTimeOfday: string;
}

const Clocks: React.FC = () => {
  const daysOfWeek: DayOfWeek[] = [
    { weekName: 'Sunday', monthNumber: 7, amountOfTimeOfday: '0.00' },
    { weekName: 'Monday', monthNumber: 8, amountOfTimeOfday: '0.00' },
    { weekName: 'Tuesday', monthNumber: 9, amountOfTimeOfday: '0.00' },
    { weekName: 'Wednesday', monthNumber: 10, amountOfTimeOfday: '0.00' },
    { weekName: 'Thursday', monthNumber: 11, amountOfTimeOfday: '0.00' },
    { weekName: 'Friday', monthNumber: 12, amountOfTimeOfday: '0.00' },
    { weekName: 'Saturday', monthNumber: 13, amountOfTimeOfday: '0.00' },
  ];

  function checkWeekends(dayWeek: DayOfWeek) {
    return ['Sunday', 'Saturday'].includes(dayWeek.weekName) ? 'inative' : '';
  }

  function checkDay(dayWeek: DayOfWeek) {
    return dayWeek.weekName === 'Friday' ? 'active' : '';
  }

  return (
    <>
      <ContainerClocks>
        {daysOfWeek.map(dayWeek => (
          <Time 
            key={dayWeek.monthNumber} 
            className={`${checkWeekends(dayWeek)} ${checkDay(dayWeek)}`}>
            <div>
              <NameOfTheWeek className="day-of-week">{dayWeek.weekName}</NameOfTheWeek>
              <NumOfTheMonth className="num-of-month">{dayWeek.monthNumber}</NumOfTheMonth>
              <AmountOfTimeOfDay className="timestamp">{dayWeek.amountOfTimeOfday}</AmountOfTimeOfDay>
            </div>
          </Time>
        ))}
      </ContainerClocks>
      <ContainerEntriesMenu>
        <div>
          <div className="box-navigation-week">
            <FiArrowLeft color="#312f38" />
            <a href="/">Current week</a>
            <FiArrowRight color="#312f38" />
          </div>
          <p>Week total: 0.00</p>
          <button>New time entry</button>
        </div>
      </ContainerEntriesMenu>
    </>
  )
};

export default Clocks;