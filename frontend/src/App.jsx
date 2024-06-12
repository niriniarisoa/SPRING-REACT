import React from 'react';
import './App.css';
import ColocataireList from './components/colocataire/ColocataireList';


function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Gestion de Cohabitation</h1>
            </header>
            <main>
                <ColocataireList />
            </main>
        </div>
    );
}

export default App;

// import React, { useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ColocataireList from './components/ColocataireList';

// function App () {
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         fetch('/api/hello')
//             .then(response => response.text())
//             .then(message => {
//                 setMessage(message);
//             });
//     },[])
//     return (
//         <div className="App">
//             <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo"/>
//             <h1 className="App-title">{message}</h1>
//             </header>
//             <p className="App-intro">
//                 To get started, edit <code>src/App.js</code> and save to reload.
//             </p>
//              {/* <ColocataireList /> */}

//         </div>
//     )
// }

// export default App;
