import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import React from 'react'

export default function Chart({isDashbord = false }) {
      const theme = useTheme();
    const data = [
        { 

          id: "React",
          year:"2021",
          span:"600",
          label: "React",
      
          France:"600",
          Germany:"400",
      
       
          
        },
        {
            year:"2022",
          id: "stylus",
          label: "stylus",
         
          France:"600",
          Germany:"500",
          span:"700",
   
     
        },
        {
          
          id: "sass",
          year:"2023",
          span:"580",
   
          France:"700",
          Germany:"600",
          label: "sass",

        },
        {
          id: "haskell",
          label: "haskell",
          span:"900",
          France:"500",
          Germany:"580",
          year:"2024",
     
        },
        {
          id: "nue",
          year:"2025",
          span:"800",
          France:"500",
          Germany:"700",
          label: "nue",

        },
      ];
  return (
    <div>
<Box  sx={{ height:isDashbord? "400px": "80vh" }}>
<ResponsiveBar

        data={data}
        keys={[
            'span',
            'France',
            'Germany',
         
        ]}
        indexBy="year"
        
        theme={{
            textColor: theme.palette.text.primary,
            fontSize: 11,
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.secondary,
                },
              },
            },
            grid: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 0,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: theme.palette.text.primary,
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.60}
        maxValue={2000}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        
        
        colors={{ scheme: 'paired' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.7'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'year',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'mininm Wage/Month',
            legendPosition: 'middle',
            legendOffset: -60,
            truncateTickAt: 0
        }}
        labelSkipWidth={23}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </Box>
    </div>
  )
}
