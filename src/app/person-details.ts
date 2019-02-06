export interface PersonDetails {
    id : number,
    CaseNumber : string,
    DateLastContact : string,
    LastName : string,
    FirstName : string,
    MissingAge : string,
    City : string,
    County : string,
    State : string,
    Sex : string,
    Race  : {
        Ethnicity : string
    },
    DateModified : string
}
