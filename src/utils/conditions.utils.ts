export const Conditions = {
    "Case 1": {
        "Query Params": {
            "choice": '1'
        },
        "Body": {
            "key": "your Key",
            "value": "your value",
        },
        "description":"Set the value's in redis",
        "Redis Method": "set",
        "Method": "Post"
    },
    "Case 2": {
        "Query Params": {
            "choice": '2',
            "key": "your Key"
        },
        "description":"Get the value from redis",
        "Redis Method": "get",
        "Method": "Get"
    },
    "Case 3": {
        "Query Params": {
            "choice": '3',
        },
        "Body": {
            "key": "your Key",
            "value": "your value",
        },
        "description":"Append the value in an existing key in redis",
        "Redis Method": "append",
        "Method": "Post"
    },
    "Case 4": {
        "Query Params": {
            "choice": '4',
        },
        "Body": {
            "key": "your Key",
        },
        "description":"Decrease the value of an existing key in redis",
        "Redis Method": "decr",
        "Method": "Patch"
    },
    "Case 5": {
        "Query Params": {
            "choice": '5',
        },
        "Body": {
            "key": "your Key",
            "decrement": "decrement value"
        },
        "description":"Decrease the value by specific amount of an existing key in redis",
        "Redis Method": "decrby",
        "Method": "Patch"
    },
    "Case 6": {
        "Query Params": {
            "choice": '6',
        },
        "Body": {
            "key": "your Key",
        },
        "description":"Get and Delete the key-value from redis",
        "Redis Method": "getdel",
        "Method": "Delete"
    },
    "Case 7": {
        "Query Params": {
            "choice": '7',
            "key": "your Key",
            "start": "starting range",
            "end": "ending range"
        },
        "description":"Get the key-value by range from redis",
        "Redis Method": "getrange",
        "Method": "Get"
    },
    "Case 8": {
        "Query Params": {
            "choice": '8'
        },
        "Body": {
            "key": "your Key"
        },
        "description":"increase the value of an existing key by 1 from redis",
        "Redis Method": "incr",
        "Method": "Patch"
    },
    "Case 9": {
        "Query Params": {
            "choice": '9'
        },
        "Body": {
            "key": "your Key",
            "increment": "increment value"
        },
        "description":"increase the value of an existing key by given increment value in redis",
        "Redis Method": "incrby",
        "Method": "Patch"
    },
    "Case 10": {
        "Query Params": {
            "choice": '10',
            "ke1": "your Key1",
            "key2": "your Key2"
        },
        "description":"find the longest common subsequence from both the key's from redis",
        "Redis Method": "lcs",
        "Method": "Get"
    },
    "Case 11": {
        "Query Params": {
            "choice": '11',
            "ke1": "your Key1",
            "key2": "your Key2"
        },
        "description":"Get multiple key's from redis",
        "Redis Method": "mget",
        "Method": "Get"
    },
    "Case 12": {
        "Query Params": {
            "choice": '12', 
        },
        "Body": {
            "ke1": "your Key1",
            "key2": "your Key2",
            "value1": "your value1",
            "value2": "your value2"
        },
        "description":"set multiple key's in redis",
        "Redis Method": "mset",
        "Method": "Post"
    },
    "Case 13": {
        "Query Params": {
            "choice": '13', 
        },
        "Body": {
            "ke1": "your Key1",
            "key2": "your Key2",
            "value1": "your value1",
            "value2": "your value2"
        },
        "description":"set multiple key's in redis if key's not already exist in redis",
        "Redis Method": "msetnx",
        "Method": "Post"
    },
    "Case 14": {
        "Query Params": {
            "choice": '14', 
        },
        "Body": {
            "key": "your Key",
            "value": "your Value",
            "exptesInSecond": "time in second"
        },
        "description":"set key in redis for an specific time period",
        "Redis Method": "setex",
        "Method": "Post"
    },

    "Case 15": {
        "Query Params": {
            "choice": '15', 
        },
        "Body": {
            "key": "your Key",
            "value": "your Value",
            "exptesInSecond": "time in second"
        },
        "description":"set key in redis for an specific time period",
        "Redis Method": "setex",
        "Method": "Post"
    },
    "Case 16": {
        "Query Params": {
            "choice": '16', 
            "key": "your Key",
        },
        "description":"get the length of an value from redis",
        "Redis Method": "strlen",
        "Method": "Get"
    },
}