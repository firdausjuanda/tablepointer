import React from 'react'
import Colors from "./config/pallete";
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import backgroundImageUrl from './assets/cover.jpg';

const Layout = ({ children }) => {
    return (
        <main className='max-h-full flex min-h-screen max-w-screen'>
        <div style={{
            // background:`linear-gradient(rgb(26,35,126,0.76), rgb(26,35,126,0.76)), url(${backgroundImageUrl})`,
            background:`linear-gradient(rgb(19,103,198,0.76), rgb(19,103,198,0.76)), url(${backgroundImageUrl})`,
            // backgroundImage: `url(${backgroundImageUrl})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover' ,
          }} className="bg-gradient-to-r from-cyan-500 to-blue-500" >
          <div className='opacity-100'>
            <Grid container spacing={2} className='md:p-10 xs:p-0 xs:p-0 xs:m-0 xs:m-0'>
              <Grid item md={3}>
                <Header />
              </Grid>
              <Grid item md={9}>
                <Box bgcolor={Colors.white} className="p-10 xs:p-0 xs:p-0 xs:m-0 xs:m-0 rounded-3xl md:rounded-xl xs:rounded-t-3xl sm:rounded-t-3xl">
                  {children}
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    )
}

export default Layout