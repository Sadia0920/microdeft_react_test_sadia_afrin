import React from 'react'
import './Card.css'

export default function Card({course}) {
  const {title,description,badge_text,badge_color,instructor_name} = course
  return (
    <div className="courseCard">
    <div className="courseCard-header">
      <span
        className="courseCard-badge"
        style={{ backgroundColor: badge_color }}
      >
        {badge_text}
      </span>
      
    </div>
    <h3 className="courseCard-title">{title}</h3>
    <p className="courseCard-description">{description}</p>
    <p className="courseCard-instructor">Instructor: {instructor_name}</p>
  </div>
  )
}
