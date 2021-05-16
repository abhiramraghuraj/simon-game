var topleft = document.querySelector('.top-left-red');
var bottomleft = document.querySelector('.bottom-left-qc');
var topright = document.querySelector('.top-right-qc');
var bottomright = document.querySelector('.bottom-right-qc');

var startgame = document.querySelector('#start').addEventListener('click' , startgame);

const sequence = [topleft, bottomleft,bottomright, topright ];
let seqtoguess = [...sequence];

var canclick = false;
var order = [];

//console.log(topleft.className);

async function  blink(i){
    return new Promise((resolve,reject) => {
        sequence[i].className += ' active';
        setTimeout(() => {
            sequence[i].className = sequence[i].className.replace(
                ' active',
                ''
                );
                setTimeout(() => {
                    resolve();
                },250);
            },500);
});
};


const main = async (cont) =>{
    for(var i = 0; i<cont;i++){
        var l = Math.floor(Math.random()*4);
        order.push(l);
        await blink(l);
}
};



function startgame(){
    var count = 2;
    if(lost === false){
        main(count);
    }
    //decide();
    console.log(lost);
}

// var tab = document.querySelector('.gameboard').addEventListener('click', decide);
// function decide(e){
//     if(e.target.className === sequence[order[j]].className){
//         alert('correct tab')
//     }

// }

function panelclicked(event){
    for(var j=0;j<order.length;j++){

        //var note = event.target.className;
        console.log(event.className);
        if(event.className === sequence[order[j]].className){
            console.log('correct');
        }
        else{
            alert('game over');
            return lost = true;
            break;
        }
    }
    //var note = event.target.className;
  //if()
        //console.log(note);

}










// var count = 0;
    //  //var order = [];
    //  for(var i = 0;i<count;i++){
        
    // }
    // if(lost === false){
    //     count += 1;
    // }


        //order.push(a);

        
        // for(var j = 0; j<order.length;j++){
        //     console.log(order[j]);
        //     switch(order[j]){
        //         case 0:
        //             topleft.className += ' active';
        //             setTimeout(() => {
        //                 topleft.className = topleft.className.replace(
        //                     ' active',
        //                     ''
        //                     );
                            
        //                 },500);
        //             break;
        //         case 1:
        //             bottomright.className += ' active';
        //             setTimeout(() => {
        //                 bottomright.className = bottomright.className.replace(
        //                     ' active',
        //                     ''
        //                     );
                            
        //                 },500);
        //             break;
        //         case 2:
        //             topright.className += ' active';
        //             setTimeout(() => {
        //                 topright.className = topright.className.replace(
        //                     ' active',
        //                     ''
        //                     );
        //                 },500);
        //             break;
        //         case 3:
        //             bottomleft.className += ' active';
        //             setTimeout(() => {
        //                 bottomleft.className = bottomleft.className.replace(
        //                     ' active',
        //                     ''
        //                     );
        //                 },500);
        //             break;   
        //     }
        // }