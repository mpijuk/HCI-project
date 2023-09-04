/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t3d98oliwt26cmv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srshc9mw",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t3d98oliwt26cmv")

  // remove
  collection.schema.removeField("srshc9mw")

  return dao.saveCollection(collection)
})
