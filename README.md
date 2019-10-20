
# Team10

## 1. Common import/export format.

Data can be imported or exported to our system in JSON. This means that a simple converter can be used on a dumped CSV to input to our system via POST or export via GET.

 - Import CSV: https://www.csvjson.com/csv2json 
 - Export CSV: https://www.csvjson.com/json2csv

#### GET request to /doctors:
```
{"doctors":
[{"id":1,"fName":"fName1","lName":"lName1","phoneNum":"12345667","emailAddr":"asd@asd.com","created_at":"2019-10-20T15:48:16.135Z","updated_at":"2019-10-20T15:48:16.135Z"},
{"id":2,"fName":"fName2","lName":"lName2","phoneNum":"12345667","emailAddr":"asd@asd.com","created_at":"2019-10-20T15:48:16.135Z","updated_at":"2019-10-20T15:48:16.135Z"},
{"id":3,"fName":"fName3","lName":"lName3","phoneNum":"12345667","emailAddr":"asd@asd.com","created_at":"2019-10-20T15:48:16.135Z","updated_at":"2019-10-20T15:48:16.135Z"}
]}
```
Conversion using the tool:
```
"doctors.id","doctors.fName","doctors.lName","doctors.phoneNum","doctors.emailAddr","doctors.created_at","doctors.updated_at"
1,"fName1","lName1","12345667","asd@asd.com","2019-10-20T15:48:16.135Z","2019-10-20T15:48:16.135Z"
2,"fName2","lName2","12345667","asd@asd.com","2019-10-20T15:48:16.135Z","2019-10-20T15:48:16.135Z"
3,"fName3","lName3","12345667","asd@asd.com","2019-10-20T15:48:16.135Z","2019-10-20T15:48:16.135Z"
```
## 2. Scope of Solution.
The impact here is more efficient scheduling of appointments for the community which needs neurologic therapy.
The scale has been estimated around 300-500 patients with one manager (and multiple therapists).

## 3. Documentation
As a manager, login to the system using the admin panel.
