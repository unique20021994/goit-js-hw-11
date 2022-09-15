import axios from 'axios';

export const fetchImages = async (inputValue, pageNr) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=29588079-fbc492831fdad231bf7222b96&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    );

    if (response.status !== 200) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(response.status);
    }

    return await response.data;
  } catch (error) {
    console.error(error);
  }
};
