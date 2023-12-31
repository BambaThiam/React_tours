import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        {/* Title à supprimer si besoin */}
        <h1 className="titleBamba">"BAMBA - React tours component"</h1>
        <h2>our tours</h2>
        {/* div ci-dessous pour rajouter barre verte en dessous => style css */}
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          // console.log(tour)
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
