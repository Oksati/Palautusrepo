

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
  return(
    <div>
    <Part partName = {props.part1} partExcercises = {props.exercises1}/>
    <Part partName = {props.part2} partExcercises = {props.exercises2}/>
    <Part partName = {props.part3} partExcercises = {props.exercises3}/>
    </div>
  )
}

///////////////////////////////////////////////////////////

const Total = (props) => {
  const reducer = (accumulator, curr) => accumulator + curr;  //luodaan reducer joka laskee arrayn summan
  

  const total = props.excerciseArray.reduce(reducer)  //lasketaan arrayn summa reducerilla
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
      <Content part1 = {list[0].name} exercises1 = {list[0].exercises} part2 = {list[1].name} exercises2 = {list[1].exercises} part3 = {list[2].name} exercises3 = {list[2].exercises}/>

      <Total excerciseArray = {[list[0].exercises, list[1].exercises, list[2].exercises]}/>
    </div>
  )  

}

export default App