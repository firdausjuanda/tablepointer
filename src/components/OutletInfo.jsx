import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Input, Form, Select, Row, Col, InputNumber, Slider } from 'antd';
import { save } from '../redux/outletSlice'
import { useSelector, useDispatch } from 'react-redux'
import TagRenderer from '../utils/TagRenderer';
import { useState, useEffect } from 'react';
import Countries from '../constants/Countries';
const { TextArea } = Input;
const { Option } = Select;

function OutletInfo() {

    const outlet = useSelector((state) => state.outlet.value);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const [form] = Form.useForm();

    // const countryList = [
    //     { value: 'singapore', label: 'Singapore' },
    //     { value: 'malaysia', label: 'Malaysia' },
    //     { value: 'indonesia', label: 'Indonesia' }
    // ];

    const countryList = Countries;

    const restaurantTypes = [
        { value: 'food_court', label: 'Food Court/Coffee Shop' },
        { value: 'full_service', label: 'Full Service' },
        { value: 'fast_food', label: 'Fast Food' },
        { value: 'quick_service', label: 'Quick Service' },
        { value: 'cafe', label: 'Cafe' },
        { value: 'kiosk', label: 'Kiosk' },
    ];

    const acType = [
        {value: 'split', label: 'Split System'},
        {value: 'vrv', label: 'VRV'},
        {value: 'chiller', label: 'Chiller'},
    ];

    const remoteAcType = [
        {value: 'thermostat', label: 'Thermostat'},
        {value: 'hendheld_remote', label: 'Handheld Remote'},
        {value: 'wall_remote', label: 'Wall Remote'},
    ];

    const frigdeType = [
        {value: 'walk_in_fridge', label: 'Walk-in Fridge'},
        {value: 'counter_fridge', label: 'Counter Fridge'},
        {value: 'upright_2_doors_fridge', label: 'Upright 2 Doors Fridge'},
        {value: 'upright_4_doors_fridge', label: 'Upright 4 Doors Fridge'},
        {value: 'walk_in_freezer', label: 'Walk-in Freezer'},
        {value: 'counter_freezer', label: 'Counter Freezer'},
        {value: 'upright_2_doors_freezer', label: 'Upright 2 Doors Freezer'},
        {value: 'upright_4_doors_freezer', label: 'Upright 4 Doors Freezer'},
    ];

    const streetValue = Form.useWatch('street_address', form);
    const postValue = Form.useWatch('postal_code', form);
    const countryValue = Form.useWatch('country', form);
    const restTypeValue = Form.useWatch('restaurant_type', form);
    const tariffValue = Form.useWatch('tariff', form);

    const initValue = {
        exhaust_number: 0,
        ac_number: 0,
        fridge_number: 0,
        total_outlets: 1,
        country: "Singapore",
    }
    
    
    const [mandCom, setManCom] = useState(false);
    const [operatingHourValue, setOperatingHourValue] = useState(outlet.operating_hours ?? 1);
    const [exhaustWidthValue, setExhaustWidthValue] = useState(outlet.exhaust_width ?? 0.5);
    const [exhaustNoValue, setExhaustNoValue] = useState(outlet.exhaust_number ?? 0);
    const [acNoValue, setAcNoValue] = useState(outlet.ac_number ?? 0);
    const [fridgeNoValue, setFridgeNoValue] = useState(outlet.fridge_number ?? 0);
    const [acExceeded, setAcExceeded] = useState(false);
    const [acTypeSelected, setAcTypeSelected] = useState( outlet.ac_type ? outlet.ac_type.length : 0);
    const [acControllerSelected, setAcControllerSelected] = useState(outlet.ac_controller ? outlet.ac_controller.length : 0);
    const [fridgeExceeded, setFridgeExceeded] = useState(false);
    const [fridgeTypeSelected, setFridgeTypeSelected] = useState(outlet.fridge_type ? outlet.fridge_type.length : 0);

    useEffect(() =>{
        return checkMandatory();
    },[]);

    const onFinish = (values) => {
        if(acExceeded || fridgeExceeded){
            return;
        }
        if(acNoValue < acTypeSelected || acNoValue < acControllerSelected){
            setAcExceeded(true);
            return; 
        }
        if(fridgeNoValue < fridgeTypeSelected){
            setFridgeExceeded(true);
            return; 
        }
        Object.keys(values).forEach(key => {
            values['operating_hours'] = operatingHourValue;
            values['exhaust_width'] = (exhaustNoValue <= 0 || exhaustNoValue === undefined) ? null : exhaustWidthValue;
           });
        dispatch(save(values));
        navigate('/contact-details');
        // You can use "values" variable to post data of this section to back-end if needed
        // I saved the temporary state using Redux, however it will be erased once the page reloaded.

    };

    const onChangeOperatingHours = (value) => {
        if (isNaN(value)) {
        return;
        }
        setOperatingHourValue(value);
    };

    const onChangeExhaustNo = (value) => {
        if (isNaN(value)) {
        return;
        }
        setExhaustNoValue(value);
    };

    const onChangeExhaustWidth = (value) => {
        if (isNaN(value)) {
        return;
        }
        setExhaustWidthValue(value);
    };

    const onChangeAcNo = (value) => {
        if (isNaN(value)) {
            return;
        }
        setAcNoValue(value);
        if(value < acTypeSelected || value < acControllerSelected){
            setAcExceeded(true);
        } else {
            setAcExceeded(false);
        }
        if(value == null){
            setAcExceeded(false);
        }
    };

    const onChangeAcType = (value) => {
        const typeNo = value.length;
        if(typeNo > acNoValue){
            setAcExceeded(true);
            setAcTypeSelected(typeNo);
            return;
        } else {
            setAcExceeded(false);
            setAcTypeSelected(typeNo);
        }
        if (isNaN(value)) {
            return;
        }
        setAcTypeSelected(typeNo);
    };

    const onChangeAcController = (value) => {  
        const contNo = value.length;
        // if(contNo > acNoValue){
        //     setAcExceeded(true);
        //     setAcControllerSelected(contNo);
        //     return;
        // } else {
        //     setAcExceeded(false);
        //     setAcControllerSelected(contNo);
        // }
        if (isNaN(value)) {
            return;
        }
        setAcControllerSelected(contNo);
    };

    const onChangeFridgeNo = (value) => {
        if (isNaN(value)) {
        return;
        }
        setFridgeNoValue(value);
        if(value < fridgeTypeSelected){
            setFridgeExceeded(true);
        } else {
            setFridgeExceeded(false);
        }
        if(value == null){
            setFridgeExceeded(false);
        }
    };

    const onChangeFridgeType = (value) => {
        const typeNo = value.length;
        if(typeNo > fridgeNoValue){
            setFridgeExceeded(true);
            setFridgeTypeSelected(typeNo);
            return;
        } else {
            setFridgeExceeded(false);
            setFridgeTypeSelected(typeNo);
        }
        if (isNaN(value)) {
            return;
        }
        setFridgeTypeSelected(typeNo);
    };

    let additionalmandatory = 0;
    const checkMandatory = () => {
        if((streetValue || outlet.street_address) != null && (postValue || outlet.postal_code) != 0 && (countryValue || outlet.country) != null && (restTypeValue || outlet.restaurant_type) != null && (tariffValue || outlet.tariff) != null){
            // if((fridgeNoValue || outlet.fridge_number) != 0 || (fridgeNoValue || outlet.fridge_number) != null){
            //     if((fridgeTypeSelected || outlet.fridge_type) != null){
            //         additionalmandatory =+ 1;
            //         console.log("a");
            //     } else {
            //         additionalmandatory =- 1;
            //     }
            // } else {
            //     additionalmandatory =+ 1;
            // }
            // if((acNoValue || outlet.ac_number) != 0 || (acNoValue || outlet.ac_number) != null){
            //     if((acTypeSelected || outlet.ac_type) != null){
            //         additionalmandatory =+ 1;
            //         console.log("b");
            //     } else {
            //         additionalmandatory =- 1;
            //     }
            // } else {
            //     additionalmandatory =+ 1;
            // }
            // if((acControllerSelected || outlet.ac_controller) != null){
            //     if((acControllerSelected || outlet.ac_controller) != null){
            //         additionalmandatory =+ 1;
            //         console.log("c");
            //     } else {
            //         additionalmandatory =- 1;
            //     }
            // } else {
            //     additionalmandatory =+ 1;
            // }
            // console.log(additionalmandatory);
            // if(additionalmandatory == 3){
            //     setManCom(true);
            // }
            setManCom(true);
        } else {
            setManCom(false);
        }
    }

    return (
    <Form.Provider onFormChange={checkMandatory}>
        <Form
            name="complex-form"
            onFinish={onFinish}
            initialValues={Object.keys(outlet).length == 0 ? initValue : outlet}
            form={form}
        >
            
            <div className='mt-16'>
            <h1 className='head_text_2 font-bold'>Outlet Information</h1>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Street Address*</label>
                    <Form.Item
                        name="street_address"
                        rules={[
                            {
                            required: true,
                            message: 'Street Address is required',
                            },
                        ]}
                        >
                        <TextArea />
                    </Form.Item>
                </Grid>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Postal Code*</label>
                    <Form.Item
                        name="postal_code"
                        rules={[
                            {
                            required: true,
                            message: 'Postal Code is required',
                            },
                        ]}
                        >
                        <InputNumber className='w-full' type='number' />
                    </Form.Item>
                </Grid>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Country*</label>
                    <br></br>
                    <Form.Item
                        name="country"
                        rules={[
                            {
                            required: true,
                            message: 'Country is required',
                            },
                        ]}
                        >
                        <Select
                            showSearch
                            style={{
                                width:"100%",
                            }}
                        >
                           {countryList.map((e) => (
                                <Option key={e.no} value={e.label}>{e.label}</Option>
                           ))}
                        </Select>
                    </Form.Item>
                </Grid>
            </Grid>
            <h1 className='head_text_2 mt-10'>Operation Information</h1>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Type of Restaurant/Dining*</label>
                    <Form.Item
                        name="restaurant_type"
                        rules={[
                            {
                            required: true,
                            message: 'Type of Restaurant/Dining is required',
                            },
                        ]}
                        >
                        <Select placeholder="Select one" options={restaurantTypes} />
                    </Form.Item>
                </Grid>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Operating hours per week:</label>
                    <Form.Item
                        name="operating_hours"
                    
                        >
                        <Row>
                            <Col span={17}>
                                <Slider
                                
                                min={1}
                                max={168}
                                onChange={onChangeOperatingHours}
                                value={operatingHourValue}
                                step={1}
                                />
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                min={1}
                                max={168}
                                style={{
                                    margin: '0 10px',
                                    width: "70px"
                                }}
                                step={1}
                                value={operatingHourValue}
                                onChange={onChangeOperatingHours}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Grid>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <Row>
                        <Col span={16}>
                            <label className='head_text_label'>Energy Tariff:</label>
                        </Col>
                        <Col span={8}>
                        <Form.Item
                            name="tariff"
                            rules={[
                                {
                                required: true,
                                message: 'Energy tariff is required',
                                },
                            ]}
                            >
                            <InputNumber
                                placeholder="0.0000"
                                prefix="$"
                                type='number'
                                step={4}
                                min={0}
                                className='w-full'
                                
                            />
                        </Form.Item>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Number of Kitchen Exhausts</label>
                    <br />
                    <Form.Item name="exhaust_number" >
                        <InputNumber type='number' min={0} max={999} style={{ width: "100px" }} onChange={onChangeExhaustNo} />
                    </Form.Item>
                    <div style={{ marginTop: "30px"}}></div>
                </Grid>
                {exhaustNoValue ? (
                    <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                        <label className='head_text_label'>Kitchen Exhaust Capacity:</label>
                        <Form.Item name="exhaust_width" >
                        <Row>
                            <Col span={17}>
                                <Slider
                                min={0.5}
                                max={10.0}
                                onChange={onChangeExhaustWidth}
                                value={exhaustWidthValue}
                                step={0.5}
                                />
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                type='number'
                                min={0.5}
                                max={10.0}
                                style={{
                                    margin: '0 10px',
                                    width: "70px"
                                }}
                                step={0.1}
                                value={exhaustWidthValue}
                                onChange={onChangeExhaustWidth}
                                suffix={"m"}
                                />
                            </Col>
                        </Row>
                        </Form.Item>
                    </Grid>
                ) : <></> }
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid className='text-left' item sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Number of Air-cons</label>
                    <br />
                    <Form.Item name="ac_number" className='mb-0' >
                        <InputNumber type='number' status={acExceeded ? 'error' : null} min={0} max={999} style={{ width: "100px" }} onChange={onChangeAcNo} />
                    </Form.Item>
                    {acExceeded ? (<p style={{ marginBottom: "8px"}}  className='text-red-500 pt-0'>You cannot select more types than total number</p>) : <div style={{ marginTop: "30px"}}></div> } 
                </Grid>
                {acNoValue > 0 ? (
                    <>
                    <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                        <label className='head_text_label'>Type of Air-con*</label>
                        <Form.Item name='ac_type' rules={[{required : true, message: "Type of Air-con is required."}]} >
                            <Select mode='multiple' tagRender={TagRenderer} options={acType} className='w-full' onChange={onChangeAcType}/>
                        </Form.Item>
                    </Grid>
                    <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                        <label className='head_text_label'>Controller Type*</label>
                        <Form.Item name='ac_controller' rules={[{required : true, message: "Controller Type is required."}]}>
                            <Select mode='multiple' options={remoteAcType} tagRender={TagRenderer} className='w-full' onChange={onChangeAcController}/>
                        </Form.Item>
                    </Grid>
                    </>
                ) : <></> }
                
            </Grid>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                    <label className='head_text_label'>Number of Fridges</label>
                    <br />
                    <Form.Item name="fridge_number" className='mb-0'>
                        <InputNumber type='number' status={fridgeExceeded ? 'error' : null} min={0} max={999} style={{ width: "100px" }} onChange={onChangeFridgeNo} />
                    </Form.Item>
                    {fridgeExceeded ? (<p style={{ marginBottom: "8px"}} className='text-red-500 pt-0'>You cannot select more types than total number</p>) : <div style={{ marginTop: "30px"}}></div> }
                </Grid>
                {fridgeNoValue ? (
                    <Grid item className='text-left mt-0' sm={12} xs={12} md={4}>
                        <label className='head_text_label'>Type of Friges*</label>
                        <Form.Item name='fridge_type' rules={[{
                            required: true,
                            message: "Type of Friges is required."
                        }]}>
                            <Select mode='tags' options={frigdeType} tagRender={TagRenderer} className='w-full' onChange={onChangeFridgeType}/>
                        </Form.Item>
                    </Grid>
                ) : <></>}
                
            </Grid>
            <h1 className='head_text_2 mt-10'>Other Details</h1>
            <Grid container spacing={2} marginTop={1}>
                <Grid item className='text-left mt-0' sm={12} xs={12} md={12}>
                    <Row>
                        <Col span={4}>
                            <label className='head_text_label'>Total Outlets</label>
                        </Col>
                        <Col span={8}>
                            <Form.Item name='total_outlets'>
                                <InputNumber min={1} max={999} style={{ width: "100px" }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item colon={false} className='float-right'><button className={mandCom ? "primary_btn" : "disabled_btn"} type='submit' disabled={!mandCom}>Next</button></Form.Item>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
            </div>
        </Form>
    </Form.Provider>
    )
    }

export default OutletInfo