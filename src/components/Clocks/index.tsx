import React from 'react';

import {
  ContainerClocks,
  Time,
  NameOfTheWeek,
  NumOfTheMonth,
  AmountOfTimeOfDay
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

  return (
    <ContainerClocks>
      {daysOfWeek.map(dayWeek => (
        <Time key={dayWeek.monthNumber}>
          <div>
            <NameOfTheWeek className="day-of-week">{dayWeek.weekName}</NameOfTheWeek>
            <NumOfTheMonth className="num-of-month">{dayWeek.monthNumber}</NumOfTheMonth>
            <AmountOfTimeOfDay className="timestamp">{dayWeek.amountOfTimeOfday}</AmountOfTimeOfDay>
          </div>
        </Time>
      ))}
    </ContainerClocks>
  )
};

export default Clocks;