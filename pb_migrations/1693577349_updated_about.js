/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kkw3qd9v7dtw3m5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yz6spjzh",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kkw3qd9v7dtw3m5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yz6spjzh",
    "name": "desription",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
