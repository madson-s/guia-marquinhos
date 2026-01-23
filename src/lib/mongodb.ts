import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Por favor, adicione sua connection string do MongoDB em MONGODB_URI");
}

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Em desenvolvimento, use uma variável global para não criar múltiplas conexões
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção (Vercel), cria uma nova conexão por invocação mas reutiliza se possível
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Função helper para obter o banco de dados
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // Usa o banco padrão da connection string
}
