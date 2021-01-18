import React,{Component,Fragment} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        return  (
           // <div className={classes.Person}>
           <Aux>
           {/*<React.Fragment>*/}
           {/*<Fragment>*/}
           <AuthContext.Consumer>
               {(context)=> context.authenticated ? <p>Authenticated !</p> : <p>please log in</p>}
           </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I am a {this.props.name} and i am {this.props.age} years old !
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl)=>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
           {/*</Fragment>*/}
           {/*</React.Fragment>*/}
           </Aux>
            // </div>
        );
    }

}

Person.propTypes = {
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};
// const person = (props) => {
//     return  (
//        <div className={classes.Person}>
//             <p onClick={props.click}>
//                 I am a {props.name} and i am {props.age} years old !
//             </p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };

export default withClass(Person,classes.Person);