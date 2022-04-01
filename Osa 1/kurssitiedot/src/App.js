//////////HARJOITUS 1.5 DONE///////////////////////////////

const Header = (props) => {
  //Header huolehtii kurssin nimen renderöimisestä
  return (
      <h1>{props.courseName}</h1>
  )
}
////////////////////////////////////////////////////////////

const Part = (props) => {
  return(
      <p>
        {props.partName} {props.partExcercises}
      </p>
  )
}

////////////////////////////////////////////////////////

const Content = (props) => {


//console.log('kurssin nimi:' + props.list[0].name)



  return(
    <div>
    <Part partName = {props.list[0].name} partExcercises = {props.list[0].exercises}/>
    <Part partName = {props.list[1].name} partExcercises = {props.list[1].exercises}/>
    <Part partName = {props.list[2].name} partExcercises = {props.list[2].exercises}/>
    </div>
  )
}

///////////////////////////////////////////////////////////

const Total = (props) => {
  const reducer = (accumulator, curr) => accumulator + curr;  //luodaan reducer joka laskee arrayn summan
  

  const excersiseList = []
  props.list.forEach(element => {
  //  console.log('elementti: ' + element.exercises)
    excersiseList.push(element.exercises)
  });
  
  const total = excersiseList.reduce(reducer)  //lasketaan arrayn summa reducerilla
  console.log('reducer tehty, arrayn summa: ' + total)
  return (
    <div>
      <p>
      Number of exercises {total}
      </p>
    </div>
  )

}

///////////////////PÄÄAPPI////////////////////////////////////


const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  console.log('Test olioon viittaaminen: ' + course.parts[0].name)  // test

  console.log('Kutsutaan komponentteja Header, Content ja Total')
  return (
    <div>
      <Header courseName = {course.name}/>
      <Content list={course.parts}/> 

      <Total list = {course.parts}/>  
    </div>
  )  


}

export default App