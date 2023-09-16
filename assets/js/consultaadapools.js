var mypoolid = "pool1wrjg8fts9cus0eq8jyf5wqsfe64e8tvrquxgff3tyze4qal4hwq"
let LoadData = function() {
    const start = Date.now()
$.getJSON('https://js.cexplorer.io/api-static/pool/'+mypoolid+'.json', function(data) { 
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
