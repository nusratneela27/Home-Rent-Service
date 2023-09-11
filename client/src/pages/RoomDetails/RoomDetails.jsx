import React from 'react'
import Container from '../../components/Shared/Container'
import Header from '../../components/Rooms/Header'
import RoomReservation from '../../components/Rooms/RoomReservation'
import { useLoaderData } from 'react-router-dom'
import RoomInfo from '../../components/Rooms/RoomInfo'

const RoomDetails = () => {
  const roomData = useLoaderData()

  return (
    <div className='bg-slate-50 p-10'>
      <Container>
        <div className='max-w-screen-lg mx-auto'>
          <div className='flex flex-col gap-6'>
            <Header roomData={roomData} />
            <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
              <RoomInfo roomData={roomData} />
              <div className='mb-10 md:col-span-3 order-first md:order-last'>
                <RoomReservation roomData={roomData} />
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className=''
          />
        </div>
      </Container>
    </div>
  )
}

export default RoomDetails
