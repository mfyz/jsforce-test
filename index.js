require('dotenv').config()

const jsforce = require('jsforce')

const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD } = process.env;

const conn = new jsforce.Connection({
	// loginUrl : SF_LOGIN_URL
})

conn.login(SF_USERNAME, SF_PASSWORD, (err, userInfo) => {
	if (err) { return console.error(err) }

	// Now you can get the access token and instance URL information.
	// Save them to establish connection next time.
	// console.log(conn.accessToken)
	// console.log(conn.instanceUrl)

	// logged in user property
	// console.log("User ID: " + userInfo.id)
	// console.log("Org ID: " + userInfo.organizationId)


	// - - - - - - - - - - - - - - - - - - - - -


	// Use query
	// conn.query("SELECT Id, Name FROM Account", function(err, result) {
	// 	if (err) { return console.error(err) }
	// 	console.log("total: " + result.totalSize)
	// 	console.log("fetched: " + result.records.length)
	// 	console.log("records:", result.records)
	// });


	// - - - - - - - - - - - - - - - - - - - - -


	// Update an account's custom field
	// conn.sobject('Account').update({
	// 	Id: '0018c00002DhaHCAAZ',
	// 	Number_of_Employees__c: 99
	// }, function(err, res) {
	// 	if(err){ console.log(err); return }
	// 	console.log('Done, result: ', res)
	

	// - - - - - - - - - - - - - - - - - - - - -


	// Query account by custom field
	// conn.query("SELECT Id, Name FROM Account WHERE Number_of_Employees__c = 120", function(err, result) {
	// 	if (err) { return console.error(err) }
	// 	console.log("records:", result.records)
	// })


	// - - - - - - - - - - - - - - - - - - - - -


	// Get all list views (for account object)
	// conn.sobject("Account").listviews((err, result) => {
	// 	if (err) { return console.error(err) }
	// 	console.log("result:", result)
	// })


	// - - - - - - - - - - - - - - - - - - - - -


	// Get accounts by a list view
	// conn.sobject("Account").listview('00B8c00000CKEf6EAH').results((err, res) => {
	// 	console.log(JSON.stringify(res.records, null, 4))
	// })


	// - - - - - - - - - - - - - - - - - - - - -


	// // Create custom field via API
	// var metadata = [{
	// 	fullName: 'Number_of_Employees__c',
	// 	label: 'Test Object 1',
	// 	pluralLabel: 'Test Object 1',
	// 	nameField: {
	// 		type: 'Text',
	// 		label: 'Test Object Name'
	// 	},
	// 	deploymentStatus: 'Deployed',
	// 	sharingModel: 'ReadWrite'
	// }];
	// conn.metadata.create('CustomObject', metadata, function(err, results)  {
	// 	if (err) { console.err(err); }
	// 	for (var i=0; i < results.length; i++) {
	// 		var result = results[i];
	// 		console.log('success ? : ' + result.success);
	// 		console.log('fullName : ' + result.fullName);
	// 	}
	// });
})
