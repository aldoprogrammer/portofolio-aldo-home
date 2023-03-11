import { School, Work } from '@material-ui/icons';
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules'
import VerticalTimelineElement from 'react-vertical-timeline-component/dist-modules/VerticalTimelineElement'
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element-education'
          date='2014-2017'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            SMK N 3 Kota Bengkulu
          </h3>
          <p>Teknik Komputer & Jaringan</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element-education'
          date='2019-2023'
          iconStyle={{background: "#111", color:"#fff"}}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            Universitas Muhammadiyah Bengkulu
          </h3>
          <p>Teknik Informatika</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element-work'
          date='2019-2022'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Blogger
          </h3>
          <p>Writing an Article</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element-work'
          date='2019-2022'
          iconStyle={{background: "#111", color:"#fff"}}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Web Programmer
          </h3>
          <p>Javascript, PHP</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
