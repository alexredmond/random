
var appRouter = function(app) {
	
	app.get("/", function(req, res) {
	    res.send("Hello World");
	});


	app.get("/account", function(req, res) {
	    var accountMock = {
	        "username": "nraboy",
	        "password": "1234",
	        "twitter": "@nraboy"
	    }
	    if(!req.query.username) {
	        return res.send({"status": "error", "message": "missing username"});
	    } else if(req.query.username != accountMock.username) {
	        return res.send({"status": "error", "message": "wrong username"});
	    } else {
	        return res.send(accountMock);
	    }
	});

	app.post("/account", function(req, res) {
	    if(!req.body.username || !req.body.password || !req.body.twitter) {
	        return res.send({"status": "error", "message": "missing a parameter"});
	    } else {
	        return res.send(req.body);
	    }
	});


	app.get("/MerchantServices/rest/lookup/list/T5_MASS_UPD_STAT_CDE", function(req, res) {
	    var bodyMock =  [{"id":130,"code":"RAP","orderSeq":null,"status":null,"description":"Request: Approved","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":130,"idAsString":"130","auxCols":[]},{"id":520,"code":"MPR","orderSeq":null,"status":null,"description":"Mid: Processing","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":520,"idAsString":"520","auxCols":[]},{"id":680,"code":"ME","orderSeq":null,"status":null,"description":"Mid: ERROR","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":680,"idAsString":"680","auxCols":[]},{"id":690,"code":"MOK","orderSeq":null,"status":null,"description":"Mid: OK","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":690,"idAsString":"690","auxCols":[]},{"id":510,"code":"MJQ","orderSeq":null,"status":null,"description":"Mid: JmsQueued","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":510,"idAsString":"510","auxCols":[]},{"id":280,"code":"RE","orderSeq":null,"status":null,"description":"Request: ERROR","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":280,"idAsString":"280","auxCols":[]},{"id":100,"code":"RQ","orderSeq":null,"status":null,"description":"Request: Queue","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":100,"idAsString":"100","auxCols":[]},{"id":110,"code":"RMI","orderSeq":null,"status":null,"description":"Request: Mid Inserting","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":110,"idAsString":"110","auxCols":[]},{"id":500,"code":"MQ","orderSeq":null,"status":null,"description":"Mid: Queue","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":500,"idAsString":"500","auxCols":[]},{"id":160,"code":"RMN","orderSeq":null,"status":null,"description":"Request: MidsProcessNotResponding","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":160,"idAsString":"160","auxCols":[]},{"id":290,"code":"ROK","orderSeq":null,"status":null,"description":"Request: Completed","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":290,"idAsString":"290","auxCols":[]},{"id":120,"code":"RAN","orderSeq":null,"status":null,"description":"Request: Aproval Needed","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":120,"idAsString":"120","auxCols":[]},{"id":140,"code":"RMJ","orderSeq":null,"status":null,"description":"Request: JmsQueueingMid","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":140,"idAsString":"140","auxCols":[]},{"id":150,"code":"RMP","orderSeq":null,"status":null,"description":"Request: MidsProcessing","owner":"T5_MASS_UPD_STAT_CDE","beginDate":null,"endDate":null,"translations":null,"idAsInteger":150,"idAsString":"150","auxCols":[]}]
        return res.send(bodyMock);
	});
	
	app.get("/MerchantServices/rest/lookup/list/T5_PRCS_CNTR", function(req, res) {
	    var bodyMock =[{"id":45000,"code":"EU","orderSeq":1,"status":"A","description":"EU","owner":"T5_PRCS_CNTR","beginDate":null,"endDate":null,"translations":null,"idAsInteger":45000,"idAsString":"45000","auxCols":[{"name":"MID_GROUP","value":"20000"}]},{"id":45001,"code":"SEMS","orderSeq":2,"status":"A","description":"Santander Elavon Merchant Services","owner":"T5_PRCS_CNTR","beginDate":null,"endDate":null,"translations":null,"idAsInteger":45001,"idAsString":"45001","auxCols":[{"name":"MID_GROUP","value":"20001"}]}]
	    return res.send(bodyMock);
	});


	app.get("/MerchantServices/rest/lookup/list/T5_MASS_UPD_TYP", function(req, res) {
	    var bodyMock = [{"id":1,"code":"BIASSOCA","orderSeq":0,"status":"A","description":"BusinessInfo Association Add","owner":"T5_MASS_UPD_TYP","beginDate":null,"endDate":null,"translations":null,"idAsInteger":1,"idAsString":"1","auxCols":[{"name":"APRV_USR","value":"ixkraje,sxfarr1"},{"name":"AREA_CDE","value":"BI"},{"name":"APRV_REQ_FLG","value":"Y"},{"name":"FLD_1_VAL_CDE","value":"ASSOC_CDE"},{"name":"FLD_2_VAL_CDE","value":null},{"name":"FLD_3_VAL_CDE","value":null},{"name":"FLD_4_VAL_CDE","value":null},{"name":"FLD_5_VAL_CDE","value":null},{"name":"FLD_5_NM_TXT","value":null},{"name":"FLD_4_NM_TXT","value":null},{"name":"FLD_3_NM_TXT","value":null},{"name":"FLD_2_NM_TXT","value":null},{"name":"INFO_TXT","value":"Adding AssociationCode. Use numeric code."},{"name":"FLD_1_NM_TXT","value":"AssociationCode, sample: 80191"}]},{"id":2,"code":"BIASSOCD","orderSeq":null,"status":null,"description":"BusinessInfo Association Delete","owner":"T5_MASS_UPD_TYP","beginDate":null,"endDate":null,"translations":null,"idAsInteger":2,"idAsString":"2","auxCols":[{"name":"APRV_USR","value":"ixkraje"},{"name":"AREA_CDE","value":"BI"},{"name":"APRV_REQ_FLG","value":"Y"},{"name":"FLD_1_VAL_CDE","value":"ASSOC_CDE"},{"name":"FLD_2_VAL_CDE","value":null},{"name":"FLD_3_VAL_CDE","value":null},{"name":"FLD_4_VAL_CDE","value":null},{"name":"FLD_5_VAL_CDE","value":null},{"name":"FLD_5_NM_TXT","value":null},{"name":"FLD_4_NM_TXT","value":null},{"name":"FLD_3_NM_TXT","value":null},{"name":"FLD_2_NM_TXT","value":null},{"name":"INFO_TXT","value":"Deleting AssociationCode. Use numeric code"},{"name":"FLD_1_NM_TXT","value":"AssociationCode, sample:80191"}]},{"id":3,"code":"BIRELMGU","orderSeq":null,"status":null,"description":"BusinessInfo ReleaseManager+Date Update","owner":"T5_MASS_UPD_TYP","beginDate":null,"endDate":null,"translations":null,"idAsInteger":3,"idAsString":"3","auxCols":[{"name":"APRV_USR","value":"ixkraje"},{"name":"AREA_CDE","value":"BI"},{"name":"APRV_REQ_FLG","value":"Y"},{"name":"FLD_1_VAL_CDE","value":"SLS_REP"},{"name":"FLD_2_VAL_CDE","value":"DATE"},{"name":"FLD_3_VAL_CDE","value":null},{"name":"FLD_4_VAL_CDE","value":null},{"name":"FLD_5_VAL_CDE","value":null},{"name":"FLD_5_NM_TXT","value":null},{"name":"FLD_4_NM_TXT","value":null},{"name":"FLD_3_NM_TXT","value":null},{"name":"FLD_2_NM_TXT","value":"RelationshipAccountTransferDate, sample: 2015-01-31"},{"name":"INFO_TXT","value":"Updating Release Manager and Date. Use SalesRepCode value"},{"name":"FLD_1_NM_TXT","value":"RelatinshipManager, sample: 99999"}]},{"id":4,"code":"SEPBBATU","orderSeq":null,"status":null,"description":"Settlement PayByBatch Update","owner":"T5_MASS_UPD_TYP","beginDate":null,"endDate":null,"translations":null,"idAsInteger":4,"idAsString":"4","auxCols":[{"name":"APRV_USR","value":"ixkraje"},{"name":"AREA_CDE","value":"SE"},{"name":"APRV_REQ_FLG","value":"Y"},{"name":"FLD_1_VAL_CDE","value":"YESNOANSWER"},{"name":"FLD_2_VAL_CDE","value":null},{"name":"FLD_3_VAL_CDE","value":null},{"name":"FLD_4_VAL_CDE","value":null},{"name":"FLD_5_VAL_CDE","value":null},{"name":"FLD_5_NM_TXT","value":null},{"name":"FLD_4_NM_TXT","value":null},{"name":"FLD_3_NM_TXT","value":null},{"name":"FLD_2_NM_TXT","value":null},{"name":"INFO_TXT","value":"Updating PayByBatch. Use Y/N values"},{"name":"FLD_1_NM_TXT","value":"PayByBatch, sample: Y"}]}]
	    return res.send(bodyMock);
	});

	app.post("/MerchantServices/rest/login", function(req, res) {   
	        return res.send({"token": "dummyToken"});
	});

	app.post("/MerchantServices/rest/massUpdate/search", function(req, res) {   
	     var bodyMock = {"errorMessages":null,"infoMessage":null,"navigationStatus":null,"records":[{"requestId":134,"changeTypeCode":"BIASSOCA2","statusCode":"InJms2","requestorUsername":"reqUser2","createdTs":"2016-02-02 11:12","approvedBy":"apprv2","referenceNumber":"sdtRef2","midCount":"552","commentText":"com12","messageText":"mes12"},{"requestId":135,"changeTypeCode":"BIASSOCA1","statusCode":"InJms1","requestorUsername":"reqUser1","createdTs":"2016-02-02 11:12","approvedBy":"apprv1","referenceNumber":"sdtRef1","midCount":"551","commentText":"com11","messageText":"mes11"}],"recordsCount":99999999999999}
	     return res.send(bodyMock);
	});

}
 
module.exports = appRouter;
