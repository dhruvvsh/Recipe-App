import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RecipeCard = ({ recipe }) => {
  const ingredientsList = recipe.ingredients.split('|').map((ingredient, index) => (
    <ListItem key={index}>
      <ListItemText primary={ingredient} />
    </ListItem>
  ));

  return (
    <Card sx={{ backgroundColor: '#FFEDD5', color: '#333', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="primary">
          Servings: {recipe.servings}
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ingredients-content"
            id="ingredients-header"
          >
            <Typography>Ingredients</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>{ingredientsList}</List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="instructions-content"
            id="instructions-header"
          >
            <Typography>Instructions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textPrimary">
              {recipe.instructions}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
