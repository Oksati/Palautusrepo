//////////HARJOITUS 1.4 DONE///////////////////////////////

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


//console.log(props.list[0].name)



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
 const course = 'Half Stack application development'
  /* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14*/



  const list =
  [
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



  console.log('test1')
  console.log(list[1].name)



  console.log('Kutsutaan komponentteja Header, Content ja Total')
  return (
    <div>
      <Header courseName = {course}/>
      <Content list={list}/>

      <Total list = {list}/>  
    </div>
  )  


}

export default App