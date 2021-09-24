# MoviesProjectELK

Moteur de recherche de films , basé sur la Stack ELK

##Etapes

1. Transformation du fichier json en fichier text parsable

```bash
npm install colors
npm install yargs
npm install yodash

node index.js -f movies.json --index movies --type movies
```


2. Creation de l'index movies avec de l'explicit mapping :

```bash
PUT /movies
{
  "mappings": {
    "properties": {
      "title":    { "type": "text" },  
      "poster":  { "type": "keyword"  }, 
      "overview":   { "type": "text"  },
      "release_date":   { 
        "type": "date",
        "format" : "strict_date_optional_time||epoch_second"  
        },
      "genres":   { "type": "keyword"  }
    }
  }
}
```

3. Envoyez le jeu de données sur Elastic Search 

```bash
DELETE movies
```


```bash
curl -X POST http://localhost:9200/movies/_bulk  -H "Content-Type: application/json" --data-binary @request-data.txt
```

## Requêtes 

- afficher, par défaut, la liste de films "les plus récents"
  => 
- pour chaque film je dois voir le titre, l'image, le synopsis, la date de sortie et les genres
=>
- à coté de cette liste je dois voir la liste des genres disponibles avec le nombre de films dans chaque catégorie
    - quand je clique dessus ça filtre les films par catégrorie
      =>
    - quand je clique sur plusieurs catégories je veux voir les films qui ont toutes les catégories cochées
    =>
- je dois pouvoir trier les films par date de sortie
  => 
- je dois pouvoir rechercher un film dans une barre de recherche par son nom ou par son synopsis
  => 
- je dois pouvoir rechercher des films sortie dans une plage de date
  => 
- je dois pouvoir naviguer dans les pages
  => 
- je dois pouvoir changer le nombre de résultat que je veux afficher
  => 
- je veux voir le nombre de pages, le nombre de résultats
    =>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)