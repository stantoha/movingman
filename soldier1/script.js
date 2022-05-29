let soldierContainers=document.querySelectorAll('.soldier__container'),
    soldiers=document.querySelectorAll('.soldier');

let bodySectionBlocks = document.querySelectorAll('.body__section__block'),
    bodySections = document.querySelectorAll('.body__section'),
    hands=document.querySelectorAll('.hand');
    arms=document.querySelectorAll('.arm');
    elbows=document.querySelectorAll('.elbow');
    forearms=document.querySelectorAll('.forearm');
    feet=document.querySelectorAll('.foot');
    legs=document.querySelectorAll('.leg');
    shins=document.querySelectorAll('.shin');
    thighs=document.querySelectorAll('.thigh');
    knees=document.querySelectorAll('.knee');
    head=document.querySelector('.head');
    neck=document.querySelector('.neck');
    chest=document.querySelector('.chest');
    stomach=document.querySelector('.stomach');

    buts = document.querySelectorAll('.but');



let  soldierMove=function() {

   for(let soldierContainer of soldierContainers){
    if (!soldierContainer.classList.contains('soldier__move')) {
        soldierContainer.classList.add('soldier__move');
    } else {
        soldierContainer.classList.remove('soldier__move');
    }
   }
    
}

function moveLeft(item) {
    if (!item.classList.contains('move__left')) {
        item.classList.add('move__left');
    } else {
        item.classList.remove('move__left');
    }
}

function moveRight(item) {
    if (!item.classList.contains('move__right')) {
        item.classList.add('move__right');
    } else {
        item.classList.remove('move__right');
    }
}

function skewMoveLeft(item) {
    if (!item.classList.contains('skew__move__left')) {
        item.classList.add('skew__move__left');
    } else {
        item.classList.remove('skew__move__left');
    }
}

function skewMoveRight(item) {
    if (!item.classList.contains('skew__move__right')) {
        item.classList.add('skew__move__right');
    } else {
        item.classList.remove('skew__move__right');
    }
}

function skewFootLeft(item) {
    if (!item.classList.contains('skew__foot__left')) {
        item.classList.add('skew__foot__left');
    } else {
        item.classList.remove('skew__foot__left');
    }
}

function skewFootRight(item) {
    if (!item.classList.contains('skew__foot__right')) {
        item.classList.add('skew__foot__right');
    } else {
        item.classList.remove('skew__foot__right');
    }
}

function skewLeft(item) {
    if (!item.classList.contains('skew__left')) {
        item.classList.add('skew__left');
    } else {
        item.classList.remove('skew__left');
    }
}

function skewRight(item) {
    if (!item.classList.contains('skew__right')) {
        item.classList.add('skew__right');
    } else {
        item.classList.remove('skew__right');
    }
}

function skewBodyLeft(item) {
    if (!item.classList.contains('skew__body__left')) {
        item.classList.add('skew__body__left');
    } else {
        item.classList.remove('skew__body__left');
    }
}

function skewBodyRight(item) {
    if (!item.classList.contains('skew__body__right')) {
        item.classList.add('skew__body__right');
    } else {
        item.classList.remove('skew__body__right');
    }
}

    function goRight(){
     for(let soldier of soldiers){
        moveLeft(soldier.children[1]);
        skewMoveLeft(soldier.children[1].children[2]);

        moveLeft(soldier.children[4]);
        skewMoveRight(soldier.children[4].children[2]);

        moveRight(soldier.children[3]);
        skewMoveLeft(soldier.children[3].children[2]);
        skewFootLeft(feet[0]);
        skewFootRight(feet[1]);

        
        skewBodyLeft(chest.children[0]);
        skewBodyLeft(chest.children[1]);
        skewBodyLeft(stomach.children[0]);
        skewBodyLeft(stomach.children[1]);
        skewBodyRight(head);
        skewBodyRight(neck);
        

        moveRight(soldier.children[0]);
       skewMoveRight(soldier.children[0].children[2]);
     }
    }

    function shootPrepare(){
        for(let soldier of soldiers){
            skewLeft(soldier.children[1].children[1]);
        }
    }





buts.forEach((but,i)=>{
    but.addEventListener('click',()=>{
        goRight(i);
        soldierMove();
        /* setTimeout(shootPrepare,12); */
    }
    );
})









/* function goRight(){
    for(let soldier of soldiers){
       moveLeft(soldier.children[1]);
       setInterval( (skewLeft(soldier.children[1].children[1])),500);

       moveLeft(soldier.children[4]);
       setInterval( (skewRight(soldier.children[4].children[1])),500);
       
       moveRight(soldier.children[3]);
       setInterval( (skewLeft(soldier.children[3].children[1])),500);
     
       moveRight(soldier.children[0]);
       setInterval( (skewRight(soldier.children[0].children[1])),500);
    }
   
    
   } */


/* const soldierChooseMenu=document.querySelector('.soldiers__choose');

let soldierContainers=document.querySelectorAll('.soldier__container');

function soldierMove(item) {
    if (!item.classList.contains('soldier__move')) {
        item.classList.add('soldier__move');
    } else {
        item.classList.remove('soldier__move');
    }
} */

/* soldierContainer.forEach((item,i)=>{
        soldierMove(item);
}); */


/*  let soldiers=document.querySelectorAll('.soldier'),
  bodySectionBlocks = document.querySelectorAll('.body__section__block'),
        bodySections = document.querySelectorAll('.body__section');


       soldiers.forEach((item,i)=>{
            leftHand = item[i].children[0],
            rightHand = item[i].children[4],
            leftLeg = item[i].children[1],
            rightLeg = item[i].children[3],
            body = item[i].children[2];
        });
        
        buts = document.querySelectorAll('.but');


function moveLeft(item) {
    if (!item.classList.contains('move__left')) {
        item.classList.add('move__left');
    } else {
        item.classList.remove('move__left');
    }
}

function moveRight(item) {
    if (!item.classList.contains('move__right')) {
        item.classList.add('move__right');
    } else {
        item.classList.remove('move__right');
    }
}

function skewLeft(item) {
    if (!item.classList.contains('skew__left')) {
        item.classList.add('skew__left');
    } else {
        item.classList.remove('skew__left');
    }
}

function skewRight(item) {
    if (!item.classList.contains('skew__right')) {
        item.classList.add('skew__right');
    } else {
        item.classList.remove('skew__right');
    }
}


    function goRight(i){
        moveLeft(leftLeg);
        skewLeft(leftLeg.children[1]);

        moveLeft(rightHand);
        skewRight(rightHand.children[1]);
        
        moveRight(rightLeg);
        skewLeft(rightLeg.children[1]);
      
        moveRight(leftHand);
        skewRight(leftHand.children[1]);

        soldierMove(soldierContainers[i]);
    }


    
soldierChooseMenu.addEventListener('click',(event)=>{
    let target=event.target;
    if (target && target.classList.contains('but')) {
        buts.forEach((item, i) => {
            if (target == item) {
                goRight(i);
            }
        });
    }

}) */





