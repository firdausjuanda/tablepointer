import { Row, Col, Card } from 'antd';
import Colors from '../config/pallete';
import { Link, useNavigate } from 'react-router-dom';
import openingHoursLogo from '../assets/icons/opening-hours.svg';
import airplaneLogo from '../assets/icons/airplane.svg';
import forestLogo from '../assets/icons/forest.svg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SavingResultFile from '../output/pdf/SavingResultFile';
import ReactPDF from '@react-pdf/renderer';


function Result() { 

  const data = {
    outlet: {
      street_address: "Jl. Sutan Syahrir, No 341, Kel. Rawang Barat, Kec. Padang Selatan",
      postal_code: 25217,
      country: "malaysia",
      restaurant_type: "food_court",
      operating_hours: 1,
      tariff: 12,
      exhaust_number: 1,
      exhaust_width: 5,
      ac_number: 2,
      ac_type: [
        "split",
        "vrv"
      ],
      ac_controller: [
        "thermostat",
        "wall_remote"
      ],
      fridge_number: 1,
      fridge_type: [
        "counter_freezer"
      ],
      total_outlets: 2
    },
    contact: {
      name: "FIRDAUS JUANDA",
      email: "firdausjuanda06@gmail.com",
      company_name: "Fird",
      mobile_number: "082380732823",
      sales_contact: "danny_koh"
    }
  }

  return (
    <div>
        <div className='mt-10 text-left'>
          <Card  size="small" title="Outlet Savings Per Annum" headStyle={{ backgroundColor: Colors.tp_dark_blue, color: Colors.white, fontSize: 28 }} bodyStyle={{ border: '1px solid', borderColor: Colors.tp_dark_blue }}>
            <Row>
              <Col className='md:w-1/3 w-full' >
                <h1 className='head_text'>$120000</h1>
                <p className='orange_bold'>SGD Savings</p>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <h1 className='head_text'>999999</h1>
                <p className='orange_bold'>kWh Savings</p>
              </Col>
            </Row>
          </Card>
          <br />
          <Card size="small" title="Outlet Savings Over Equipment Lifetime" headStyle={{ backgroundColor: Colors.tp_dark_blue, color: Colors.white, fontSize: 28 }} bodyStyle={{ border: '1px solid', borderColor: Colors.tp_dark_blue }}>
            <Row>
              <Col className='md:w-1/3 w-full' >
                <h1 className='head_text'>$3000000</h1>
                <p className='orange_bold'>SGD Savings</p>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <h1 className='head_text'>3000000</h1>
                <p className='orange_bold'>kWh Savings</p>
              </Col>
            </Row>
          </Card>
          <br />
          <Card size="small" title="Group Savings Over Equipment Lifetime" headStyle={{ backgroundColor: Colors.tp_dark_blue, color: Colors.white, fontSize: 28 }} bodyStyle={{ border: '1px solid', borderColor: Colors.tp_dark_blue }}>
            <Row>
              <Col className='md:w-1/3 w-full' >
                <h1 className='head_text'>$3000000</h1>
                <p className='orange_bold'>SGD Savings</p>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <h1 className='head_text'>3000000</h1>
                <p className='orange_bold'>kWh Savings</p>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col className='md:w-1/3 w-full' >
                <img className='mx-auto' src={openingHoursLogo} width={100} height={100} alt='opening-hours'/>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <img className='mx-auto' src={airplaneLogo} width={100} height={100} alt='airplane'/>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <img className='mx-auto' src={forestLogo} width={100} height={100} alt='forest'/>
              </Col>
            </Row>
            <Row>
              <Col className='md:w-1/3 w-full' >
                <h1 className='head_text'>3000000</h1>
                <p className='orange_bold'>Meal Served</p>
                <p className='orange_small'>Equivalent to operating XXX more days.</p>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <h1 className='head_text'>3000000</h1>
                <p className='orange_bold'>kg of CO2</p>
                <p className='orange_small'>Equivalent to driving XXX cars for one year.</p>
              </Col>
              <Col className='md:w-1/3 w-full'>
                <h1 className='head_text'>3000000</h1>
                <p className='orange_bold'>Trees Planted</p>
                <p className='orange_small'>Equivalent to XXX soccer fields.</p>
              </Col>
            </Row>
          </Card>
          <p className='dark_blue_small mt-[10px]'>Figures represented in this report are an estimate and may differ from the actual savings generated.</p>
          <Row className='mt-10 justify-end'>
            <Link to={'/contact-details'}><button className='plain_btn_outline'>Back</button></Link>
            
              <Link to={'/result/pdf'} target='_blank'>
                {/* <PDFDownloadLink fileName='TablePointer - Energy Saving Projection' document={<SavingResultFile/>} > */}
                  <button className='primary_btn ml-2'>Download Report</button>
                {/* </PDFDownloadLink> */}
              </Link>
          </Row>
        </div>
    </div>
  )
  }

export default Result