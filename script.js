let dogs=["cl_a_alice","cl_a_banksy","cl_a_beau","cl_a_blake","cl_a_brioche","cl_a_chapman","cl_a_clemson","cl_a_cocoavia","cl_a_dolly","cl_a_gonzaga","cl_a_hazel","cl_a_hiccup","cl_a_huffy","cl_a_icarus","cl_a_kendra","cl_a_kingston","cl_a_kudos","cl_a_lando","cl_a_lillian","cl_a_lionel","cl_a_maggie","cl_a_marvin","cl_a_moxie","cl_a_opal","cl_a_orla","cl_a_orville","cl_a_perch","cl_a_pharaoh","cl_a_phoebe","cl_a_puffin","cl_a_rocket","cl_a_roczen","cl_a_rubix","cl_a_sofia","cl_a_stanford","cl_a_syracuse","cl_a_toad","cl_a_tomac","cl_a_trek","cl_a_trout","cl_a_valparaiso","cl_a_vanderbilt","cl_a_verity","cl_a_westminster","cl_a_whisper","cl_a_yoshi","cl_a_zinc","cl_a_indie","cl_a_ivy","cl_a_memphis"]
$.getJSON('heat.json',(data)=>{

 let maxDiff= getMax(data);
 let boxSize= `calc(100% * (1/${data[0].length}))`
 console.log(boxSize)
 for(rowIndex in data){
for(colIndex in data[rowIndex]){
    let hsv =`hsl(0,100%,${(1-data[rowIndex][colIndex]/maxDiff)*100}%)`
    let rowName= dogs[rowIndex].split("_")[2]
    let colName= dogs[colIndex].split("_")[2]
    
    let title=`(${rowName},${colName})`

    $(".parent").append($('<div/>',{class:"child",title:title}).css({"background":hsv}))
}
 }

 $(".child").css({"width":boxSize,"height":boxSize})
 $( document ).tooltip();
})





function getMax(a){
    return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
  }