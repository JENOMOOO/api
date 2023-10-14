fetch("https://api.sampleapis.com/coffee/hot").then((data)=>{

    return data.json();
}).then((objectData)=>{
    console.log(objectData[0]);

    let tableData="";
    objectData.map((value)=>{
        tableData+=`<tr>
        <td>${value.title}</td>
        <td>${value.description}</td>
        <td>${value.ingredients}</td>
        <td><img src="${value.image}"/></td>
        </tr>`;
});

document.getElementById("tablebody").
innerHTML=tableData;
}).catch((error)=>{
    console.log(error)
})