import React,{ useEffect,useRef,useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props)=>{
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);


    useEffect(()=>{
        // http request
       console.log('Cockpit.js useEffect =====>');
       toggleBtnRef.current.click();
       // const timer =
       //     setTimeout(()=>{
       //     console.log('saved useEffect =====>');
       //     alert('Saved data to cloud');
       // },1000);
       return ()=>{
           // clearTimeout(timer);
           console.log('Cockpit.js add some clean up work! and timer is cleaned up =====>');
       }
    },[]);

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <=  2){
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1 ){
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle Person
            </button>
            {/*<AuthContext.Consumer>*/}
            {/*    {*/}
            {/*        (context)=><button onClick={context.login}>*/}
            {/*        Log In*/}
            {/*    </button>*/}
            {/*    }*/}
            {/*</AuthContext.Consumer>*/}

            <button onClick={authContext.login} >Log In </button>

        </div>
    );
};

export default React.memo(cockpit);