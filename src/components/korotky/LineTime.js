import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { useTranslation } from "react-i18next";

export function LineTime(){

  const {t} = useTranslation();

  return(
    <div>
      
      <Timeline lineColor={'#5d4508'} > {/*полоса */}
        <TimelineItem
          key="001"
          dateText="1930—1945"
          dateInnerStyle={{ background: '#94814f' }}
          style={{ color: '#5d4508' }} //точки
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("korotky-h1")}</h3>
          <p>{t("korotky-timedesc1")}
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="1945—1963"
          dateInnerStyle={{ background: '#d1ae55', color: '#fff' }}
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("korotky-h2")}</h3>
          <p>{t("korotky-timedesc2")}
          </p>
        </TimelineItem>
        
        <TimelineItem
          key="003"
          dateText="1963—1984"
          dateInnerStyle={{ background: '#9d823e' }}
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("korotky-h3")}</h3>
          <p>{t("korotky-timedesc3")}
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
