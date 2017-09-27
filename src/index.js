import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker'; 

function showList(users) {
    return users.map((user, index) => {
       return (
          <li key={index}>
             <p><b>Asiento: </b>{user.seat}</p>
             <p><b>Nombe: </b>{user.name}</p>
             <p><b>Apellido: </b>{user.last}</p>
             <p><b>DNI: </b>{user.DNI}</p>
          </li>
       );
    });
 }
 
// function foundUser(users) {
//     let eureka = [];
//     eureka = users.filter((user) => {
//     return (
//         user.DNI == 'lo del input'
//     );
//     });
//     return eureka;
// }
 
const First = ({users}) => {
    return (
    <div className="container pd-t-50">
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="occupied">01</td><td>03</td><td className="occupied">05</td><td>07</td><td>09</td>
                    </tr>
                    <tr>
                        <td>02</td><td className="occupied">04</td><td>06</td><td className="occupied">08</td><td className="occupied">10</td>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div>
            <p>Busca pasajero</p>
            <input type='text'/>
            <button>Buscar</button>
            {/* <div>{showList(foundUser(props.users))}</div> */}
        </div> 
        <div>
            <p>Lista de pasajeros</p>
            <ul>{showList(users)}</ul>
        </div>
        
    </div>
    );
};

let usersObject = [
    {
        seat: 1,
        name: 'Ale',
        last: 'Adrian',
        DNI: 123
    },
    {
        seat: 4,
        name: 'Sandra',
        last: 'Moran',
        DNI: 124
    },
    {
        seat: 5,
        name: 'Alejandra',
        last: 'Tejada',
        DNI: 125
    },
    {
        seat: 8,
        name: 'Moni',
        last: 'Libertad',
        DNI: 126
    },
    {
        seat: 10,
        name: 'Diana',
        last:'Guzman',
        DNI: 127
    }
]



ReactDOM.render(<First 
 users = {usersObject}
/>, document.getElementById('root'));
registerServiceWorker();
