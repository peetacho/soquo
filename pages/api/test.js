import { db } from "../../utils/db";
import { getDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  // testing purposes
  const id = "AZbwzPNbdoYfwLWXzMp2";
  const docRef = doc(db, "Contractors", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    res.status(200).json({ success: true, message: 'contractor found', data: docSnap.data() });
  }
  else {
    res.status(404).json({ success: false, message: 'id not found', data: null });
  }
}
