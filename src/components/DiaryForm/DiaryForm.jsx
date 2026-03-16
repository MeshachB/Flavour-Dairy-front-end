import { useState } from "react";
import { useNavigate } from "react-router";
import * as diaryService from "../../services/diaryService";

const DiaryForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: "",
    rating: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddDiary(formData);
  };

  return (
    <main>
      <h1>New Diary</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="location-input">Location</label>
        <input
          required
          type="text"
          name="location"
          id="location-input"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="cuisine-input">Cuisine</label>
        <select
          required
          name="cuisine"
          id="cuisine-input"
          value={formData.cuisine}
          onChange={handleChange}
        >
          <option value="Bakery">Bakery</option>
          <option value="Bar">Bar</option>
          <option value="Brunch">Brunch</option>
          <option value="Cafe">Cafe</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Fine Dining">Fine Dining</option>
        </select>

        <label>Rating: {formData.rating}</label>
        <input
          type="range"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default DiaryForm;
