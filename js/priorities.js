
const salaa = document.querySelector("#salaa");
const fagrInput = document.querySelector("#fagr");
const dohaInput = document.querySelector("#doha");
const zohrInput = document.querySelector("#zohr");
const asrInput = document.querySelector("#asr");
const ma8rbInput = document.querySelector("#ma8rb");
const e4aInput = document.querySelector("#e4a");
const wtrInput = document.querySelector("#wtr");
const doneInput = document.querySelector("#done");
const azkarSbahInput = document.querySelector("#azkarSbah");
const azkarMsaaInput = document.querySelector("#azkarMsaa");
const missionsInput = document.querySelector("#missions");





salaa.addEventListener('click',(e)=>{
    if(e.target.type == 'checkbox' && e.target.checked == true){
        
        e.target.setAttribute('disabled' , true)

        handleCheckboxClick()
    }
        
})


let checkInpustArray = []

function handleCheckboxClick(){
    
    let checkboxInputsObject = {
        fagr : fagrInput.checked,
        doha : dohaInput.checked,
        zohr : zohrInput.checked,
        asr : asrInput.checked,
        m8rb : ma8rbInput.checked,
        e4a : e4aInput.checked,
        wtr : wtrInput.checked,
        done : doneInput,
        azkarSbah:azkarSbahInput.checked,
        azkarMsaa:azkarMsaaInput.checked,
        missions:missionsInput.checked
    }

    checkInpustArray.push(checkboxInputsObject)    
    localStorage.setItem('checkedInputs' ,JSON.stringify(checkInpustArray))

    
}

function loadCheckedInputs(){
    const storedItems = localStorage.getItem('checkedInputs')
    if(storedItems){
        const items = JSON.parse(storedItems)
        console.log(items[0]);
        setCheckboxState(fagrInput , items[0].fagr)
        setCheckboxState(dohaInput , items[0].doha)
        setCheckboxState(zohrInput , items[0].zohr)
        setCheckboxState(asrInput , items[0].asr)
        setCheckboxState(ma8rbInput , items[0].m8rb)
        setCheckboxState(e4aInput , items[0].e4a)
        setCheckboxState(wtrInput , items[0].wtr)
        setCheckboxState(azkarSbahInput , items[0].azkarSbah)
        setCheckboxState(azkarMsaaInput , items[0].azkarMsaa)
        setCheckboxState(missionsInput , items[0].missions)
        
        if(fagrInput.checked && dohaInput.checked && zohrInput.checked && asrInput.checked && ma8rbInput.checked && e4aInput.checked && wtrInput.checked){
            console.log(fagrInput.checked);
            setCheckboxState(doneInput ,items[0].done)
            doneInput.classList.replace('d-none','d-block')
            
        }
    }
}

function setCheckboxState(element , ischecked){
    if(ischecked){
        element.setAttribute('disabled' , true)
        element.setAttribute('checked' , true ) 
    }

}

loadCheckedInputs();

date = new Date()
console.log(date.getHours())

if (date == 7) {
    localStorage.removeItem('checkedInputs')
}




















































































































// const fagrInput = document.querySelector("#fagr");
// const dohaInput = document.querySelector("#doha");
// const zohrInput = document.querySelector("#zohr");
// const asrInput = document.querySelector("#asr");
// const ma8rbInput = document.querySelector("#ma8rb");
// const e4aInput = document.querySelector("#e4a");
// const wtrInput = document.querySelector("#wtr");
// const doneInput = document.querySelector("#done");
// const salaa = document.querySelector("#salaa");

// let date = new Date();

// salaa.addEventListener("click", (e) => {
//   if (e.target.type == "checkbox" && e.target.checked) {
//     perayCheckboxFun(e.target);
//   }
// });

// let newDay = [];

// function addNewDay() {
//   for (let i = 0; i < date.getDate(); i++) {
//     let daysObject = {
//       fagr: fagrInput,
//       doha: dohaInput,
//       zohr: zohrInput,
//       asr: asrInput,
//       ma8rb: ma8rbInput,
//       e4a: e4aInput,
//       wtr: wtrInput,
//       done: true,
//     };
//     newDay.push(daysObject);
//   }
//   displayNewDay();
// }
// addNewDay();

// function displayNewDay(index='') {
//  let newi =JSON.parse(localStorage.getItem('salawat'))
//  console.log(newi[1]);
 
//   let container = "";

//   for (let i = 0; i <= newDay.length; i++) {
//     container += `
//               <table class="table " dir="rtl">
//               <thead >
//                   <tr >
//                       <td  class="">الفجر</td>
//                       <td class="">الضحي</td>
//                       <td class="">الظهر</td>
//                       <td class="">العصر</td>
//                       <td class="">المغرب</td>
//                       <td class="">العشاء</td>
//                       <td class="" >الوتر</td>
//                       <td class="">تم</td>
//                   </tr>
//               </thead>
//               <tbody>
//                   <tr>
//                       <td id=""> <input id="fagr"   data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input id="doha"  data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input id="zohr"  data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input id="asr"  data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input id="m8rb"  data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input id="e4a"  data-index='${i}'  type="checkbox"></td>
//                       <td id=""><input  id="wtr"  data-index='${i}'  type="checkbox"></td>
//                       <td id="done"><i  class="fa-solid fa-clipboard-check checked"></i></td>            </tr>
//               </tbody>
//           </table>
//           <table class="m-auto text-center">
//               <thead>
//                   <tr>
//                       <td>اذكار الصباح </td>
//                       <td>أذكار المساء</td>
//                   </tr>
//               </thead>
//               <tbody>
//                   <tr>
//                       <td><input id="checkBox"  data-index='${i}'  type="checkbox"></td>
//                       <td><input id="checkBox"  data-index='${i}'  type="checkbox"></td>
//                   </tr>
//               </tbody>
//           </table>`;
//     }
//   salaa.innerHTML = container;
// }
// // if (localStorage.getItem("salawat")) {
// //     console.log("done");
// //     displayNewDay()
// // } else {
// //   console.log("local if undifind");
// //   displayNewDay()
// // }

// function perayCheckboxFun(index) {
//   if (index.checked) {
//     console.log(index);
//     console.log(index.getAttribute("data-index"));
//     index.setAttribute("disabled", "true");
//     let dataIndex = index.getAttribute("data-index");
//     newDay[dataIndex].done = true;
//      localStorage.setItem('salawat',JSON.stringify(newDay))

    
//   }
// }
