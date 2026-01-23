import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Por favor, adicione sua connection string do MongoDB em MONGODB_URI");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Reutiliza conexão tanto em desenvolvimento quanto em produção
let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (!globalWithMongo._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalWithMongo._mongoClientPromise = client.connect();
}
clientPromise = globalWithMongo._mongoClientPromise;

export default clientPromise;

// Função helper para obter o banco de dados
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // Usa o banco padrão da connection string
}
