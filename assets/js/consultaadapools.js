var mypoolid = "70e483a5702e3907e4079113470209ceab93ad83070c84a62b20b350"
let LoadData = function() {
    const start = Date.now()
$.getJSON('https://js.adapools.org/pools/'+mypoolid+'/summary.json', function(data) { 
$.each( data.data, function( i, val ) { 
		a=new Array('tax_fix','pledge','total_stake');
		if(parseInt(val) > 100000) val=Math.round(parseInt(val)/1000000);
		if(i=='blocks_lifetime') val=parseInt(val) + parseInt(data.data.blocks_epoch);

		$('#'+mypoolid+'_'+i).html(val).text();   
}); 
		}); 
}

$(document).ready(function() {
    LoadData()
    setInterval(LoadData, 60000); // this will update every 60 seconds
})
