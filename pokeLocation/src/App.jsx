import "./app.css";
import { LocationCardComponent } from "./components/LocationCardComponent";
import { NavBarComponent } from "./components/NavBar/navbarComponent";


export const App = () => {

  const apiInformation = {
    "count": 1036,
    "next": "https://pokeapi.co/api/v2/location/?offset=20&limit=20",
    "previous": null,
    "results": [
      {
        "name": "canalave-city",
        "url": "https://pokeapi.co/api/v2/location/1/"
      },
      {
        "name": "eterna-city",
        "url": "https://pokeapi.co/api/v2/location/2/"
      },
      {
        "name": "pastoria-city",
        "url": "https://pokeapi.co/api/v2/location/3/"
      },
      {
        "name": "sunyshore-city",
        "url": "https://pokeapi.co/api/v2/location/4/"
      },
      {
        "name": "sinnoh-pokemon-league",
        "url": "https://pokeapi.co/api/v2/location/5/"
      },
      {
        "name": "oreburgh-mine",
        "url": "https://pokeapi.co/api/v2/location/6/"
      },
      {
        "name": "valley-windworks",
        "url": "https://pokeapi.co/api/v2/location/7/"
      },
      {
        "name": "eterna-forest",
        "url": "https://pokeapi.co/api/v2/location/8/"
      },
      {
        "name": "fuego-ironworks",
        "url": "https://pokeapi.co/api/v2/location/9/"
      },
      {
        "name": "mt-coronet",
        "url": "https://pokeapi.co/api/v2/location/10/"
      },
      {
        "name": "great-marsh",
        "url": "https://pokeapi.co/api/v2/location/11/"
      },
      {
        "name": "solaceon-ruins",
        "url": "https://pokeapi.co/api/v2/location/12/"
      },
      {
        "name": "sinnoh-victory-road",
        "url": "https://pokeapi.co/api/v2/location/13/"
      },
      {
        "name": "ravaged-path",
        "url": "https://pokeapi.co/api/v2/location/14/"
      },
      {
        "name": "oreburgh-gate",
        "url": "https://pokeapi.co/api/v2/location/15/"
      },
      {
        "name": "stark-mountain",
        "url": "https://pokeapi.co/api/v2/location/16/"
      },
      {
        "name": "spring-path",
        "url": "https://pokeapi.co/api/v2/location/17/"
      },
      {
        "name": "turnback-cave",
        "url": "https://pokeapi.co/api/v2/location/18/"
      },
      {
        "name": "snowpoint-temple",
        "url": "https://pokeapi.co/api/v2/location/19/"
      },
      {
        "name": "wayward-cave",
        "url": "https://pokeapi.co/api/v2/location/20/"
      }
    ]
  }

  return (
    <> {/* React.Fragment  o Fragment */}
      <header className="header">
        <NavBarComponent />
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <h1>The RESTful Pokémon API</h1>
        <h2> Serving over 2.5 billion API calls each month!</h2>
        <p>All the Pokémon data you'll ever need in one place,
          easily accessible through a modern free open-source RESTful API.</p>
      </header>
      <section>
        {apiInformation.results.map((location,index) => {
          return <LocationCardComponent key={index} name={location.name} url={location.url} />
        })}
      </section>
     
    </>
  )
}


