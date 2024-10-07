import React from 'react'
import Loading from '../loading'
import FullConnectButton from '@/components/fullConnectButton'

const TestPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Loading />
    <FullConnectButton />
    </div>
  )
}

export default TestPage