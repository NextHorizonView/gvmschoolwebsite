import { firestore } from "../firebaseconfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";  // Import necessary Firestore functions

export const addAdmissionEnquiry = async (enquiryData) => {
  try {
    // Add new document to the AdmissionEnquiry collection
    const docRef = await addDoc(collection(firestore, "AdmissionEnquiry"), enquiryData);
    
    // Update the document to set EnquiryId as the document ID
    await updateDoc(doc(firestore, "AdmissionEnquiry", docRef.id), { EnquiryId: docRef.id,EnquirySection: enquiryData.EnquirySection  });
    
    return docRef.id; // Return the EnquiryId (which is the document ID)
  } catch (error) {
    console.error("Error adding admission enquiry: ", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
