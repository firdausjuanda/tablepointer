import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { save } from '../redux/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Select, Row, Col, InputNumber, Form } from 'antd';
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
    
    const countryList = [
        { value: 'singapore', label: 'Singapore' },
        { value: 'malaysia', label: 'Malaysia' },
        { value: 'indonesia', label: 'Indonesia' }
        ];
    const countries = [
        { label: 'Singapore', code: 'SG', value: '+65', flag: 'SG', text:'SG +65' },
        { label: 'Indonesia', code: 'ID', value: '+62', flag: '🇮🇩', text:'ID +62' },
        { label: 'United States', code: 'US', value: '+1', flag: '🇺🇸', text:'US +1' },
    ];

    const salesPersons = [
        { value: 'matthieu_quantin', label: 'Matthieu Quentin' },
        { value: 'danny_koh', label: 'Danny Koh' },
        { value: 'dennis_ong', label: 'Dennis Ong' },
        { value: 'christine_tan', label: 'Christine Tan' }
    ];

    const [mandCom, setManCom] = useState(false);

    useEffect(() =>{
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
                            <Select defaultValue={countries[0].value}>
                                {countries.map((e) => (
                                    <Option  value={e.value}>{e.text}</Option>
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