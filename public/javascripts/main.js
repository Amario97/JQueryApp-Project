let sportsArray = [];
let selectedType = "";

// define a constructor to create sport objects
let SportObject = function (pTeamName, pPlayerName,pSport, pYear, pURL) {
    this.team = pTeamName;
    this.player = pPlayerName;
    this.sport=pSport;
    this.year = pYear;
    this.URL = pURL;
    
    
}

sportsArray.push(new SportObject("Real Madrid", "Sergio Ramos", "Soccer", 1902, "https://www.realmadrid.com/en"));
sportsArray.push(new SportObject("Seahawks", "Russel Wilson", "Football", 1974, "https://www.seahawks.com/"));
sportsArray.push(new SportObject("Lakers", "Lebron James", "Basketball", 1947, "https://www.nba.com/lakers/"));
sportsArray.push(new SportObject("Mariners", "Kyle Seager", "Baseball", 1977, "https://www.mlb.com/mariners"));



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonSave").addEventListener("click", function () {

        let playername=document.getElementById("playername").value;
        let teamname=document.getElementById("teamname").value;
        let year=document.getElementById("year").value;
        let URL=document.getElementById("URL").value;

       

        if (playername!=""&& teamname!=""&& year!=""&& selectedType!=""&& URL!=""){

            sportsArray.push ( new SportObject(teamname,playername,selectedType,year, URL) );

            
           

        }

        else{

            alert("Please enter all the details to save")
        }
        document.getElementById("playername").value="";
        document.getElementById("teamname").value="";
        document.getElementById("year").value = "";  
        document.getElementById("URL").value = "";   
        

    });
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("playername").value = "";
        document.getElementById("teamname").value = "";
        document.getElementById("year").value = "";
        document.getElementById("URL").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });
    document.getElementById("website").addEventListener("click", function () {
        window.open(document.getElementById("oneURL").innerHTML);
    });

    $(document).on("pagebeforeshow", "#display", function (event) {   // have to use jQuery 
        createList();
    });

    

    


function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML="";
    sportsArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML =element.sport + ": Your Favourite team is - " + element.team +
        ", and your favourite player is - " + element.player +" and they were founded in "+ element.year + " ,team's official website: " + element.URL;
        myul.appendChild(li);
        
    });
    




}
})


