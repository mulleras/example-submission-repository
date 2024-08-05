import logo from './logo.svg';
import './App.css';
import TestButton from './testButton';
import React from 'react';
import Header from './App/Header';
import Content from './App/content';
import Total from './App/Total';

const App=()=> {
 
  const course='Half Stack application development'
  const exercises1=10
  const exercises2=7
  const exercises3=14

return (<>
<div>
  
  <Header course={course}/>
  <Content />
  <Total  exercise={exercises1+exercises2+exercises3}/>
</div>




</>)
}

export default App;
