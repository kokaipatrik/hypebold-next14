import Cookies from 'js-cookie';

export default function useImageUpload() {
  const upload = async (file: File) => {
    const token = Cookies.get('token');
    const images = new FormData();

    images.append('images', file);

    const uploadImages = await fetch(`${process.env.NEXT_PUBLIC_API}/ad/upload-images`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: images,
    });
    const response = await uploadImages.json();
    
    if (!uploadImages.ok) throw new Error(response?.message);

    return response;
  };

  return {
    upload,
  };
};
