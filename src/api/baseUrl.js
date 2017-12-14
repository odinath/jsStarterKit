export default function getBaseUrl() {
//     const inDevelopment = (window.location.hostname === "localhost");
//     return (inDevelopment)? "http://localhost:3001/" : "/";
    return getQueryStringParamaterByName("useMockApi") ? "http://localhost:3001/" : "/";
}

function getQueryStringParamaterByName(name, url) {
    url = url || window.location.href;
    name = name.replace(/[[\]]/g,"\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
