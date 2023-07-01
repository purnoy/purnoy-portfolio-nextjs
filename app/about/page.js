import {FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma} from 'react-icons/fa';
import {SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

export const aboutData = 
[
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        key: 'id',
        // icons: [
        //   <FaHtml5/>,
        //   <FaCss3/>,
        //   <FaJs/>,
        //   <FaReact/>,
        //   <SiNextdotjs/>,
        //   <SiFramer/>,
        //   <FaWordpress/>
        // ],
      },
      {
        title: 'UI/UX Design',
        // icons: [<FaFigma/>, <SiAdobexd/>, <SiAdobephotoshop/>]
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2019 - 2020'
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2020 - 2021'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Brand Executive - Creative Circus Ltd.',
        stage: '2022 - 2023'
      },
      {
        title: 'Senior Copywriter - Shikho Technologies',
        stage: '2022 - 2023'
      },
      {
        title: 'Frontend Developer - Shikho Technologies',
        stage: '2023 - Now'
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'SSC - Dakhin Banasree Model High School',
        stage: '2006'
      },
      {
        title: 'HSC- Shahid Shohorawardi College',
        stage: '2008'
      },
      {
        title: 'CSE - North South University',
        stage: '2009 - 2013'
      },
    ],
  },
]
const About = () => {
  return (
    <div>
      About
    </div>
  )
}

export default About
About