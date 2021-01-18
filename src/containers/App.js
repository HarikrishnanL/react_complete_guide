import React, { Component } from 'react';

// importing components
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props){
      super(props);
  };
  // above are same as below
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
    showPersons:false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  };

  static getDerivedStateFromProps(props,state){
      console.log('App.js getDerivedStateFromProps - props ====> ',props);
      console.log('App.js getDerivedStateFromProps - state ====> ',state);
      return state;
  }

  // componentWillMount() {
  //
  // }
  static contextType  = AuthContext;

    componentDidMount() {
      // http call;
      console.log('App.js componentDidMount =====>');
  }

    deletePersonHandler = (personIndex) => {
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

      person.name =  event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      // const person = Object.assign({},this.state.persons[personIndex]);
      this.setState((prevState,props)=>{
          return{
              persons:persons,
              changeCounter:prevState.changeCounter + 1
          }
      });
  };

  togglePersonHandler = () => {
      const doesShow  = this.state.showPersons;
      this.setState({showPersons:!doesShow});
  };

  loginHandler = ()=>{
    this.setState({authenticated:true});
  };

  render() {
      let persons = null;
    if (this.state.showPersons) {
        persons = (
            <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed = {this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}
            />
        );
    }

    return (
        //<div className={classes.App}>
        //<WithClass classes={classes.App}>
        <Aux>
            <button onClick={()=>{
                this.setState({showCockpit:false})
            }}>
                Remove Cockpit
            </button>
            <AuthContext.Provider
                value={{
                    authenticated:this.state.authenticated,
                    login:this.loginHandler
                }}>
            {
                this.state.showCockpit ? <Cockpit
                    title = {this.props.appTitle}
                    showPersons={this.state.showPersons}
                    // persons = {this.state.persons}
                    personsLength = {this.state.persons.length}
                    clicked = {this.togglePersonHandler}
                />:null
            }
            {persons}
            </AuthContext.Provider>
        </Aux>
        //</WithClass>
       // </div>
    );
  }
}

export default withClass(App,classes.App);

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
