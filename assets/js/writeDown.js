const index= require("./index.js")
function generateData(data){
    const licenseBadge = renderBadge(data)
    const licenceLink = renderLink(data)
    const licenceSection = renderSection(data)

    return 
}



function renderLink(){
    
}


function renderBadge (){
    if (data.lisence = "MIT"){
        return("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT");
    } else if (data.lisence = "GNU"){
        return("[![License: GPL v3](https:/img.shields.io/badge/License-GPLv3-blue.svg)](https:/www.gnu.org/licenses/gpl-3.0)");
    } else if (data.lisence = "Apache"){
        return()
    }

}
function renderSection(){

}

// opensource.org


module.exports= generateData