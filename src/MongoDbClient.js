import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "application-0-whdse" });
}

function credentials(){
    const apiKey = import.meta.env.VITE_REALM_API_KEY;

    if (!apiKey) {
        window.alert("No API key. Set VITE_REALM_API_KEY as an env variable.");
        console.log("No API key. Set VITE_REALM_API_KEY as an env variable.");
    }
    return RealmWeb.Credentials.apiKey(apiKey);
}

async function AddGrade(id, grade){
    const user = await app().logIn(credentials());
    return await user.functions.AddGrade(id, grade);
}

async function GetAllGrades(){
    const user = await app().logIn(credentials());
    return await user.functions.GetAllGrades();
}

export { AddGrade, GetAllGrades };