import {HiHome, HiUser, HiViewColumns, HiChatBubbleBottomCenterText, HiRectangleGroup, HiEnvelope} from 'react-icons/hi';

export const navData = [
  {name: 'home', path:'/', icon: <HiHome/>},
  {name: 'about', path: '/about', icon: <HiUser/>},
  {name: 'services', path:'/services', icon: <HiRectangleGroup/>},
  {name: 'work', path:'/work', icon:<HiViewColumns/>},
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText/>
  },
  {
    name: 'contact', path: '/contact', icon: <HiEnvelope/>,
  },

];

const Nav = () => {
  return (
    <div>
      Nav
    </div>
  )
}

export default Nav
