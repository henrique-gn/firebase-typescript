import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"
import token from "./example.json"

initializeApp({
  // typescript throws a error here because the type of ServiceAccount and auto-generated JSON, but it works perfectly fine
  // in javascript, guess that is a error in optional properties, I've reported it, waiting for response.
  // @ts-ignore
  credential: cert(token), // validation token
  storageBucket: "gs://default.appspot.com", // storage buckete<FirebaseFirest
})
const database = getFirestore()
const bucket = getStorage().bucket()

database.settings({ ignoreUndefinedProperties: true })

export { database, bucket }
