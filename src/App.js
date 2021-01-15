import React, { Component } from 'react';

// importing components
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[
        {
            name: 'Max',
            age:23,
            id:'asd1'
        },
        {
            name:'Hari',
            age:29,
            id:'asf2'
        },
        {
            name :'Ara',
            age:30,
            id:'asfd4'
        }
    ],
    showPersons:false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
      const persons =[...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  };

  nameChangedHandler = (event,id)=>{
      const personIndex = this.state.persons.findIndex(p=>{
          return p.id === id;
      });
      const person = {
          ...this.state.persons[personIndex]
      };

      console.log('assds =====>',person);
      person.name =  event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      // const person = Object.assign({},this.state.persons[personIndex]);
      this.setState({persons:persons});

  };

  togglePersonHandler = () => {
      const doesShow  = this.state.showPersons;
      this.setState({showPersons:!doesShow});
  };

  render() {
      let persons = null;
      const style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
            backgroundColor: 'lightgreen',
            color:'black'
        }
      };
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person,index)=>{
                    return <Person
                        key={person.id}
                        click={()=>this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        changed={(event)=>this.nameChangedHandler(event, person.id)}
                        // changed={this.nameChangedHandler.bind(this,event, person.id)}
                    />
                })}
            </div>
        );
        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //     backgroundColor:'salmon',
        //     color:'black'
        // };
    }

    let classes = [];
    if (this.state.persons.length <=  2){
        classes.push('red');
    }
    if (this.state.persons.length <= 1 ){
        classes.push('bold');
    }

    return (
        <div className="App">
            <h1>Hi, i am a react app</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className="button"
                onClick={this.togglePersonHandler}>
                Toggle Person
            </button>
            {persons}
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
