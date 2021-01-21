import React from 'react'

const course = [
  { 
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
  ]


const sumtotal = (i) => course[i].parts.reduce((result, part) => result + part.exercises, 0)

console.log('sum is', sumtotal(0))
console.log('sum is', sumtotal(1))

const Sum = (i) => <h4>total of {sumtotal(i)} exercises</h4>
const Content = () => 
course.map((note, index) => <div key={note.id}> <h2>{note.name}</h2> {Part(index)} {Sum(index)} </div>)

const Part = (p) => course[p].parts.map(i => <div key={i.id}>{i.name} {i.exercises}</div>)

const Header = () => <h1>Web development cirriculum</h1> 

const Course = () =>  <div> <Header/> <Content/> </div>

export default Course



