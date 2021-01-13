import React, { Component } from 'react';
// import React ,{ useState } from 'react';
// importing components
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[
        {
            name: 'Max',
            age:23
        },
        {
            name:'Hari',
            age:29
        },
        {
            name :'Ara',
            age:30
        }
    ]
  };

  switchNameHandler = (newName) => {
      console.log('I got clicked by user =======>');
      this.setState({
          persons:[
              {
                  name: newName,
                  age:24
              },
              {
                  name:'Hari!!!',
                  age:30
              },
              {
                  name :'Ara!!',
                  age:32
              }
          ]
      })
  };

  nameChangedHandler = (event)=>{
      this.setState({
          persons:[
              {
                  name: 'hari!',
                  age:24
              },
              {
                  name: event.target.value,
                  age:30
              },
              {
                  name :'hari!!!',
                  age:32
              }
          ]
      })
  };

  render() {
    const style = {
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8x',
        cursor:'pointer'
      };

    return (
      <div className="App">
        <h1>Hi, i am a react app</h1>
          <button
              style={style}
              onClick={()=> this.switchNameHandler('Harikrishnan')} >
              Switch Name
          </button>
          <div>
              <Person
                name = {this.state.persons[0].name}
                age = {this.state.persons[0].age} />

              <Person
                  name = {this.state.persons[1].name}
                  age = {this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this,'Hari')}
                  changed={this.nameChangedHandler} >
                  My Hobbies : Racing !
              </Person>

              <Person
                name = {this.state.persons[2].name}
                age= {this.state.persons[2].age}  />
          </div>
      </div>
    );
  }
}

export default App;

// const App = props =>{
//    const [  personState,setPersonState ] = useState({
//         persons:[
//         {
//             name: 'Max',
//             age:23
//         },
//         {
//             name:'Hari',
//             age:29
//         },
//         {
//             name :'Ara',
//             age:30
//         }
//     ]
//     });
//
//    const [otherState,setOtherState] = useState('Some other values');
//
//    const  switchNameHandler = () => {
//       console.log('I got clicked by user =======>');
//        setPersonState({
//           persons:[
//               {
//                   name: 'Max!!',
//                   age:24
//               },
//               {
//                   name:'Hari!!!',
//                   age:30
//               },
//               {
//                   name :'Ara!!',
//                   age:32
//               }
//           ]
//       })
//   };
//
//
//     return (
//         <div className="App">
//             <h1>Hi, i am a react app</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
//             <Person name = {personState.persons[1].name} age = {personState.persons[1].age} >
//                 My Hobbies : Racing !
//             </Person>
//             <Person name = {personState.persons[2].name} age= {personState.persons[2].age}  />
//         </div>
//     );
// };
//
// export default App;
