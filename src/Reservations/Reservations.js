import React from 'react'
import Card from '../Card/Card';

const Reservations = ({reservations}) => {

    const reservationCards = reservations.map(reservation => {
        return (
            <Card 
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
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