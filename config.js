var randomBoolean = require('random-boolean');

const groupSearchPayLoad = {
    "OwningTeamId": 3,
    "Criteria": {
        "BudgetFrom": "0",
        "BudgetTo": "5000000",
        "MustHave":
        {
            "PropertyTypes": [],
            "PropertyTags": [],
            "Regions": []
        },
        "ShouldNotHave": {
            "PropertyTypes": [],
            "PropertyTags": []
        },
        "MustNotHave": { "Regions": [] }
    },
    "Grade": {},
    "Origin": {},
    "FinancialStatus": {}
}

const interestFlagsPayLoad = [
    {"InterestFlag":{"Id":107,"Name":"Sales Applicant","SystemName":"SalesApplicant"},"Enabled":randomBoolean(),"NegotiatorId":103},
    {"InterestFlag":{"Id":108,"Name":"Lettings Applicant","SystemName":"LettingsApplicant"},"Enabled":randomBoolean(),"NegotiatorId":103},
    {"InterestFlag":{"Id":109,"Name":"Vendor","SystemName":"Vendor"},"Enabled":randomBoolean(),"NegotiatorId":103},
    {"InterestFlag":{"Id":110,"Name":"Landlord","SystemName":"Landlord"},"Enabled":randomBoolean(),"NegotiatorId":103}
]



const addgroup = 'https://localapi.dezrez.com/api/group/addgroup';

const addSalesSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/savesalessearch`
}

const setFlagsSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/setflags`
}

export {
    addSalesSearch,
    groupSearchPayLoad,
    addgroup,
    interestFlagsPayLoad,
    setFlagsSearch
};
