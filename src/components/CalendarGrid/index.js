import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: #484848;
   `;
const CellWrapper = styled.div`
   min-width: 146px;
   min-height: 78px;
   background: ${props => props.isWeekend ? "#272829"  :  "#1E1F21" };
   color: #DDDCDD;
   `;
const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
   `;
const DayWrapper = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     width: 31px;
     height: 31px;
     margin:2px;
   `;
const CurrentDay = styled('div')`
    height: 100%;
    width: 100%;
    background: #f00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

   export default function CalendarGrid({ startDay }) {

    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    console.log(daysArray);

    const isCurrentDay = (day) => moment().isSame(day, 'day');
  console.log(isCurrentDay)

   
    return (
        <GridWrapper>
            {
                daysArray.map((dayItem) => (
                    <CellWrapper key={dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                        >
                        <RowInCell justifyContent={'flex-end'}>
                            <DayWrapper>
                                {!isCurrentDay(dayItem)  &&  dayItem.format('D')}
                                {isCurrentDay(dayItem)  &&  <CurrentDay>{dayItem.format('D')}</CurrentDay>} 
                            </DayWrapper>
                        </RowInCell>
                    </CellWrapper>
                ))
            }
        </GridWrapper>
    );
};
