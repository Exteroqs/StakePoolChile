var mypoolid = "450341dfd85b0b35934e41041e33326f9cdfd6202c5016d25e3f9493117f5129"
let LoadData = function() {
    const start = Date.now()
var currentepoch = 0
    $.getJSON( "https://pooltool.s3-us-west-2.amazonaws.com/stats/stats.json?now="+String(start), function( data ) {
        var formattedheight = numeral(data['majoritymax']).format('0,');
        $("#ptepoch").html(data['currentepoch'])
        currentepoch = data['currentepoch']
        $("#ptslot").html(data['currentslot'])
        $("#ptheight").html(formattedheight)

        $.getJSON( "https://pooltool.s3-us-west-2.amazonaws.com/8e4d2a3/pools/"+mypoolid+"/livestats.json?now="+String(start), function( data ) {
            var formattedstake = numeral(data['livestake']/1000000).format('0.00 a');

            $("#ptstake").html(formattedstake)
            if(typeof(data['lastBlockEpoch'])=="undefined" || parseInt(currentepoch) != parseInt(data['lastBlockEpoch'])) {
                data['epochblocks']=0
            }
            $("#pteblocks").html(data['epochblocks'])
        })
    })
}

$(document).ready(function() {
    LoadData()
    setInterval(LoadData, 60000); // this will update every 60 seconds
})