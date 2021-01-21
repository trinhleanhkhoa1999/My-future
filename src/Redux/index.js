

export const Khoa=(state = 0, action)=>{
    console.log('action ben redux',action)
    switch (action.type) {
      case 'TANG':
        return state + action.payload 
      case 'GIAM':
        return state - action.payload
      default:
        return state
    }
  }



//   action giam
//   action ={
//     type:"GIAM",
//     payload:3
// }


//   action tang
//   action ={
//     type:"TANG",
//     payload:5
// }

// 5===5