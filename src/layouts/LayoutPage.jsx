import { Outlet } from 'react-router-dom';
import FooterComp from './../components/footer/FooterComp';
import Navigations from '../components/navigaton/Navigations';

const LayoutPage = () => {
  return (
    <div>
        <Navigations/>
        <Outlet/>
        <FooterComp/>
    </div>
  )
}

export default LayoutPage;