import React from 'react'
import Header from '../Header.jsx/Header'
import { Box } from '@mui/material'
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
