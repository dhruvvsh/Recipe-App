// src/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import RecipeCard from './RecipeCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/recipe?query=${query}`,
        {
          headers: { 'X-Api-Key': 'Ncvwtx8EBqRDAzv5SFAvRQ==yVkOHczq0sT899DT' },
        }
      );
      setRecipes(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching recipes. Please try again.');
      setRecipes([]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
      </Typography>
      <TextField
        label="Enter for search recipe"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ backgroundColor: '#Ffffff', color: '#333', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      />
      <Button variant="contained" color="secondary" onClick={handleSearch}>
        Search
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        {recipes.map((recipe, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Search;
