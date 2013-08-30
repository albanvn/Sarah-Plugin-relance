exports.action = function(data, callback, config, SARAH){
    callback({'tts' : 'je me relance' });
    setTimeout(function(){SARAH.runApp("KillAll.cmd");},2000);
}