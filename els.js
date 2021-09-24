const fs = require('fs');
const { Client } = require('@elastic/elasticsearch');
const split = require('split2')

const client = new Client({
    hosts: [ 'http://localhost:9200']
});

client.indices.create({
    index: 'movies'
}, function(error, response, status) {
    if (error) {
        console.log(error);
    } else {
        console.log("created a new index", response);
    }
});

/*
/Bulk
const result = await client.helpers.bulk({
    datasource: createReadStream('./movies.json').pipe(split()),
    onDocument (doc) {
        return {
            create: { _index: 'movies', _id: doc.id }
        }
    }
})

*/
/*
//DELETE index

client.helpers.bulk({
  datasource: myDatasource,
  onDocument (doc) {
    return {
      delete: { _index: 'movies', _id: doc.id }
    }
  }
})
 */

//Requêtes

const result = await client.search(
    {
        index: 'movies',
        body : {
            "query" : {
                "match_all": {}
            },
            "from" : 0 ,
            "size" : 100
        }
    })
console.log(result.body)

//Trier par date récentes
const result2 = await client.search(
    {
        index: 'movies',
        body : {
            "sort" : [
                {
                    "release_date" : {"order" : "desc"}
                }
            ]
        }
    })
console.log(result2.body)

//Genres disponibles
const result3 = await client.search(
    {
        index: 'movies',
        body : {
            "query" : {
                "match": {
                    "genres" : "Action"
                }
            }
        }
    })
console.log(result3.body)

