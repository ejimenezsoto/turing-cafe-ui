import React from 'react'
import { deleteReservation } from '../apiCalls';
import Card from '../Card/Card';

const Reservations = ({reservations,deleteCard}) => {

    const reservationCards = reservations.map(reservation => {
        return (
            <Card 
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                deleteCard={deleteCard}
                key={reservation.id}
            />
        )
    })
    return (
        <section className='reservation-cards'>
            {reservationCards}
        </section>
    )
}


export default Reservations;