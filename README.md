# Javascript DOM evaluation

You'll develop a "Guess the color" game in this evaluation.

![screenshot](https://user-images.githubusercontent.com/6475893/205173566-04743888-277b-4dfb-a5cb-2f1cee1dad0b.gif)

## User stories
- When opening the page, the user will see the game title
- Below the title, the user will see a random color in RGB, like `rgb(12, 13, 15)`
- Below the random color, the user will see 6 cards, each one displaying a random color with its respective `hex` value
- The user will be able to click on the colors
  - If the color the user clicks corresponds to the selected `rgb` color, the user will see an alert displaying `Correct answer`
  - If the clicked color is different than the `rgb`, the color must be removed from the screen
- If the user reloads the page, the game is restarted

### Bonus
- The user will be able to switch between `easy` and `hard` mode
  - The easy mode is the default one, and it shows the colors `hex` code
  - The hard mode will remove the `hex` code, leaving only the color itself

## Requirements
- Your project must contain a valid `package.json`
- You should install, from NPM, your `hex-rgb` package to convert the colors from `hex` to `rgb`
- You need to set up your project making sure no one commits their `node_modules` folder
- You must use an HTML template to render the colors
- Pay attention to the existing code. It might help you develop your solution
