'use client'

import { Pie, G2 } from '@ant-design/plots'

const G = G2.getEngine('canvas')

const tokenomics = [
  {
    title: 'Team',
    share: 50,
  },
  {
    title: 'Games',
    share: 100,
  },
  {
    title: 'Charity',
    share: 150,
  },
  {
    title: 'Community',
    share: 350,
  },
  {
    title: 'Airdrop',
    share: 150,
  },
  {
    title: 'Liquidity',
    share: 200,
  },
]

export default function Chart() {
  return (
    <Pie
      className='xl:order-2 xl:mt-20'
      innerRadius={0.5}
      radius={0.7}
      locale='en-US'
      renderer='svg'
      data={tokenomics}
      angleField='share'
      colorField='title'
      legend={false}
      label={{
        labelHeight: 50,
        type: 'spider',
        content: '{name}\n{percentage}',
        style: {
          fill: '#edeef0',
          fontSize: '16',
          textAlign: 'center',
        },
      }}
      tooltip={{
        formatter: (datum) => {
          return { name: datum.title, value: datum.share + 'M' }
        },
      }}
      pieStyle={{
        stroke: '#edeef0',
        cursor: 'pointer',
        shadowColor: 'edeef0',
        shadowBlur: 30,
      }}
      interactions={[
        {
          type: 'pie-legend-active',
        },
        {
          type: 'element-active',
        },
      ]}
      statistic={{
        title: false,
        content: {
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '20',
            color: '#edeef0',
          },
          content: '1B Supply',
        },
      }}
    />
  )
}
