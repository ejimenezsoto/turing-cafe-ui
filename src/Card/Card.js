import React from 'react'

const Card = ({id,name,date,time,number,deleteCard}) => {
    return (
        <section className='reservation-card'>
            <h1>{name}</h1>
            <h4>{date}</h4>
            <h4>{time}</h4>
            <h4>Number of Guests:{number}</h4>
            <button onClick={() => deleteCard(id)}>Cancel</button>
        </section>
    )
}

export default Card;