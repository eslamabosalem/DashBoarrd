import React from 'react'

import { Box } from '@mui/material'

import Header from '../Header/Header';
import Geography from './Geography';



export default function Geo() {
  return (
    <div>

             <Box>
<Header title="Geography" subTitle="Simple Geography Chart" />
<Geography/>
</Box>
    </div>
  )
}
