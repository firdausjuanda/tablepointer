import logo from '../assets/icons/TablePointer Logo-White (300 ppi) 1.png';


function Header() {
  return (
    <div className='flex flex-col text-left p-[40px] text-white md:pt-60'>
        <img  src={logo} alt='Tablepointer'/>
        <h1 className='text-[50px] text-white leading-[1.15] my-[10px]'>Savings Estimator</h1>
        <h3>Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25.</h3>
    </div>
  )
}

export default Header