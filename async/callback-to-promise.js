'use strict';

// class UserStorage {
//     loginUser(id, password, onSuccess, onError){
//         setTimeout(() => {
//             if(
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy')
//             ){
//                 onSuccess(id)
//             } else{
//                 onError(new Error('not found'));
//             }
//         },2000);
//     }

//     getRoles(user, onSuccess, onError){
//         setTimeout(() => {
//             if(user === 'ellie'){
//                 onSuccess({ name: 'elli', role: 'admin'});
//             } else{
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(
//     id, 
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {console.log(error);
//     }
// );


class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (user === 'ellie') {
                resolve({ name: 'elli', role: 'admin' });
            } else {
                reject(new Error('no access'));
            }
        }, 1000);
     });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
