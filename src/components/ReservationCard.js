import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import { addcustomer } from '../features/customerSlice'
import { v4 as uuid} from 'uuid';

export default function ReservationCard({name, index}) {
  const dispatch = useDispatch()
  return (
    <div 
    onClick={() => {
      dispatch(removeReservation(index))
      dispatch(addcustomer({
        id: uuid(),
        name: "",
        food: []

      }))
    }}
    className="reservation-card-container">{name} {index}</div>
  )
}
