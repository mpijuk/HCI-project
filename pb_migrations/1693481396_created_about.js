/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kkw3qd9v7dtw3m5",
    "created": "2023-08-31 11:29:56.860Z",
    "updated": "2023-08-31 11:29:56.860Z",
    "name": "about",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kn7ahhxx",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "r8h28qyq",
        "name": "path",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kkw3qd9v7dtw3m5");

  return dao.deleteCollection(collection);
})
