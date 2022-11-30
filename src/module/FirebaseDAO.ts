export class FirebaseDAO {
  collection: FirebaseFirestore.CollectionReference
  constructor(collection: FirebaseFirestore.CollectionReference) {
    this.collection = collection
  }
  getDocument = async (docID: string) => {
    const snapshot = await this.collection.get()
    let result: FirebaseFirestore.QueryDocumentSnapshot
    snapshot.forEach(document => {
      if (document.id === docID) result = document
    })
    if (result) {
      const data = result.data()
      data.id = result.id
      return data
    }
    throw new Error("Document does not exist")
  }
  // specify your interface or type in type of "any" if you want identical properties
  addDocument = async (data: any) => {
    const doc = this.collection.doc()
    const result = await doc.set(data)
    if (result) {
      return {
        writeTime: result.writeTime,
        document: data,
      }
    }
    throw new Error("Cannot add document")
  }
  updateDocument = async (id: string, data: any) => {
    return await this.collection.doc(id).update(data)
  }
  removeDocument = async (id: string) => {
    return await this.collection.doc(id).delete()
  }
  getCollection = async () => {
    const res = await this.collection.get()
    const data: any = []
    res.forEach(doc => {
      const obj = doc.data()
      obj.id = doc.id
      data.push(obj)
    })
    return data
  }
  getCollections = async (docID: string) => {
    const res = await this.collection.doc(docID).listCollections()
    const data: any = []
    res.forEach(async collection => {
      data.push({
        id: collection.id,
        data: await this.getCollection(),
      })
    })
    return data
  }
}