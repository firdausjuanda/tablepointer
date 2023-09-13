import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { save } from '../redux/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Select, Row, Col, InputNumber, Form } from 'antd';
import Flag from 'react-world-flags';
import Countries from '../constants/Countries';

const { Option } = Select;

function ContactDetails() {
    
    const contact = useSelector((state) => state.contact.value);
    
    const outlet = useSelector((state) => state.outlet.value);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const [form] = Form.useForm();

    const nameValue = Form.useWatch('name', form);
    const emailValue = Form.useWatch('email', form);
    const mobileValue = Form.useWatch('mobile_number', form);
    const companyValue = Form.useWatch('company_name', form);
    const salesValue = Form.useWatch('sales_contact', form);
    const countryCode = Form.useWatch('country_code', form);

    var countries = Countries;

    const salesPersons = [
        { value: 'matthieu_quantin', label: 'Matthieu Quentin' },
        { value: 'danny_koh', label: 'Danny Koh' },
        { value: 'dennis_ong', label: 'Dennis Ong' },
        { value: 'christine_tan', label: 'Christine Tan' }
    ];

    const [mandCom, setManCom] = useState(false);
    
    const [countryCodeValue, setcountryCodeValue] = useState( contact.country_code ?? "+65");

    useEffect(() =>{
        if(Object.keys(outlet).length == 0){
            navigate('/');
        }
        if(countryCode == null && contact.country_code == null ){
            console.log("first")
            setcountryCodeValue('+65');
        }
        countries = Countries;
        return checkMandatory();
    },[]);
    
    const onFinish = (values) => {
        dispatch(save(values));
        navigate('/result');
        const data = {
            outlet: outlet,
            contact: values,
        }
        console.log("Sending to Back-End", data);
        // You can use "data" variable to send to back-end and continue calculating result

    };

    const saveData = () => {
        const values = form.getFieldValue();
        dispatch(save(values));
    }

    const checkMandatory = () => {
        if((nameValue || contact.name) != null && (emailValue || contact.email) != null && (mobileValue || contact.mobile_number) != null && (companyValue || contact.company_name) != null && (salesValue || contact.sales_contact) != null){
            setManCom(true);
        } else {
            setManCom(false);
        }
    }

    const onChangeCountryCode = (value) => {
        setcountryCodeValue(value);
    }

    return (
        <Form.Provider onFormChange={checkMandatory}>
            <Form form={form} name="complex-form" onFinish={onFinish} initialValues={contact}>
            <div className='mt-16 mx-auto w-4/6'>
            <h1 className='head_text_2'>Contact Details</h1>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Name*</label>
                    <Form.Item name='name' rules={[
                        {
                            required: true,
                            message: "Name is required"
                        },
                    ]}>
                        <Input/>
                    </Form.Item>
                </Grid>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Email Address*</label>
                    <Form.Item name='email' rules={[
                        {
                            required: true,
                            message: "Email is required",
                        },
                        {
                            type: "email",
                            message: "Email is not valid",
                        }
                        ]}>
                        <Input />
                    </Form.Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} className='bg-red' marginTop={1}>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Company Name*</label>
                    <Form.Item name='company_name' rules={[
                        {
                            required: true,
                            message: "Company name is required"
                        },
                    ]}>
                        <Input/>
                    </Form.Item>
                </Grid>
                <Grid item className='text-left' md={6}>
                <label className='head_text_label'>Mobile Number*</label>
                <br />
                <Form.Item name='mobile_number' rules={[
                        {
                            required: true,
                            message: "Mobile number is required"
                        },
                    ]}>
                    <Input addonBefore={(
                        <Form.Item noStyle name='country_code'>
                            <Select defaultValue="+65" popupMatchSelectWidth={false} className='flex item-center' style={{ width: '100px',  }} onChange={onChangeCountryCode}>
                                {countries.map((e) => (
                                    <Option key={e.no} value={e.dial} style={{ width: '320px' }} >
                                        <Row wrap={false} className='flex item-center'>
                                            <Col style={{ width: "20px", padding: 0 }}>
                                                <Flag code={ e.code } style={{ height: "22px", width: "18px", paddingTop:5, marginBottom: 0, paddingBottom: 0, paddingRight: 0 }} />
                                            </Col>
                                            <Col style={{ width: "auto", marginLeft: "5px" }}>
                                            {(countryCodeValue != e.dial) && (<span>{e.label}</span>)} {e.dial}
                                            </Col>
                                        </Row>
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    )} type='number' />
                </Form.Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Group Name</label>
                    <Form.Item name='group_name' >
                        <Input />
                    </Form.Item>
                </Grid>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Sales Person In Contact*</label>
                    <br></br>
                    <Form.Item name='sales_contact' rules={[
                        {
                            required: true,
                            message: "Sales person is required"
                        },
                    ]}>
                        <Select
                            style={{
                                width:"100%",
                            }}
                            options={salesPersons}
                            placeholder="Select person"
                        
                        />
                    </Form.Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left' md={6}>
                    <label className='head_text_label'>Job Title</label>
                    <Form.Item name='job_title' >
                        <Input/>
                    </Form.Item>
                </Grid>
            </Grid>
            <br />
            <Row>
                <Col span={24}>
                    <Form.Item colon={false} className="float-right"><button className={mandCom ? "primary_btn ml-2" : "disabled_btn ml-2"} type='submit' disabled={!mandCom}>Next</button></Form.Item>
                    <Link className="float-right" to={'/'} ><button onClick={saveData} className='plain_btn_outline'>Back</button></Link>
                </Col>
            </Row>
            </div>
            </Form>
        </Form.Provider>
    )
    }

export default ContactDetails