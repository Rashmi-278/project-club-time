import { addDoc, collection } from "firebase/firestore"
import { firestore } from "./firebase" 
const handleSubmit = (name, email) => {
    const ref = collection(firestore, "InterestSignUps") // Firebase creates this automatically
 
    let data = {
        fullName: name,
        email: email
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit