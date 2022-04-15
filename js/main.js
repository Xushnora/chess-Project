let chessObj = [
    {
        id: 1,
        x: 1,
        y: 1,
    }, 
    {
        id: 2,
        x: 2,
        y: 1
    },
    {
        id: 3,
        x: 3,
        y: 1
    },
    {
        id: 4,
        x: 4,
        y: 1
    },
    {
        id: 5,
        x: 5,
        y: 1
    },
    {
        id: 6,
        x: 6,
        y: 1
    }, 
    {
        id: 7,
        x: 7,
        y: 1
    },
    {
        id: 8,
        x: 8,
        y: 1
    },
    {
        id: 9,
        x: 1,
        y: 2
    },
    {
        id: 10,
        x: 2,
        y: 2
    },
    {
        id: 11,
        x: 3,
        y: 2
    },
    {
        id: 12,
        x: 4,
        y: 2
    },
    {
        id: 13,
        x: 5,
        y: 2
    },
    {
        id: 14,
        x: 6,
        y: 2
    },
    {
        id: 15,
        x: 7,
        y: 2
    },
    {
        id: 16,
        x: 8,
        y: 2
    },
    {
        id: 17,
        x: 1,
        y: 3
    },
    {
        id: 18,
        x: 2,
        y: 3
    },
    {
        id: 19,
        x: 3,
        y: 3
    },
    {
        id: 20,
        x: 4,
        y: 3
    },
    {
        id: 21,
        x: 5,
        y: 3
    },
    {
        id: 22,
        x: 6,
        y: 3
    },
    {
        id: 23,
        x: 7,
        y: 3
    },
    {
        id: 24,
        x: 8,
        y: 3
    },
    {
        id: 25,
        x: 1,
        y: 4
    },
    {
        id: 26,
        x: 2,
        y: 4
    },
    {
        id: 27,
        x: 3,
        y: 4
    },
    {
        id: 28,
        x: 4,
        y: 4
    },
    {
        id: 29,
        x: 5,
        y: 4
    },
    {
        id: 30,
        x: 6,
        y: 4
    },
    {
        id: 31,
        x: 7,
        y: 4
    },
    {
        id: 32,
        x: 8,
        y: 4
    },
    {
        id: 33,
        x: 1,
        y: 5
    },
    {
        id: 34,
        x: 2,
        y: 5
    },
    {
        id: 35,
        x: 3,
        y: 5
    },
    {
        id: 36,
        x: 4,
        y: 5
    },
    {
        id: 37,
        x: 5,
        y: 5
    },
    {
        id: 38,
        x: 6,
        y: 5
    },
    {
        id: 39,
        x: 7,
        y: 5
    },
    {
        id: 40,
        x: 8,
        y: 5
    },
    {
        id: 41,
        x: 1,
        y: 6
    },
    {
        id: 42,
        x: 2,
        y: 6
    },
    {
        id: 43,
        x: 3,
        y: 6
    },
    {
        id: 44,
        x: 4,
        y: 6
    },
    {
        id: 45,
        x: 5,
        y: 6
    },
    {
        id: 46,
        x: 6,
        y: 6
    },
    {
        id: 47,
        x: 7,
        y: 6
    },
    {
        id: 48,
        x: 8,
        y: 6
    },
    {
        id: 49,
        x: 1,
        y: 7
    },
    {
        id: 50,
        x: 2,
        y: 7
    },
    {
        id: 51,
        x: 3,
        y: 7
    },
    {
        id: 52,
        x: 4,
        y: 7
    },
    {
        id: 53,
        x: 5,
        y: 7
    },
    {
        id: 54,
        x: 6,
        y: 7
    },
    {
        id: 55,
        x: 7,
        y: 7
    },
    {
        id: 56,
        x: 8,
        y: 7
    },
    {
        id: 57,
        x: 1,
        y: 8
    },
    {
        id: 58,
        x: 2,
        y: 8
    },
    {
        id: 59,
        x: 3,
        y: 8
    },
    {
        id: 60,
        x: 4,
        y: 8
    },
    {
        id: 61,
        x: 5,
        y: 8
    },
    {
        id: 62,
        x: 6,
        y: 8
    },
    {
        id: 63,
        x: 7,
        y: 8
    },
    {
        id: 64,
        x: 8,
        y: 8
    }
]


let chessParent = document.querySelector('.chess-parent');
let buttonBox = document.querySelector('.button-box');
let cordinataX = document.querySelector('.cordinataX');
let cordinataY = document.querySelector('.cordinataY');

chessObj.forEach(element => {
    let box = document.createElement('div');
    box.classList = 'button-box';
        box.innerHTML = `<button class="buttons" onclick = "addBtn(${element.id})">${element.x}, ${element.y}</button>`;
        chessParent.appendChild(box);
});

let buttons = document.querySelectorAll('.buttons');

function addBtn(id) {
//    console.log(id);
}

let cordArr = [];

    buttons.forEach((item, i) => {
        // if(i % 2 == 0) {
        //     item.style.backgroundColor = "black"
        // }
        cordArr = item.textContent.split(',');
        if(cordArr[1] % 2 != 0 && cordArr[0] % 2 != 0) {
            console.log(cordArr);
            item.style.backgroundColor = "black"
            item.style.color = "#fff"
        }
        item.addEventListener('click', ()=> {
           
        })  
    })








    // test cod

let liArr = document.querySelectorAll('li')
liArr.forEach((e,i)=>{
    e.addEventListener('mouseover', ()=>{
        let acl = e.classList[0]
        let bcl = e.classList[1]
        let alilar = document.querySelectorAll(`.${acl}`)
        let blilar = document.querySelectorAll(`.${bcl}`)
        console.log(alilar);
        alilar.forEach(j=>{
            j.style.backgroundColor = 'yellow'
        })
        blilar.forEach(j=>{
            j.style.backgroundColor = 'yellow'
        })
        e.style.backgroundColor = 'red'
    })
    e.addEventListener('mouseout', ()=>{
        let acl = e.classList[0]
        let bcl = e.classList[1]
        let alilar = document.querySelectorAll(`.${acl}`)
        let blilar = document.querySelectorAll(`.${bcl}`)
        console.log(alilar);
        alilar.forEach(j=>{
            j.style.backgroundColor = 'white'
        })
        blilar.forEach(j=>{
            j.style.backgroundColor = 'white'
        })
        e.style.backgroundColor = 'white'
        console.log(e.classList[0]);
    })
})
    










// for(let i = 1; i <= 8; i++){
//     let button = document.createElement('button');
//     button.classList = 'buttons'
//     button.innerHTML += i;
//     chessParent.appendChild(button)
// }

// let buttons = document.querySelectorAll('.buttons');

// for(let i = 0; i <= buttons.length; i++){
//     if(buttons % 2 == 0) {
//         buttons.style.backgroundColor = "black"
//     }
// }


// keyingi ish

let chessObj1 = [
    [{
        id: 1,
        x: 1,
        y: 1,
    }, 
    {
        id: 2,
        x: 2,
        y: 1
    },
    {
        id: 3,
        x: 3,
        y: 1
    },
    {
        id: 4,
        x: 4,
        y: 1
    },
    {
        id: 5,
        x: 5,
        y: 1
    },
    {
        id: 6,
        x: 6,
        y: 1
    }, 
    {
        id: 7,
        x: 7,
        y: 1
    },
    {
        id: 8,
        x: 8,
        y: 1
    }],

    [{
        id: 9,
        x: 1,
        y: 2
    },
    {
        id: 10,
        x: 2,
        y: 2
    },
    {
        id: 11,
        x: 3,
        y: 2
    },
    {
        id: 12,
        x: 4,
        y: 2
    },
    {
        id: 13,
        x: 5,
        y: 2
    },
    {
        id: 14,
        x: 6,
        y: 2
    },
    {
        id: 15,
        x: 7,
        y: 2
    },
    {
        id: 16,
        x: 8,
        y: 2
    }],
    [{
        id: 17,
        x: 1,
        y: 3
    },
    {
        id: 18,
        x: 2,
        y: 3
    },
    {
        id: 19,
        x: 3,
        y: 3
    },
    {
        id: 20,
        x: 4,
        y: 3
    },
    {
        id: 21,
        x: 5,
        y: 3
    },
    {
        id: 22,
        x: 6,
        y: 3
    },
    {
        id: 23,
        x: 7,
        y: 3
    },
    {
        id: 24,
        x: 8,
        y: 3
    }],
    [{
        id: 25,
        x: 1,
        y: 4
    },
    {
        id: 26,
        x: 2,
        y: 4
    },
    {
        id: 27,
        x: 3,
        y: 4
    },
    {
        id: 28,
        x: 4,
        y: 4
    },
    {
        id: 29,
        x: 5,
        y: 4
    },
    {
        id: 30,
        x: 6,
        y: 4
    },
    {
        id: 31,
        x: 7,
        y: 4
    },
    {
        id: 32,
        x: 8,
        y: 4
    }],
    [{
        id: 33,
        x: 1,
        y: 5
    },
    {
        id: 34,
        x: 2,
        y: 5
    },
    {
        id: 35,
        x: 3,
        y: 5
    },
    {
        id: 36,
        x: 4,
        y: 5
    },
    {
        id: 37,
        x: 5,
        y: 5
    },
    {
        id: 38,
        x: 6,
        y: 5
    },
    {
        id: 39,
        x: 7,
        y: 5
    },
    {
        id: 40,
        x: 8,
        y: 5
    }],
    [{
        id: 41,
        x: 1,
        y: 6
    },
    {
        id: 42,
        x: 2,
        y: 6
    },
    {
        id: 43,
        x: 3,
        y: 6
    },
    {
        id: 44,
        x: 4,
        y: 6
    },
    {
        id: 45,
        x: 5,
        y: 6
    },
    {
        id: 46,
        x: 6,
        y: 6
    },
    {
        id: 47,
        x: 7,
        y: 6
    },
    {
        id: 48,
        x: 8,
        y: 6
    }],
    [{
        id: 49,
        x: 1,
        y: 7
    },
    {
        id: 50,
        x: 2,
        y: 7
    },
    {
        id: 51,
        x: 3,
        y: 7
    },
    {
        id: 52,
        x: 4,
        y: 7
    },
    {
        id: 53,
        x: 5,
        y: 7
    },
    {
        id: 54,
        x: 6,
        y: 7
    },
    {
        id: 55,
        x: 7,
        y: 7
    },
    {
        id: 56,
        x: 8,
        y: 7
    }],
    [{
        id: 57,
        x: 1,
        y: 8
    },
    {
        id: 58,
        x: 2,
        y: 8
    },
    {
        id: 59,
        x: 3,
        y: 8
    },
    {
        id: 60,
        x: 4,
        y: 8
    },
    {
        id: 61,
        x: 5,
        y: 8
    },
    {
        id: 62,
        x: 6,
        y: 8
    },
    {
        id: 63,
        x: 7,
        y: 8
    },
    {
        id: 64,
        x: 8,
        y: 8
    }]
]

// let chess = []

// for (let i = 8; i >= 1; i--) {
//   for (let j = 1; j <= 8; j++) {
//     let obj = {
//       y: i,
//       x: j,
//     }
//     chess.push(obj)
//   }
// }

let chesList = document.querySelector('.chesList');

let x = 0;
let y = 0;


// buttons

let ot = document.querySelector('.ot');
let fil = document.querySelector('.fil');
let shoh = document.querySelector('.shoh');
let vazir = document.querySelector('.vazir');
let piyoda = document.querySelector('.piyoda');
let tora = document.querySelector('.tora');

// chessObj .forEach((item, index )=> {
//     item.forEach(element =>{
//         let li = document.createElement('li')
//         li.className = "chesItem" + " " + "x_" + element.x + "y_" + element.y;
//         li.setAttribute('id', element.id);
    
//         if(index%2==0 && element.id %2!=0 || index%2!=0 && element.id %2==0) {
//             li.style.backgroundColor = `#f0d9b5`;
//             li.style.background = `url(../imgs/wood.jpg)`;
//         }
//         li.addEventListener('mouseover', (e) => {
//             if(element.id == e.target.id) {
//                 corX.textContent = `x = ${element.x}`;
//                 corY.textContent = `y = ${element.y}`;
//                 addButtonsGo(element.x, element.y);
//             }
//         })
//         // li.innerHTML = `${element.x}, ${element.y}`;
//         chesList.appendChild(li);
//         x = element.x;
//         y = element.y;
//     })
// })

// let chesItems = document.querySelectorAll('.chesItem');

// chesItems.forEach((item, index) => {
//     item.addEventListener('mousemove', ()=>{
//         item.classList.add('red');
//         if(item.classList[1].split('')[2]){
//             item.classList.add('green')
    
//         }

//     })

//     item.addEventListener('mouseout', () =>{
//         item.classList.remove('red')
//     })
// })

// function addButtonsGo(x, y) {
//     console.log(x, y);
// }

// chesItems.forEach((item, index) => {
//     console.log(item.classList);
// })

// vazir.addEventListener('click', addBtnVazir);



