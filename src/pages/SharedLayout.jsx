import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const SharedLayout = () => {
  return (
    <div className="mx-auto w-[95%] relative max-w-[90em]">
     <Header />
      <div className='flex'>
        <Sidebar/>
        <div className='pl-10 ml-[250px] w-[100%]'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default SharedLayout