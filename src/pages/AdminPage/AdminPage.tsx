import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useAuth } from "../../components/context/AuthProvider";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Button, TextField } from "@mui/material";
import { getAllImagesUrls } from "../../components/LazyImage/utils/getAllImagesUrls";
import { get } from "http";

interface Painting {
  dimensions: string;
  name: string;
  type: string;
  images: string[];
}

export function AdminPage() {
  const { logOut } = useAuth();

  const [imagesUpload, setImageUpload] = useState<FileList | null>(null);
  const [formData, setFormData] = useState<Painting>({
    name: "",
    dimensions: "",
    type: "",
    images: [],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function uploadImages(productId: string) {
    if (imagesUpload) {
      const storage = getStorage();

      const imageUrls = await Promise.all(
        Array.from(imagesUpload).map(async (file) => {
          const storageRef = ref(storage, `images/${productId}/${file.name}`);
          await uploadBytes(storageRef, file);
          return getDownloadURL(storageRef);
        })
      );
      console.log("Image URLs", imageUrls); // here url is logged

      setFormData((prevData) => ({ ...prevData, images: [...prevData.images, ...imageUrls] }));
    }
  }

  async function handleAddDoc(e: any) {
    try {
      e.preventDefault(); 
      console.log("Form data", formData);  // here images array is empty

      const docRef = await addDoc(collection(db, "pictures"), formData);
      await uploadImages(docRef.id);
      console.log("Document written with ID: ", docRef.id);
      // toast({
      //   title: "Success",
      //   description: `Document written with ID: ${docRef.id}`,
      // });
    } catch (error) {
      console.error("Error adding document: ", error);
      // toast({
      //   title: "Error",
      //   description: `Error adding document: ${error}`,
      //   variant: "destructive",
      // });
    }
  }

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogOut}>Log Out</button>

      <form>
        <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
        <TextField label="Dimensions" name="dimensions" value={formData.dimensions} onChange={handleInputChange} />
        <TextField label="Type" name="type" value={formData.type} onChange={handleInputChange} />
        {/* <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button> */}
        <input type="file" name="image" multiple onChange={(e) => setImageUpload(e.target.files)} />
        <Button onClick={handleAddDoc}>Add item</Button>
        {/* <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <label htmlFor="dimensions">Dimensions</label>
        <input type="text" name="dimensions" value={formData.dimensions} onChange={handleInputChange} />
        <label htmlFor="type">Type</label>
        <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
        <input type="file" name="image" multiple onChange={(e) => setImageUpload(e.target.files)} />
        <button onClick={handleAddDoc}>Add item</button> */}
      </form>
    </div>
  );
}
