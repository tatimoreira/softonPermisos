var schema = {
    "type": "object",
    "properties": {
      "requests": {
        "type": "array",
        "minItems": 3,
        "maxItems": 5,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "type": {
              "type": "string",
              "faker": "name.jobType"
            },
            "startDate": {
              "type": "string",
              "faker": "date.future"
            },
            "endDate": {
              "type": "string",
              "faker": "date.future"
            },
            "description": {
              "type": "string"
            }
          },
          "required": ["id", "type", "startDate", "endDate", "description" ]
        }
      }
    },
    "required": ["requests"]
  };
  
  module.exports = schema;