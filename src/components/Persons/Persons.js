import React,{Component,PureComponent} from 'react';

import Person from "./Person/Person";

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props,state){
    //     console.log('Persons.js getDerivedStateFromProps - props ====> ',props);
    //     console.log('Persons.js getDerivedStateFromProps - state ====> ',state);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Persons.js shouldComponentUpdate =====>');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ){
    //         return true;
    //     }
    //     else{
    //         return  false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate =====>');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Persons.js componentDidUpdate =====> ');
    }

    componentWillUnmount() {
        console.log('Persons.js componentWillUnmount =====>');
    }

    render(){
        console.log('Person.js =======> render()');
        return this.props.persons.map((person,index)=>{
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        });
    }
}

// const persons = (props) =>
//     props.persons.map((person,index)=>{
//             return (
//                     <Person
//                         click={() => props.clicked(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         changed={(event) => props.changed(event, person.id)}
//                     />
//             )
//     });

export default Persons;