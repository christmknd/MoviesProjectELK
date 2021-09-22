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
      "genre":   { "type": "keyword"  }
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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)