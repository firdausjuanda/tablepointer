"use client";

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { BankOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@mui/material/Box';

import Colors from '../config/pallete';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Colors.tp_orange,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Colors.tp_orange,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 1.5,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : Colors.grey,
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: Colors.orange,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: Colors.tp_orange,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className} = props;
  const iconColor = [
    completed === true || active === true ? Colors.tp_orange : Colors.grey,
    completed === true || active === true ? Colors.tp_orange : Colors.grey,
    completed === true || active === true ? Colors.tp_orange : Colors.grey,
  ];

  const icons = {
    1: <BankOutlined style={{ color: iconColor[0], fontSize:24 }} />,
    2: <UserOutlined style={{ color: iconColor[1], fontSize:24 }} />,
    3: <BarChartOutlined style={{ color: iconColor[2], fontSize:24 }} />,
  };

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {icons[String(props.icon)]}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ['Outlet Info', 'Contact Detail', 'Result'];

export default function TPStepper(props) {
  const { progress } = props;
  const [activeStep, setActiveStep] = React.useState(progress);


  return (
    <Stack className='mx-auto md:w-1/2 sm:1' spacing={4}>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} connector={<QontoConnector />} orientation="horizontal">
        {steps.map((label) => {
          const stepProps = {
            connector: <QontoConnector />
          };
          const labelProps = {
            StepIconComponent:QontoStepIcon
          };

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* <div className="custom_steps">

      <Steps current={0} 
          items={[
            {
              title: 'Outlet Info',
              status: progress >= 0 ? 'finish' : 'wait',
              icon: <BankOutlined style={{ color: progress >= 0 ? Colors.tp_orange : Colors.grey }} />,
            },
            {
              title: 'Contact Details',
              status: progress >= 1 ? 'finish' : 'wait',
              icon: <UserOutlined style={{ color: progress >= 1 ? Colors.tp_orange : Colors.grey }} />,
            },
            {
              title: 'Result',
              status: progress >= 2 ? 'finish' : 'wait',
              icon: <BarChartOutlined style={{ color: progress >= 2 ? Colors.tp_orange : Colors.grey }} />,
            },
          ]}
        >
        </Steps>
      </div> */}
    </Box>
    </Stack>
  );
}