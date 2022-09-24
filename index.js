var MongoClient=require('mongodb').MongoClient;

var URL="mongodb://127.0.0.1:27017/";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,MyMongoClinet) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");

        // InsertMyData(MyMongoClinet);

        // DeleteOneMyData(MyMongoClinet);

        // DeleteAllMyData(MyMongoClinet);

        // FindOneWithOutConditionMyData(MyMongoClinet);

        // FindOneWithConditionMyData(MyMongoClinet);

        // FindAllMyData(MyMongoClinet);

        // FindAllDataByProjection(MyMongoClinet);

        // FindAllDataByQuery(MyMongoClinet)

        // FindAllDataByLimit(MyMongoClinet);

        // FindAllDataBySort(MyMongoClinet);

        // UpdateMyData(MyMongoClinet);

        // CreateMyCollection(MyMongoClinet);

        DeleteMyCollection(MyMongoClinet);

    }
});




// Insert Data on Node js MongoDB

function InsertMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    
    var MyData={SerialNo:01,district:"nilphamari",Area:102030,People:20203030};
   
    MyCollection.insertOne(MyData,function(error){
        if(error){
            console.log("MyData insert failed");
        }
        else{
            console.log("MyData insert success")
        }
    })

}





// Delete One Data on Node js MongoDB

function DeleteOneMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    
    var DeleteMyData={SerialNo:03};
   
    MyCollection.deleteOne(DeleteMyData,function(error){
        if(error){
            console.log("MyData delete failed");
        }
        else{
            console.log("MyData delete success")
        }
    })

}





// Delete All Data on Node js MongoDB

function DeleteAllMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");

    MyCollection.deleteMany(DeleteAllMyData,function(error,ResultObj){
        if(error){
            console.log("MyData delete all failed");
        }
        else{
            console.log("data delete success");
            // console.log(ResultObj)
        }
    })

}






// Find One With Out Condition Data on Node js MongoDB

function FindOneWithOutConditionMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    var FindObj={};

    MyCollection.findOne(FindObj,function(error,Result){
            console.log(Result);
       
    })

}





// Find One With Condition Data on Node js MongoDB

function FindOneWithConditionMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    var FindObj={SerialNo:04};

    MyCollection.findOne(FindObj,function(error,Result){
            console.log(Result);
       
    })

}





// Find All Data on Node js MongoDB

function FindAllMyData(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");

    MyCollection.find().toArray(function(error,Result){
            console.log(Result);
       
    })

}






// Find All Data By Projection on Node js MongoDB

function FindAllDataByProjection(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    var myItemObj={};
    var myItemProjection={projection:{SerialNo:1,district:1}}

    MyCollection.find(myItemObj,myItemProjection).toArray(function(error,Result){
            console.log(Result);
       
    })

}






// Find All Data By Query on Node js MongoDB

function FindAllDataByQuery(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    var MyQuery={district:"lalmonirhat"};
    

    MyCollection.find(MyQuery).toArray(function(error,Result){
            console.log(Result);
       
    })

}






// Find All Data By Limit on Node js MongoDB

function FindAllDataByLimit(MyMongoClinet){
    var MyDataBase=MyMongoClinet.db("rangpur");
    var MyCollection=MyDataBase.collection("district");
    
    

    MyCollection.find().limit(2).toArray(function(error,Result){
            console.log(Result);
       
    })

}






// Find All Data By Sort on Node js MongoDB

function FindAllDataBySort(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("rangpur");
    var MyCollection= MyDataBase.collection("district");

    var mySort={SerialNo :-1}

    MyCollection.find().sort(mySort).toArray(function (error,result) {
        console.log(result)
    })
}







//Update My Data on Node js MongoDB

function UpdateMyData(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("rangpur");
    var MyCollection= MyDataBase.collection("district");

    var MyQuery={SerialNo:4};
    var MyNewValues={$set:{district:"Kishorganj"}};

    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
        console.log(result);
    })
}






//Create Collection on Node js MongoDB

function CreateMyCollection(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("rangpur");
    MyDataBase.createCollection("union",function (error,result) {
        console.log(result);
    })
}





//Delete Collection on Node js MongoDB

function DeleteMyCollection(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("rangpur");
    MyDataBase.dropCollection("union",function (error,result) {
        console.log(result);
    })
}
