import { MongoClient } from "mongodb";

let Client: MongoClient;

let ClientPromise: Promise<MongoClient>;

const uri = process.env.MONGODB_URI;

const oprtions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if(!process.env.MONGODB_URI) {
  throw new Error("Please Add Your MONGODB Atlas");
}

Client = new MongoClient(uri!, oprtions);
ClientPromise = Client.connect();

ClientPromise.then(() => console.log("Connected To MongoDB"));

export default ClientPromise;
