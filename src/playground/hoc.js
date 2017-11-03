// high order component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont't share!</p>};
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>APP</h1>
            {!props.isAuthenticated && <p>You need to be logged to see this</p>}
            
            {props.isAuthenticated &&  <WrappedComponent {...props} />}
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="confidencial info" />, document.getElementById('app'));