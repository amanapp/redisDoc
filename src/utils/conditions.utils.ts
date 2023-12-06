export const Conditions = {
  string: {
    "Case 1": {
      "Query Params": {
        choice: "1",
      },
      Body: {
        key: "your Key",
        value: "your value",
      },
      description: "Set the value's in redis",
      "Redis Method": "set",
      Method: "Post",
    },
    "Case 2": {
      "Query Params": {
        choice: "2",
        key: "your Key",
      },
      description: "Get the value from redis",
      "Redis Method": "get",
      Method: "Get",
    },
    "Case 3": {
      "Query Params": {
        choice: "3",
      },
      Body: {
        key: "your Key",
        value: "your value",
      },
      description: "Append the value in an existing key in redis",
      "Redis Method": "append",
      Method: "Post",
    },
    "Case 4": {
      "Query Params": {
        choice: "4",
      },
      Body: {
        key: "your Key",
      },
      description: "Decrease the value of an existing key in redis",
      "Redis Method": "decr",
      Method: "Patch",
    },
    "Case 5": {
      "Query Params": {
        choice: "5",
      },
      Body: {
        key: "your Key",
        decrement: "decrement value",
      },
      description:
        "Decrease the value by specific amount of an existing key in redis",
      "Redis Method": "decrby",
      Method: "Patch",
    },
    "Case 6": {
      "Query Params": {
        choice: "6",
      },
      Body: {
        key: "your Key",
      },
      description: "Get and Delete the key-value from redis",
      "Redis Method": "getdel",
      Method: "Delete",
    },
    "Case 7": {
      "Query Params": {
        choice: "7",
        key: "your Key",
        start: "starting range",
        end: "ending range",
      },
      description: "Get the key-value by range from redis",
      "Redis Method": "getrange",
      Method: "Get",
    },
    "Case 8": {
      "Query Params": {
        choice: "8",
      },
      Body: {
        key: "your Key",
      },
      description: "increase the value of an existing key by 1 from redis",
      "Redis Method": "incr",
      Method: "Patch",
    },
    "Case 9": {
      "Query Params": {
        choice: "9",
      },
      Body: {
        key: "your Key",
        increment: "increment value",
      },
      description:
        "increase the value of an existing key by given increment value in redis",
      "Redis Method": "incrby",
      Method: "Patch",
    },
    "Case 10": {
      "Query Params": {
        choice: "10",
        ke1: "your Key1",
        key2: "your Key2",
      },
      description:
        "find the longest common subsequence from both the key's from redis",
      "Redis Method": "lcs",
      Method: "Get",
    },
    "Case 11": {
      "Query Params": {
        choice: "11",
        ke1: "your Key1",
        key2: "your Key2",
      },
      description: "Get multiple key's from redis",
      "Redis Method": "mget",
      Method: "Get",
    },
    "Case 12": {
      "Query Params": {
        choice: "12",
      },
      Body: {
        ke1: "your Key1",
        key2: "your Key2",
        value1: "your value1",
        value2: "your value2",
      },
      description: "set multiple key's in redis",
      "Redis Method": "mset",
      Method: "Post",
    },
    "Case 13": {
      "Query Params": {
        choice: "13",
      },
      Body: {
        ke1: "your Key1",
        key2: "your Key2",
        value1: "your value1",
        value2: "your value2",
      },
      description:
        "set multiple key's in redis if key's not already exist in redis",
      "Redis Method": "msetnx",
      Method: "Post",
    },
    "Case 14": {
      "Query Params": {
        choice: "14",
      },
      Body: {
        key: "your Key",
        value: "your Value",
        exptesInSecond: "time in second",
      },
      description: "set key in redis for an specific time period",
      "Redis Method": "setex",
      Method: "Post",
    },

    "Case 15": {
      "Query Params": {
        choice: "15",
      },
      Body: {
        key: "your Key",
        value: "your Value",
        exptesInSecond: "time in second",
      },
      description: "set key in redis for an specific time period",
      "Redis Method": "setex",
      Method: "Post",
    },
    "Case 16": {
      "Query Params": {
        choice: "16",
        key: "your Key",
      },
      description: "get the length of an value from redis",
      "Redis Method": "strlen",
      Method: "Get",
    },
    "Case 17": {
      "Query Params": {
        choice: "17",
      },
      Body: {
        Key: "Your key",
        Field: "Field Name",
        Value: "value of Field",
      },
      description: "Set the Key and value in hash",
      "Redis Method": "HSET",
      Method: "Post",
    },
  },
  hash: {
    "Case 18": {
      "Query Params": {
        choice: "18",
      },
      Body: {
        Key: "Your key",
        Field: "Field Name",
      },
      description: "Field you want to delete from hash",
      "Redis Method": "HDEL",
      Method: "Delete",
    },

    "Case 19": {
      "Query Params": {
        choice: "19",
        Key: "Your key",
        Field: "Field Name",
      },
      description: "check Field is exist in hash or not",
      "Redis Method": "HEXISTS",
      Method: "Get",
    },

    "Case 20": {
      "Query Params": {
        choice: "20",
        Key: "Your key",
        Field: "Field Name",
      },
      description: "Get a particular field from hash",
      "Redis Method": "HGET",
      Method: "Get",
    },

    "Case 21": {
      "Query Params": {
        choice: "21",
        Key: "Your key",
      },
      description: "Get all field from hash",
      "Redis Method": "HGETALL",
      Method: "Get",
    },

    "Case 22": {
      "Query Params": {
        choice: "22",
      },
      Body: {
        Key: "Your key",
        Field: "Field Name",
        increment: "increment value in number",
      },
      description:
        "increase the value by specific amount of an existing field in redis",
      "Redis Method": "HINCRBY",
      Method: "Patch",
    },

    "Case 23": {
      "Query Params": {
        choice: "23",
      },
      Body: {
        Key: "Your key",
        Field: "Field Name",
        increment: "increment value in float",
      },
      description:
        "increase the value in float by specific amount of an existing field in redis",
      "Redis Method": "HINCRBYFLOAT",
      Method: "Patch",
    },

    "Case 24": {
      "Query Params": {
        choice: "24",
        Key: "Your key",
      },
      description: "Get only all fields from hash",
      "Redis Method": "HKEYS",
      Method: "Get",
    },

    "Case 25": {
      "Query Params": {
        choice: "25",
        Key: "Your key",
      },
      description: "Return the length of hash",
      "Redis Method": "HLEN",
      Method: "Get",
    },

    "Case 26": {
      "Query Params": {
        choice: "26",
        key: "Your key",
        field1: "field one",
        field2: "field second",
        field3: "field three",
      },
      description: "Get multiple fields at a time from hash",
      "Redis Method": "HMGET",
      Method: "Get",
    },

    "Case 27": {
      "Query Params": {
        choice: "27",
        key: "Your key",
      },
      description: "return any random fields without value from hash",
      "Redis Method": "HRANDFIELD",
      Method: "Get",
    },

    "Case 28": {
      "Query Params": {
        choice: "28",
        key: "Your key",
        cursor: 0,
      },
      description: "return all fields with values of hash",
      "Redis Method": "HSCAN",
      Method: "Get",
    },

    "Case 29": {
      "Query Params": {
        choice: "29",
      },
      Body: {
        key: "Your key",
        field: "field name",
        value: "your value",
      },
      description: "set the field in hash if field does'nt exist in hash",
      "Redis Method": "HSETNX",
      Method: "POST",
    },

    "Case 30": {
      "Query Params": {
        choice: "30",
        key: "Your key",
        field: "field name",
      },
      description: "return the length of value of a particular field from hash",
      "Redis Method": "HSTRLEN",
      Method: "Get",
    },

    "Case 31": {
      "Query Params": {
        choice: "31",
        key: "Your key",
      },
      description: "return all the values from hash",
      "Redis Method": "HVALS",
      Method: "Get",
    },
  },
  set: {
    "Case 55": {
      "Query Params": {
        choice: "55",
      },
      Body: {
        key: "Your key",
        value: ["values....."],
      },
      description: "add values in set",
      "Redis Method": "SADD",
      Method: "Post",
    },

    "Case 56": {
      "Query Params": {
        choice: "56",
        key: "Your key",
      },
      description: "return the length of set",
      "Redis Method": "SCARD",
      Method: "Get",
    },

    "Case 57": {
      "Query Params": {
        choice: "57",
        key: ["keys..."],
      },
      description: "return the difference between sets",
      "Redis Method": "SDIFF",
      Method: "Get",
    },

    "Case 58": {
      "Query Params": {
        choice: "58",
      },
      Body: {
        key: "Your key",
        keys: ["keys...."],
      },
      description: "store the difference between sets in a new set",
      "Redis Method": "SDIFFSTORE",
      Method: "Post",
    },

    "Case 59": {
      "Query Params": {
        choice: "59",
        key: ["keys..."],
      },
      description: "return the intersection between sets",
      "Redis Method": "SINTER",
      Method: "Get",
    },

    "Case 60": {
      "Query Params": {
        choice: "60",
      },
      Body: {
        key: "Your key",
        keys: ["keys...."],
      },
      description: "store the intersection between sets in a new set",
      "Redis Method": "SINTERSTORE",
      Method: "Post",
    },

    "Case 61": {
      "Query Params": {
        choice: "61",
        key: "Your key",
        value: "your value",
      },
      description: "return the value present in set or not",
      "Redis Method": "SISMEMBER",
      Method: "Get",
    },

    "Case 62": {
      "Query Params": {
        choice: "62",
        key: "Your key",
      },
      description: "return all the values of set ",
      "Redis Method": "SMEMBERS",
      Method: "Get",
    },

    "Case 63": {
      "Query Params": {
        choice: "63",
        key: "Your key",
        members: ["members..."],
      },
      description: "return the values in members present in set or not",
      "Redis Method": "SMISMEMBER",
      Method: "Get",
    },

    "Case 64": {
      "Query Params": {
        choice: "64",
      },
      Body: {
        source: "source key",
        destination: "destination key",
        member: "value",
      },
      description: "move the member from source set to destination set",
      "Redis Method": "SMOVE",
      Method: "Patch",
    },

    "Case 65": {
      "Query Params": {
        choice: "65",
      },
      Body: {
        key: "your key",
        option: "(optional){'count': 'count value'}",
      },
      description:
        "remove the random value from the set but if you pass count in option remove random numbers equal to count from set",
      "Redis Method": "SPOP",
      Method: "Patch",
    },

    "Case 66": {
      "Query Params": {
        choice: "66",
        key: "your key",
      },
      description: "return the random number from the set",
      "Redis Method": "SRANDMEMBER",
      Method: "Get",
    },

    "Case 67": {
      "Query Params": {
        choice: "67",
      },
      Body: {
        key: "your key",
        member: "value",
      },
      description: "remove the value from the set if exist",
      "Redis Method": "SREM",
      Method: "Patch",
    },

    "Case 68": {
      "Query Params": {
        choice: "68",
        key: "your key",
        cursor: 0,
      },
      description: "return all the values in set",
      "Redis Method": "SSCAN",
      Method: "Get",
    },

    "Case 69": {
      "Query Params": {
        choice: "69",
        key: ["keys...."],
      },
      description: "return the union in sets",
      "Redis Method": "SUNION",
      Method: "Get",
    },

    "Case 70": {
      "Query Params": {
        choice: "70",
      },
      Body: {
        key: "new key",
        keys: ["keys...."],
      },
      description: "store the union of sets in new set",
      "Redis Method": "SUNIONSTORE",
      Method: "Post",
    },
    "Case 71": {
      "Query Params": {
        choice: "71",
      },
      Body: {
        key: "new key",
        data: [{
          longitude: "-122.2469854",
          latitude: "37.8104049",
          member: "station:3",
        },{
          longitude: "-122.2469854",
          latitude: "37.8104049",
          member: "station:4", 
        }],
      },
      description: "store the geospatial value ",
      "Redis Method": "GEOADD",
      Method: "Post",
    },
    "Case 72": {
      "Query Params": {
        choice: "72",
      },
      Body: {
        key: "key",
        member1:"member1",
        member2:"member2",
        optional:"optional"
      },
      description: "compare to member geospatial location value ",
      "Redis Method": "GEODIST",
      Method: "Post",
    },
    "Case 73": {
      "Query Params": {
        choice: "73",
      },
      Body: {
        key: "key",
        member:["member1","member2","member3"],
      },
      description: "compare to member geospatial location value and give result in hash value ",
      "Redis Method": "GEOHASH",
      Method: "Post",
    },
    "Case 74": {
      "Query Params": {
        choice: "74",
      },
      Body: {
        key: "key",
        member:["member1","member2","member3"],
      },
      description: "give  member geospatial location value",
      "Redis Method": "GEOPOS",
      Method: "Post",
    },
    "Case 75": {
      "Query Params": {
        choice: "75",
        key: "key",
        longitude:"longitude",
        latitude:"latitude",
        radius:"radius",
        unit:"unit"
      },
      description: "seraching the geospatial location ",
      "Redis Method": "GEOSEARCH",
      Method: "Get",
    },
  },
};
