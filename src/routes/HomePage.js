import * as React from "react"

function HomePage() {
  return (
    <div>
      <h1>Ca3 Jens Gelbek...</h1> 
      <p>
      Vores Startkode har b3 "brugere", user (user rolle), admin (admin rolle) og user_admin (admin og user rolle) alle har 1234 som password..
      Når man er logget ind er der to ekstra sider...User data og Admin data, hvor det kræves rette rolle for at se data, ellers får man en fejlmeddelelse.
      </p>
      <p>
        I min brug af vores startkode, har jeg tilføjes en Star Wars quiz, som henter noget data fra swapi.dev, som laves om til et spørgsmål, spørgsmålet vises gennem websiden og gemmes i vores DNB , som man skal være logget ind for at se/spille..
     </p>
<p>
        For at bruge vores startkode har jeg fulgt de to readme filer for at sætte det op.
        </p>
<p>
        I Backenden har jeg oprettet en question entitet, questionRepo og tilhørende DTO, udfra de principperne i renemame..
        Der er lavet question facade og resource efter principperne i Renameme .
        I DemoResource (som er der vi har alle vores restendpoints til brugeren..) har jeg lavet et endpoint som henter Starwars data, og laver det til et spørgsmål som returneres som Json til frontend.
        </p>
<p> 
I frontenden har jeg lavet en Starwars page og  tilføjet den til Authenticated header
På Starwars siden hentes spørgsmålet og det vises...ved tryk på en af de tre knapper tjekkes svaret og Usestate for svaret ændret til det relevante og siden gentegnes automatisk.
Ved tryk på refreh knap sættes refresh (usestate) og siden gentegnes automatisk, en useeffect fjerner en eventuel tekst om tidligere svar..
      </p>
<p>      Vores startkode, tager ikke højde for tryk på f5, ved tryk på f5 nytegnes hele siden og man er ikke logget ind mere...
</p>
   </div>   
  )
}

export default HomePage
