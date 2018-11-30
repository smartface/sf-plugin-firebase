function Fabric(params) {}

Fabric.with = function(kits){
	try {
	    var kitsStringArray = [];
	    for (var kit in kits){
	        kitsStringArray.push(kits[kit].constructor.name);
	    }
	    __SF_Fabric.withStringArray(kitsStringArray);
    } catch (e) {}
}

module && (module.exports = Fabric);

