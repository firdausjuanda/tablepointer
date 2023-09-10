import React from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from  '@react-pdf/renderer';
import Result from '../../components/Result';
import Layout from '../../Layout';
import { Row, Col, Card } from 'antd';
import Colors from '../../config/pallete';
import { Link } from 'react-router-dom';
import openingHoursLogo from '../../assets/icons/opening-hours.svg';
import airplaneLogo from '../../assets/icons/airplane.png';
import forestLogo from '../../assets/icons/forest.svg';
import tablePointer from '../../assets/icons/TablePointer Logo-White (300 ppi) 1.png';

import cover from '../../assets/cover.jpg';
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
// Create styles
const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        orientation: 'portrait',
        },
    view: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: 'white',
    },
    image: {
        objectFit: 'cover',
    },
    head_text: {
        fontSize: "48px",
        lineHeight: 1, 
        fontWeight: 700,
        color: Colors.tp_dark_blue,
        textAlign: 'left', 
    },
    test: {
        backgroundColor: 'red',
    }, 
    text : { marginBottom: 18, fontSize: "11px", textTransform: 'capitalize' },
    header1: { marginBottom: 18, fontSize: "11px", color: Colors.tp_blue_1 },
    header2: { marginBottom: 32, fontSize: "30px", color: Colors.tp_dark_blue },
    subHeader : { marginBottom: 18, fontSize: "14px", color: Colors.tp_orange },
});

const SavingResult = () => {
  return (
    <PDFViewer showToolbar={true} className='w-full min-h-screen' >
        <Document title='TablePointer - Saving Result Report' >
            <Page title="TablePointer - Saving Result Report" size="A4" style={styles.page}>
                <View style={{ 
                display: 'flex',
                position: 'relative'
                        }} >
                    <Image src={cover} style={{ height: 841.84, objectFit: 'cover' }} ></Image>
                </View>
                <View style={{ position: 'absolute', bottom: 50, left: 0 }}>
                    <View style={{ backgroundColor: Colors.tp_orange, paddingHorizontal: 20, paddingVertical: 10, borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }}>
                        {/* <Text style={{ color: Colors.tp_dark_blue, }} >TablePointer</Text> */}
                        <Image src={tablePointer} style={{ height: '45px', width: '195px' }} ></Image>
                        <Text style={{ color: Colors.tp_dark_blue, fontSize: 50 }} >Energy Saving</Text>
                        <Text style={{ color: Colors.tp_dark_blue, fontSize: 50 }} >Projection</Text>
                    </View>
                </View>
            </Page>
            <Page object-fit="cover" style={styles.page} size="A4">
                <View style={styles.view}>
                    <Text style={{ color: Colors.tp_dark_blue, marginHorizontal: 'auto', fontSize: "28px", fontWeight: 'extrabold', marginBottom: 10 }} >Details Received</Text>
                    <View style={{ height: "120px", border: '1.2px solid #1A237E', borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#1A237E", borderTopRightRadius: 7, borderTopLeftRadius: 7, padding: 4 }}>
                            <Text style={{ marginHorizontal: 'auto', color: Colors.tp_orange , fontWeight: "bold"}}>Outlet Information</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 100 }}>
                                    <Text style={styles.header1}>Country</Text>
                                    <Text style={styles.text}>{data.outlet.country}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 100 }}>
                                    <Text style={styles.header1}>Street Address</Text>
                                    <Text style={styles.text}>{data.outlet.street_address}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 800, marginTop: 40 }}>
                                    <Text style={styles.header1}>Postal Code</Text>
                                    <Text style={styles.text}>{data.outlet.postal_code}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: "320px", border: '1.2px solid #1A237E', borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#1A237E", borderTopRightRadius: 7, borderTopLeftRadius: 7, padding: 4 }}>
                            <Text style={{ marginHorizontal: 'auto', color: Colors.tp_orange , fontWeight: "bold"}}>Operation Information</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 100 }}>
                                    <Text style={styles.header1}>Type of Restaurant/Dining</Text>
                                    <Text style={styles.text}>{data.outlet.restaurant_type}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 180 }}>
                                    <Text style={styles.header1}>Operating hours per week</Text>
                                    <Text style={styles.text}>{data.outlet.operating_hours}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 350 }}>
                                    <Text style={styles.header1}>Energy Tariff</Text>
                                    <Text style={styles.text}>{data.outlet.tariff}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 450 }}>
                                    <Text style={styles.header1}>Total Outlets</Text>
                                    <Text style={styles.text}>{data.outlet.total_outlets}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 800, marginTop: 80 }}>
                                    <Text style={styles.header1}>Number of Kitchen Exhaust</Text>
                                    <Text style={styles.text}>{data.outlet.exhaust_number}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 180 }}>
                                    <Text style={styles.header1}>Kitchen Exhaust Width Dimension</Text>
                                    <Text style={styles.text}>{data.outlet.exhaust_width}m</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 800, marginTop: 80 }}>
                                    <Text style={styles.header1}>Number of Air-cons</Text>
                                    <Text style={styles.text}>{data.outlet.ac_number}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 180 }}>
                                    <Text style={styles.header1}>Type of Air-cons</Text>
                                    <Text style={styles.text}>{data.outlet.ac_type}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 350 }}>
                                    <Text style={styles.header1}>Controller Type</Text>
                                    <Text style={styles.text}>{data.outlet.ac_controller}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{ flex: 800, marginTop: 80 }}>
                                    <Text style={styles.header1}>Number of Fridge</Text>
                                    <Text style={styles.text}>{data.outlet.fridge_number}</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 180 }}>
                                    <Text style={styles.header1}>Type of Frigde</Text>
                                    <Text style={styles.text}>{data.outlet.fridge_type}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
            <Page object-fit="cover" style={styles.page} size="A4">
                <View style={styles.view}>
                    <Text style={{ color: Colors.tp_dark_blue, marginHorizontal: 'auto', fontSize: "28px", fontWeight: 'extrabold', marginBottom: 10 }} >Projection</Text>
                    <View style={{ height: "100px", border: '1.2px solid #1A237E', borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#1A237E", borderTopRightRadius: 7, borderTopLeftRadius: 7, padding: 4 }}>
                            <Text style={{ marginHorizontal: 'auto', color: Colors.tp_orange , fontWeight: "bold"}}>Outlet Savings Per Annum</Text>
                        </View>
                        <View style={{ paddingHorizontal: 80, paddingTop: 10 }}>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 800 }}>
                                    <Text style={styles.header2}>$120,000</Text>
                                    <Text style={styles.subHeader}>SDG Savings</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 250 }}>
                                    <Text style={styles.header2}>999,999</Text>
                                    <Text style={styles.subHeader}>kWh Savings</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: "100px", border: '1.2px solid #1A237E', borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#1A237E", borderTopRightRadius: 7, borderTopLeftRadius: 7, padding: 4 }}>
                            <Text style={{ marginHorizontal: 'auto', color: Colors.tp_orange , fontWeight: "bold"}}>Outlet Savings Over Equipment Lifetime</Text>
                        </View>
                        <View style={{ paddingHorizontal: 80, paddingTop: 10 }}>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 800 }}>
                                    <Text style={styles.header2}>$300,000</Text>
                                    <Text style={styles.subHeader}>SDG Savings</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 250 }}>
                                    <Text style={styles.header2}>3,000,000</Text>
                                    <Text style={styles.subHeader}>kWh Savings</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: "420px", border: '1.2px solid #1A237E', borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#1A237E", borderTopRightRadius: 7, borderTopLeftRadius: 7, padding: 4 }}>
                            <Text style={{ marginHorizontal: 'auto', color: Colors.tp_orange , fontWeight: "bold"}}>Outlet Savings Over Equipment Lifetime</Text>
                        </View>
                        <View style={{ paddingHorizontal: 80, paddingTop: 10 }}>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 800 }}>
                                    <Text style={styles.header2}>$300,000</Text>
                                    <Text style={styles.subHeader}>SDG Savings</Text>
                                </View>
                                <View style={{ flex: 800, marginLeft: 250 }}>
                                    <Text style={styles.header2}>3,000,000</Text>
                                    <Text style={styles.subHeader}>kWh Savings</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 800, marginTop: 150 }}>
                                    <Image src={openingHoursLogo}/>
                                    <Text style={styles.header2}>3,000,000</Text>
                                    <Text style={styles.subHeader}>Meals Served</Text>
                                    <Text style={styles.subHeader} wrap={true}>Equivalent to operating XX more days</Text>
                                </View>
                                <View style={{ flex: 100, marginLeft: 250 }}>
                                    <Image src={airplaneLogo}/>
                                    <Text style={styles.header2}>3,000,000</Text>
                                    <Text style={styles.subHeader}>kg of CO2</Text>
                                    <Text style={styles.subHeader}>Equivalent to driving XX cars for on year</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex'}}>
                                <View style={{ flex: 800, marginTop: 150, textAlign: 'center' }}>
                                    <Image src={tablePointer} style={{ height: '45px', width: '195px' }} ></Image>
                                    <Text style={styles.header2}>3,000,000</Text>
                                    <Text style={styles.subHeader}>Trees Planted</Text>
                                    <Text style={styles.subHeader}>Equivalent to xx soccer fields</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: Colors.tp_dark_blue, fontSize: '10px', marginVertical: 15 }}>Figures represented in this report are estimates and may differ from the actual savings generated.</Text>
                    <Text style={{ color: Colors.tp_dark_blue, marginBottom: 5 }}>Sales Person In Contact</Text>
                    <Text style={{ color: Colors.tp_dark_blue }}>Sales Person In Contact_Email Address</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
  )
}

export default SavingResult