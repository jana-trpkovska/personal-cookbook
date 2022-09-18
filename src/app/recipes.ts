export interface Recipes{
  id:number;
  name:string;
  image:string;
  ingredients:string[];
  method_name:string[];
  method_details:string[];
  source:string;
  tags:string[];
}

export const recipesBreakfastHome =[
  {
    id: 1,
    name:"Shakshuka with Feta, Olives, and Peppers",
    image: "assets/img/Breakfast-home/1-breakfast_home.jpg",
    ingredients: ["2 tablespoons olive oil","1 teaspoon smoked paprika",
      "1 teaspoon ground cumin","1/4 teaspoon Maras or Aleppo pepper flakes, or 1/8 teaspoon crushed red pepper flakes",
      "1 large yellow onion, halved and thinly sliced",
      "2 cloves garlic, thinly sliced",
      "1 red bell pepper, seeded and thinly sliced",
      "1 yellow bell pepper, seeded and thinly sliced",
      "1 can (28 ounces) whole peeled tomatoes, preferably San Marzano",
      "1/2 teaspoon salt, or to taste",
      "4 ounces feta cheese, crumbled",
      "1/3 cup pitted Kalamata or other olives in brine",
      "4 large eggs","‎",
      "For garnish:",
      "1/4 bunch cilantro, leaves coarsely chopped (for garnish)"],
    method_name: ["Cook the onion and peppers:", "Crush the tomatoes and simmer them with the peppers:",
      "Cook the eggs:", "To serve:"],
    method_details: ["In a large skillet over medium heat, heat the oil. Add the paprika, cumin, and pepper flakes and cook for 30 seconds to a minute to bloom the spices.\n" +
    "\n" +
    "Add the onion and cook, stirring occasionally, for 3 minutes. Add the garlic, red pepper, and yellow pepper and cook, stirring occasionally, for 15 minutes, or until the vegetables soften.",
      "In a bowl, break up the tomatoes with your hands. Add them to the skillet with the salt and cook for 5 minutes. Taste and add more salt, if you prefer.",
      "With the back of a spoon or a ladle, make 4 indentations in the sauce.\n" +
      "\n" +
      "Break an egg into a cup and carefully pour it into and indentation, being careful not to break the yolk. Repeat with the remaining eggs. (You can crack the egg directly into the sauce and skip the cup, but it’s easier to get a an errant egg shell or protect the dish from a bad egg if you use the cup method.)\n" +
      "\n" +
      "Sprinkle the feta and olives around the eggs. Cover the pan and simmer over medium heat for 8 minutes, or until the whites are set and the yolks are still soft. (If you like your eggs well done, cook for a minute or two longer.)",
      "Garnish with cilantro leaves and a sprinkling of red pepper flakes. Bring to the table and serve from the pan."],
    source: "https://www.simplyrecipes.com/shakshuka-with-feta-olives-and-peppers-5114919",
    tags:["#healthy breakfast","#easy breakfast"]
  },
  {
    id:2,
    name:"Zucchini Carrot Bread",
    image: "assets/img/Breakfast-home/2-breakfast_home.jpg",
    ingredients: ["For the bread:",
      "Butter or cooking spray, for greasing the pan",
      "2 small carrots (8 ounces total)",
      "2 small zucchini (10 ounces total) ",
      "2 cups (260g) all-purpose flour",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon baking soda",
      "1 teaspoon baking powder",
      "1 teaspoon ground cinnamon",
      "1/2 teaspoon ground ginger",
      "1/2 teaspoon ground cardamom",
      "1 teaspoon freshly grated orange zest",
      "1/2 cup (100g) granulated sugar",
      "1/2 cup (100g) packed light brown sugar",
      "1/2 cup vegetable oil",
      "2 large eggs",
      "1 teaspoon freshly grated orange zest",
      "1 tablespoon demerara sugar","‎",
      "For the glaze:",
      "3/4 cup powdered sugar",
      "4 to 5 teaspoons milk (whole or buttermilk)",
      "1/2 teaspoon pure vanilla extract",
      "Large pinch freshly grated nutmeg",
      "Pinch salt","‎",
      "For topping:",
      "1/2 cup sweetened coconut flakes, toasted"],
    method_name: ["Preheat the oven to 350°F.", "Grate the carrots and zucchini:",
      "Whisk the dry ingredients for batter:", "Combine wet ingredients for batter:",
      "Finish batter:", "Pour batter into prepared pan:", "Bake the bread, then cool:",
      "Make the glaze:", "Drizzle with glaze and coconut:"],
    method_details: ["Grease a 9x5-inch loaf pan with butter or cooking spray and set aside.",
      "Using a box grater, carefully grate the carrots with the large holes. You should have about 1 cup packed. Set aside. \n" +
      "\n" +
      "Next, grate the zucchini using a box grater with the large holes. Using your hands or a clean dish towel or nut milk bag, wring out the zucchini. You should have about 1 cup packed zucchini. Set aside.",
      "In a medium bowl, whisk the flour, salt, baking soda, baking powder, cinnamon, ginger, and cardamom together.",
      "In a large bowl, whisk both sugars and vegetable oil, until combined. Add the eggs and whisk until smooth.", "In a large bowl, whisk both sugars and vegetable oil, until combined. Add the eggs and whisk until smooth.",
      "Add the grated carrots, grated zucchini, and the orange zest to bowl and stir to distribute. Use a rubber spatula to fold in the flour mixture until just combined. There should be no visible streaks of flour once thoroughly combined.",
      "Pour the batter into the prepared pan and smooth out the top with the spatula. Sprinkle the demerara sugar over top.", "In a large bowl, whisk both sugars and vegetable oil, until combined. Add the eggs and whisk until smooth.",
      "Bake the bread for 55 to 60 minutes until a cake tester or skewer inserted into the center comes out clean. Let cool in the pan for at least 20 minutes, then transfer to a wire rack to cool completely.",
      "In a small bowl, whisk together the powdered sugar and milk, 1 tablespoon at a time, until the mixture is a smooth and pourable consistency. Stir in the vanilla, salt, and nutmeg.",
      "Use a spoon to drizzle the glaze over the cooled bread. Sprinkle the toasted coconut overtop. Cut slices serve.\n" +
      "\n" +
      "This bread keeps well on the counter for a few days—just store it in an airtight container or wrapped tightly in plastic wrap. Keep in mind that the coconut topping will get less crunchy over time."],
    source: "https://www.simplyrecipes.com/zucchini-carrot-bread-recipe-5323096",
    tags:["#easy breakfast"]
  },
  {
    id:3,
    name:"French Omelette",
    image: "assets/img/Breakfast-home/3-breakfast_home.jpg",
    ingredients: ["3 large eggs",
      "Pinch of salt",
      "Pinch of white pepper",
      "1 tablespoon unsalted butter",
      "Finely chopped chives or parsley, for garnish"],
    method_name:["Beat the eggs:", "Melt the butter:","Cook the eggs:","Roll the omelette:","Serve the omelette:"],
    method_details:["In a medium bowl, whisk the eggs until no traces of white remain. Whisk in the salt and white pepper.",
      "In an 8-inch nonstick skillet with rounded sides set over medium heat, melt the butter, being careful not to let it brown. Swirl it around in the pan so it coats the bottom and sides.",
      "Pour the eggs into the pan. With the bowl of a fork, tines facing up, rapidly stir the eggs. If you’re concerned about scraping the nonstick surface of your pan, use a plastic fork. Move the fork all around the pan to break up the eggs as they cook. At the same time, hold the handle of the pan with the other hand and vigorously shake the pan back and forth. If the eggs cook too fast, forming large clumps, take the pan off the heat and keep stirring. The eggs will continue to cook a little from the residual heat. Cook until the eggs are loose and creamy with small curds. This will only take 2 to 3 minutes.",
      "If you haven’t already done so, remove the pan from the heat. Run the fork around the edges to release the eggs. Tilt the pan to a 45-degree angle so that the eggs move to one side of the pan. Use your fork to fold the overhanging eggs up and towards the center of the omelette. It should now be almond-shaped.",
      "Sprinkle with chives or parsley, if you’d like, and serve."],
    source:"https://www.simplyrecipes.com/french-omelette-recipe-5272297",
    tags:["#healthy breakfast","#vegetarian"]
  },
]

export const recipesLunchHome = [
  {
    id: 4,
    name:"Spicy Creamed Corn Linguine",
    image: "assets/img/Lunch-home/1-lunch-home.jpg",
    ingredients: ["1 pound dry linguine", "6 ears fresh corn, shucked", "3 tablespoons olive oil", "3 tablespoons olive oil",
      "2 shallots, thinly sliced\n","2 cloves garlic, thinly sliced", "1/2 teaspoon sea salt\n",
      "1 to 3 chipotle pepper in adobo, roughly chopped, to taste (see recipe note)\n",
      "1/4 cup adobo sauce from the canned chipotle peppers \n",
      "1 cup heavy cream\n",
      "3/4 cup shredded smoked white cheddar cheese\n",
      "1/2 tablespoon sugar, optional\n",
      "1/2 cup halved grape or cherry tomatoes, for garnish (optional)\n",
      "Roughly chopped cilantro leaves, for garnish (optional)"],
    method_name: ["Cook the linguine:", "Meanwhile, prepare the corn: ",
      "Cook the shallots and garlic:", "Add the corn: ", "Blend the corn:", "Finish the sauce:",
      "Toss the pasta with the sauce and cheese, then serve:"],
    method_details: ["Bring a large pot (about 4 quarts) of salted water to a boil over high heat. Cook linguine according to the package instructions until al dente. Save 1 cup of the pasta cooking water and set aside. Then drain the pasta in a colander and return it to the pot.",
      "In a large bowl, stand the corn vertically and use a small sharp knife to cut downward to remove the kernels off the corn. Using the back of the knife, scrape the cob downward to scrape off any liquid. Discard the cob and set the corn aside.",
      "In a large nonstick skillet over medium-high heat, heat the olive oil. Add the shallots and garlic, and cook for about 2 minutes, stirring constantly with a wooden spoon, until translucent.",
      "Stir in the corn (including the liquid you scraped from the cobs) and salt. Cook for 4 to 5 minutes, until the corn becomes tender, scraping the bottom of the skillet often so that it doesn’t burn. Turn the heat off.",
      "Scoop out 1 cup cooked corn and set aside. Scrape the remaining into a blender with the adobo peppers, adobo sauce, and 1/2 cup of the reserved pasta cooking water. Blend on medium-high until somewhat smooth with a little texture, 30 to 45 seconds.",
      "Return the blended corn and reserved whole corn kernels to the skillet. Add the cream and bring to a simmer. Cook, stirring occasionally, until thickened, about 5 minutes. Add a few tablespoons of the reserved pasta water to loosen if it thickens too much.",
      "Add the sauce and cheese to the cooked linguine in the pot. Toss to coat, adding 1/2 cup of the reserved pasta water to help smooth out the sauce. Keep on adding more pasta water a bit at a time if the sauce needs it. Taste and adjust the seasonings, adding the optional sugar, if you like. To serve, garnish it with the tomatoes and cilantro, if desired."],
    source: "https://www.simplyrecipes.com/spicy-creamed-corn-linguine-recipe-6501996",
    tags:["#vegetarian"]
  },
  {
    id:5,
    name:"Chicken Caesar Wrap",
    image: "assets/img/Lunch-home/2-lunch-home.jpg",
    ingredients: ["1 1/2 cups chopped cooked chicken\n",
      "2 cups chopped romaine lettuce\n",
      "1/3 cup Caesar dressing\n",
      "1/4 cup freshly grated Parmesan cheese\n",
      "1/2 cup croutons\n",
      "Salt, to taste\n",
      "Black pepper, to taste\n",
      "4 large (10-inch) flour tortillas"],
    method_name: ["Make the salad:", "Wrap the salad:",
      "Serve:"],
    method_details: ["In a large bowl, add the chicken, lettuce, Caesar dressing, Parmesan cheese, and croutons. Toss until everything is evenly coated in the dressing. Taste and season with salt and black pepper, if needed.",
      "Place a tortilla flat on a cutting board or clean work surface. Add a quarter of the salad in the center of the tortilla. Fold the left and right edges in towards the center, then tuck the side closest to you up and roll it tightly. Secure it with a toothpick, if you’d like. You could also keep the wrap seam side-down so that it doesn’t unroll. Assemble the remaining 3 wraps just like this.",
      "Cut the wraps in half or serve them whole. The chicken Caesar wraps can be wrapped in plastic wrap, parchment paper, or foil, and refrigerated for up to 2 days."],
    source: "https://www.simplyrecipes.com/chicken-caesar-wraps-recipe-6279136",
    tags:["#easy lunch"]
  },
  {
    id:6,
    name:"The Ultimate Quesadilla",
    image: "assets/img/Lunch-home/3-lunch-home.jpg",
    ingredients: ["Large flour tortillas\n" ,
      "Grated cheese such as mild or sharp cheddar, or Monterey Jack\n" ,
      "Olive oil or butter\n" ,
      "‎",
      "Optional:\n" ,
      "\n" ,
      "Sliced mushrooms\n" ,
      "Green onions\n" ,
      "Black olives, sliced\n" ,
      "Fresh tomatoes, diced\n" ,
      "Chicken pieces\n" ,
      "Avocado\n" ,
      "Lettuce\n" ,
      "Apple cider vinegar\n" ,
      "Kosher salt"],
    method_name:["Heat the tortillas until air pockets form:", "Add the cheese and other ingredients:","Lower the heat and cover pan:","Fold the tortilla over:","Remove quesadilla from pan and cut into wedges:"],
    method_details:["Heat a large skillet (cast iron works great) on medium high heat. Add a small amount of oil (about 1/2 teaspoon) and spread it around the bottom of the pan with a spatula (you could use butter as well).\n" +
    "\n" +
    "Take one large flour tortilla and place it in the pan. Flip the tortilla over a few times, 10 seconds between flips. Air pockets should begin to form within the tortilla.",
      "When pockets of air begin to form, take a handful of grated cheese, sprinkle over the top of the tortilla, making sure that the cheese does not land on the pan itself.\n" +
      "\n" +
      "Add whatever additional ingredients you choose - green onion, sliced mushrooms, olives, tomatoes, etc. If you would like your quesadilla to be a chicken quesadilla, add some diced cooked chicken.\n" +
      "\n" +
      "Take care not to layer on the ingredients too thickly - this is a quesadilla, not a quiche!",
      "Reduce the heat to low and cover the pan. The pan should be hot enough by now to have plenty of residual heat to melt the cheese and brown the tortilla. If the quesadilla begins to smoke too much, remove from the heat.\n" +
      "\n" +
      "After a minute, check to see if the cheese is melted. If not, return the cover and keep checking every minute until the cheese is melted.",
      "When the cheese is sufficiently melted, use a spatula to lift up one side of the quesadilla and flip over the other side, as if you were making an omelette.\n" +
      "\n" +
      "The tortilla should by now be browned slightly. If it is not browned, turn the heat up to high and flip the quesadilla over every 10 seconds or so until it gets browned.",
      "To make the lettuce to accompany the quesadilla, thinly slice some iceberg lettuce. Sprinkle some cider vinegar on it and some salt.\n" +
      "\n" +
      "Serve with the lettuce, salsa, sour cream, and guacamole."],
    source:"https://www.simplyrecipes.com/recipes/quesadilla/",
    tags:["#vegetarian","#easy lunch"]
  },
]

export const recipesDinnerHome =[
  {
    id: 7,
    name:"Spicy Tofu Stir-fry",
    image: "assets/img/Dinner-home/1-dinner-home.jpg",
    ingredients: ["16 ounces extra-firm tofu, cut into 1/2-inch cubes\n",
      "      1/2 cup orange juice\n",
      "      1/3 cup vegetable stock\n",
      "      1/4 cup soy sauce\n",
      "      3 tablespoons honey\n",
      "      2 teaspoons rice vinegar\n",
      "      1/2 teaspoon garlic chili sauce, add more for a spicier sauce\n",
      "    1 tablespoon cornstarch\n",
      "    2 tablespoons water\n",
      "    4 teaspoons vegetable oil, divided\n",
      "    1 teaspoon sesame oil\n",
      "    4 ounces shiitake mushrooms, stems removed, 1/2-inch thick slices\n",
      "    2 cups sugar snap peas\n" ,
      "    1/2 large red bell pepper, 1/2-inch dice\n" ,
      "    1/2 large green bell pepper, 1/2-inch dice\n",
      "    1 tablespoon minced garlic\n" ,
      "    2 teaspoons minced ginger\n" ,
      "    1 tablespoon green onion, thinly sliced\n" ,
      "    Kosher salt, to taste\n" ,
      "    Black pepper, to taste"],
    method_name: ["Prepare the baking sheets:", "Press the tofu: ",
      "Dry the tofu:", "Make the sauce: ", "Fry the tofu:", "Stir-fry the vegetables:",
      "Cook the sauce:","Add the tofu back to the pan:","Serve:"],
    method_details: ["Line a large baking sheet with paper towels, have another baking sheet ready and a weight like a jar of sugar or flour.",
      "Drain tofu and dry with paper towels. Arrange the tofu in a single layer on the baking sheet lined with paper towels. Cover with additional paper towels. Place a second sheet pan on top. Place a heavy can or jar on the pan to lightly press out the excess moisture from the tofu. Leave it for about 10 minutes.",
      "After pressing, use dry paper towels to gently pat each piece of tofu dry to remove as much residual moisture as possible. Set the pieces aside on dry paper towels.",
      "In a medium-sized bowl whisk together orange juice, vegetable broth, soy sauce, honey, rice vinegar, and garlic chili sauce. In a small bowl whisk together cornstarch and water, set aside.",
      "Heat a wok or 12-inch nonstick skillet over medium-high heat. Add 3 teaspoons vegetable oil and sesame oil and heat until shimmering but not smoking. Swirl the pan to coat with the oil.\n" +
      "\n" +
      "Working in two batches, add tofu to the pan in a single layer. Cook until golden brown, about 2 to 3 minutes. Flip over and cook the other side until golden browned, another 2 to 3 minutes. Transfer to a clean plate lined with a paper towel, then fry the remaining tofu.",
      "Add the remaining 1 teaspoon of vegetable oil to the pan. Add the mushrooms and sugar snap peas, stir-fry for 2 minutes. Add the diced bell peppers, cook for 1 minute. Add the garlic and ginger, stir-fry for 30 seconds.",
      "Add the sauce mixture to the pan, simmer for 30 seconds. Mix the cornstarch mixture, then gradually add to the pan, stir constantly until thickened, about 30 seconds.",
      "Turn off the heat and add the tofu back to the pan, stir to coat and warm through, about 1 minute. Season tofu stir-fry with salt, pepper, and garlic chili oil to taste.",
      "Serve tofu stir-fry with rice and garnish with green onions."],
    source: "https://www.simplyrecipes.com/spicy-tofu-stir-fry-recipe-5115374",
    tags:["#vegetarian","#gluten-free"]
  },
  {
    id:8,
    name:"Classic Rack of Lamb",
    image: "assets/img/Dinner-home/2-dinner-home.jpg",
    ingredients: ["1 or more Frenched lamb rib racks with 7 to 8 ribs each (1 1/4 to 2 pounds for each rack)\n" ,
      "‎",
      "For each rib rack:\n" ,
      "2 teaspoons chopped fresh rosemary\n" ,
      "1 teaspoon chopped fresh thyme\n" ,
      "2 cloves garlic, minced\n" ,
      "Salt\n" ,
      "Freshly ground black pepper\n" ,
      "2 tablespoons extra virgin olive oil"],
    method_name: ["Marinate the lamb:", "Bring lamb to room temp:",
      "Preheat the oven to 450°F:","Score the fat, sprinkle with salt and pepper, wrap bones in foil, place in pan fat side up:",
      "Roast at high heat to brown, then reduce heat to finish:","Rest the roast 15 minutes before serving:",
    ],
    method_details: ["Rub rib rack(s) all over with mixture of rosemary, thyme, and garlic. Rub with salt and freshly ground black pepper. Place in a thick plastic bag with olive oil.\n" +
    "\n" +
    "Spread oil around so that it coats the lamb rack(s) all over. Squeeze out as much air as you can from the bag and seal. Place in a container to catch any leaks.\n" +
    "\n" +
    "Marinate in the refrigerator overnight, or at room temperature for 1 1/2 to 2 hours as the lamb is coming to room temperature in the next step.",
      "Remove the lamb from the refrigerator 1 1/2 to 2 hours before you cook it so that it comes to room temp. If the meat is not at room temperature, it won't cook evenly and may still be raw inside while the outside is cooked.",
      "Arrange the oven rack, so the lamb will be in the middle of the oven.",
      "Score the fat, by making sharp shallow cuts through the fat, spaced about an inch apart.\n" +
      "\n" +
      "Rub the rack all over with more salt and pepper. Place the lamb rack bone side down (fat side up) on a roasting pan lined with foil. Wrap the exposed rib bones in a little foil so they don't burn.",
      "Place the roast in the oven at 450°F for 10 minutes (longer if roasting more than one rack), or until the surface of the roast is nicely browned.\n" +
      "\n" +
      "Then, lower the heat to 300°F. Cook for 10 to 20 minutes longer (depending on the size of the lamb rack, if you are roasting more than one rack, and how rare or well done you want your lamb). A meat thermometer inserted into the thickest part of the meat should read 125°F for rare or 135°F for medium rare.",
      "Remove from oven, cover with foil, and let rest for 15 minutes.\n" +
      "\n" +
      "Cut lamb chops away from the rack by slicing between the bones. Serve 2-3 chops per person."],
    source: "https://www.simplyrecipes.com/recipes/classic_rack_of_lamb/",
    tags:["#low carb","#gluten-free"]
  },
  {
    id:9,
    name:"Air Fryer Baked Potatoes",
    image: "assets/img/Dinner-home/3-dinner-home.jpg",
    ingredients: ["4 medium to medium-large russet potatoes (about 10 ounces each)\n" ,
      "1 tablespoon olive oil, divided \n" ,
      "1/2 teaspoon kosher salt, divided, plus more for serving\n" ,
      "Freshly ground black pepper, unsalted butter, shredded sharp cheddar, sour cream, and/or scallions, for serving (as desired)"],
    method_name:["Prepare the air fryer and potatoes:", "Air fry the potatoes:","Serve:"],
    method_details:["Preheat the air fryer to 390°F if your air fryer requires preheating. If your air fryer has multiple settings, use the “air fry” setting. \n" +
    "\n" +
    "Wash and scrub the potatoes and pat them dry with a towel.\n" +
    "\n" +
    "Poke each potato all around about 16 times with a fork. Rub each potato with 3/4 teaspoon olive oil and 1/8 teaspoon kosher salt.",
      "Place the potatoes into the basket of the air fryer, leaving about 1 inch between each potato.\n" +
      "\n" +
      "Return the basket to the fryer and cook at 390°F until the potatoes are fork tender and the skin is golden brown and crisp, 40 to 50 minutes, flipping each potato halfway through cooking.",
      "Remove the potatoes from the air fryer with a pair of tongs. Using a sharp knife, slice each potato through the top lengthwise (without cutting all the way through) to reveal the steamy interior. \n" +
      "\n" +
      "Use a fork to fluff the insides of the potato. Season and top as desired with more salt, freshly ground black pepper, unsalted butter, shredded sharp cheddar, sour cream, and/or scallions. Serve immediately while the insides are still hot and the skin is still crispy. "],
    source:"https://www.simplyrecipes.com/air-fryer-baked-potatoes-recipe-6281225",
    tags:["#vegetarian","#gluten-free"]
  },
]

export const recipesDessertHome=[
  {id: 10,
    name:"Frozen Chocolate-Covered Bananas",
    image: "assets/img/Dessert-home/1-dessert-home.jpg",
    ingredients: ["2 medium ripe bananas\n" ,
      "6 ounces dark chocolate\n" ,
      "1 1/2 teaspoons canola oil\n" ,
      "Flaky salt, sprinkles, nuts, or shredded coconut for topping, optional"],
    method_name: ["Prep the pan and water:", "Slice the bananas and chop the chocolate: ",
      "Melt the chocolate with the oil: ", "Coat the banana slices in chocolate:  ", "Freeze:"],
    method_details: ["Cover a quarter sheet pan with parchment paper. \n" +
    "\n" +
    "Add 2 inches of water to a double boiler or small saucepan and bring to a simmer over medium heat. \n" +
    "\n" +
    "Once the water is simmering, turn the heat down to low.",
      "Meanwhile, peel the bananas, trim the ends, and slice them into 1/2-inch slices. Arrange evenly spaced on the sheet pan.\n" +
      "\n" +
      "Wipe off the knife and cutting board and finely chop the chocolate.",
      "Add the chopped chocolate and canola oil to a small heatproof glass or metal bowl that fits snugly over the pan of simmering water. Place the bowl on top of the pot of water and use a flexible spatula to stir the chocolate until melted and no solids remain, about 2 minutes. \n" +
      "\n" +
      "Remove the bowl from the heat and dry the bottom of the bowl.",
      "Coat the tines of a fork in melted chocolate and set a slice of banana on top. Use a flexible spatula or spoon to spoon chocolate over the banana slice, completely covering it. \n" +
      "\n" +
      "Nudge the banana slice to the front of the fork and scrape the bottom of the fork against the side of the bowl, removing excess chocolate.\n" +
      "\n" +
      "Slide the chocolate-covered banana slice onto the parchment-covered sheet pan. Continue with the remaining banana slices, scraping the bowl as needed. \n" +
      "\n" +
      "Sprinkle with optional toppings before the chocolate hardens, if desired.",
      "Transfer the sheet pan to the freezer and freeze for 2 hours. Either serve immediately or store the chocolate-covered bananas in a freezer-safe container for up to 2 months. "],
    source: "https://www.simplyrecipes.com/frozen-chocolate-covered-bananas-recipe-6455362",
    tags:["#easy dessert","#chocolate desserts"]
  },
  {
    id:11,
    name:"Chocolate Pound Cake",
    image: "assets/img/Dessert-home/2-dessert-home.jpg",
    ingredients: ["Nonstick cooking spray, for greasing the pan\n" ,
      "1 teaspoon instant espresso powder\n" ,
      "1 1/2 cups (326g) semisweet chocolate chips, divided\n" ,
      "1/2 cup boiling water\n" ,
      "1 cup (196g) dark brown sugar, tightly packed\n" ,
      "2 sticks (226g) unsalted butter, melted\n" ,
      "2 tablespoons vegetable oil\n" ,
      "1 tablespoon vanilla extract\n" ,
      "2 large eggs, at room temperature\n" ,
      "1 1/4 cups (201g) all-purpose flour\n" ,
      "1/3 cup (35g) unsweetened natural cocoa powder\n" ,
      "1/2 teaspoon baking soda\n" ,
      "1/2 teaspoon kosher salt"],
    method_name: ["Preheat the oven and prepare the pan: ","Melt the chocolate: ","Add the wet ingredients:",
      "Mix the dry ingredients:","Combine the wet and dry ingredients:","Add chocolate chips:",
      "Bake the pound cake: ","Cool and serve the pound cake:"],
    method_details: ["Preheat the oven to 350°F. Spray an 8 1/2 x 4 1/2-inch loaf pan with nonstick cooking spray. Line the pan with parchment paper, leaving a 2-inch overhang on two of the sides. Set it aside.",
      "Place the espresso powder and 3/4 cup (163g) chocolate chips in a large bowl. Pour in the boiling water and let it sit for 5 minutes. Then, whisk together until smooth. ",
      "Whisk in the brown sugar, melted butter, vegetable oil, and vanilla until smooth. Add the eggs and whisk until fully combined.",
      "Set a sifter or fine mesh sieve over a medium bowl. Add the flour, cocoa powder, baking soda, and salt, and sift. Whisk to combine.",
      "Use a rubber spatula to fold the flour mixture into the chocolate mixture until just combined. ",
      "Fold in the remaining 3/4 cup (163g) chocolate chips. ",
      "Scrape the batter into the prepared loaf pan. Bake until the loaf has risen and cracked a bit on the top, 65 to 75 minutes. A toothpick inserted into the center should come out with just a few moist crumbs, but no wet batter.",
      "Remove the pan from the oven and set it on a wire rack to cool for about 1 hour. Use the parchment sling to lift the loaf out. Slice and serve at room temperature."],
    source: "https://www.simplyrecipes.com/chocolate-pound-cake-recipe-5218186",
    tags:["#easy dessert","#chocolate cakes"]
  },
  {
    id:12,
    name:"Grandma's Oatmeal Cookies",
    image: "assets/img/Dessert-home/3-dessert-home.jpg",
    ingredients: ["1 cup shortening\n" ,
      "1 cup brown sugar\n" ,
      "1 cup white sugar\n" ,
      "2 large eggs, well beaten\n" ,
      "1 tablespoon vanilla extract\n" ,
      "1 1/2 cups all-purpose flour\n" ,
      "1 teaspoon kosher salt\n" ,
      "1 teaspoon baking soda\n" ,
      "1 tablespoon cinnamon\n" ,
      "1 tablespoon water\n" ,
      "1 cup raisins, optional\n" ,
      "3/4 cup chopped walnuts (use 1/2 cup if using raisins)\n" ,
      "3 cups old-fashioned rolled oats (we use Quaker Quick or Old Fashioned. Do NOT use instant.)"],
    method_name: ["Preheat the oven:","Make the cookie dough:","Bake:","Cool completely:"],
    method_details:["Preheat the oven to 350°F.",
      "Beat together the shortening, brown sugar, and white sugar. Add the eggs and vanilla extract, and beat well.\n" +
      "\n" +
      "Whisk together the flour, salt, baking soda, and cinnamon. Add to sugar and egg mixture and mix well. Add a tablespoon of water. Add raisins (if using) and nuts. Add oats last.",
      "Spoon out by heaping tablespoonfuls on to greased cookie sheets. Bake at 350°F. Bake for 10 minutes. Remove to a wire rack.",
      "Cookies will keep for several days in an airtight container on the counter."],
    source:"https://www.simplyrecipes.com/recipes/grandmas_oatmeal_cookies/",
    tags:["#quick desserts"]
  },
]

export const recipesBreakfast =[
  {
    id:13,
    name:"Apple Cinnamon Rolls",
    image: "assets/img/Breakfast/1-breakfast.jpg",
    ingredients: ["For the dough\n:" ,
      "\n" +
      "3/4 cup (180g) whole milk\n" ,
      "1/3 cup (67g) sugar\n" ,
      "2 1/4 teaspoons active dry yeast\n" ,
      "1 egg, room temperature\n" ,
      "1 egg yolk, room temperature\n" ,
      "3 1/4 cups (390g) all-purpose flour\n" ,
      "1/4 teaspoon salt\n" ,
      "6 tablespoons (85g) unsalted butter, room temperature \n" ,
      "Cooking spray, for greasing the bowl\n" ,
      "‎",
      "For the filling\n:" ,
      "\n" +
      "2/3 cup (140g) dark brown sugar\n" ,
      "1 tablespoon ground cinnamon\n" ,
      "1/4 cup (57g) butter, room temperature\n" ,
      "2 medium apples, peeled and chopped into 1/2-inch pieces\n" ,
      "‎",
      "For the frosting\n:" ,
      "\n" +
      "4 ounces (113g) cream cheese, room temperature\n" ,
      "1/4 cup (57g) unsalted butter, room temperature\n" ,
      "2 tablespoons maple syrup\n" ,
      "1 teaspoon vanilla extract\n" ,
      "3/4 cup (98g) powdered sugar"],
    method_name: ["Make the dough:","Let the dough rise:","Roll out the dough and add the filling:","Form the cinnamon rolls and let rise:","Preheat the oven to 350°F.","Bake:","Make the frosting:","Top with frosting:"],
    method_details:["Heat the milk in the microwave just until warm to the touch (about 110°F), about 30 seconds. Add the milk, sugar, and yeast to the bowl of a stand mixer fitted with a dough hook. Let the mixture sit until the yeast becomes foamy, about 5 minutes. \n" +
    "\n" +
    "Add the egg and egg yolk and mix until combined. Add the flour and salt and continue to mix on medium speed until the ingredients come together into a ball of dough. Mix in the butter 2 tablespoons at a time, waiting until each addition is incorporated before adding more. \n" +
    "\n" +
    "Once all of the butter is incorporated, knead the dough on medium speed for 8 minutes. The dough should have a smooth, shiny surface.",
      "Transfer the ball of dough to a greased bowl and cover the bowl with plastic wrap. Let the dough rise in a warm place until it has doubled in size, 1 to 2 hours.",
      "On a floured surface, roll out the dough into a 9x14 inch rectangle.\n" +
      "\n" +
      "Mix the brown sugar and cinnamon together in a small bowl. \n" +
      "\n" +
      "Use a pastry brush to spread the softened butter evenly over the rectangle of dough, leaving a 1/2-inch border around the edges.  Sprinkle the brown sugar mixture on top. Top with the chopped apples.",
      "Tightly roll up the dough, starting at the shorter 9-inch side. Using a sharp knife or a piece of unflavored dental floss, cut the log of dough into nine 1-inch pieces.\n" +
      "\n" +
      "Transfer the cinnamon rolls to a greased 9x9 baking dish so the cut side is facing up. Cover with plastic wrap or a dish towel. Put it in a warm place and let the dough rise again until they look pillowy and are touching one another in the dish, 30 minutes to an hour.",
      "Once the dough has been rising for 20 minutes, preheat the oven.",
      "Bake the cinnamon rolls until they are golden brown, about 25 minutes. A toothpick inserted into the center roll should come out clean.",
      "Make the frosting while the cinnamon rolls are baking. Using a hand mixer with beater attachments, beat the cream cheese and butter together on medium speed until well-mixed and creamy. Add the maple syrup and vanilla and mix until incorporated. \n" +
      "\n" +
      "Add the sugar 1/4 cup at a time, beating after each addition, until all of the sugar is incorporated.",
      "Let the cinnamon rolls cool for 10 minutes, then spread the frosting on top and serve warm."],
    source:"https://www.simplyrecipes.com/apple-cinnamon-rolls-recipe-6455540",
    tags:["#apple"]
  },
  {
    id:14,
    name:"Lemon Scones",
    image: "assets/img/Breakfast/2-breakfast.jpg",
    ingredients: ["For the lemon scones:\n" ,
      "\n" ,
      "Finely grated zest of 3 lemons\n" ,
      "1/2 cup (100g) sugar\n" ,
      "3 cups (360g) all-purpose flour\n" ,
      "1 tablespoon baking powder\n" ,
      "1/2 teaspoon kosher salt\n" ,
      "1/4 teaspoon baking soda\n" ,
      "1 cup (227g) unsalted butter, cold, cut into 1/2-inch cubes\n" ,
      "1 large egg, cold\n" ,
      "2/3 cup (120ml) buttermilk, plus extra for brushing the scones\n" ,
      "‎",
      "For the lemon glaze:\n" ,
      "\n" ,
      "1/2 cup (57g) powdered sugar\n" ,
      "2 tablespoons lemon juice"],
    method_name: ["Preheat the oven to 425°F. ","Mix the dry ingredients:","Cut in the butter:","Add the wet ingredients:","Shape and divide:","Chill:","Bake:","Make the lemon glaze:","Glaze the scones:"],
    method_details:["Line a baking sheet with parchment paper and set aside until ready to use.",
      "In a large bowl, use your fingertips to rub the lemon zest into the sugar, infusing the sugar with the oils from the lemon zest. \n" +
      "\n" +
      "Add the flour, baking powder, salt, and baking soda and whisk to combine.",
      "Add the cold, cubed butter to the flour mixture, tossing with your hands to distribute and coat the butter in flour. Using a pastry cutter, work the butter into the flour mixture until the mixture forms coarse crumbs and the butter is in pieces no larger than a pea.\n" +
      "\n" +
      "If you don’t have a pastry blender, use the tips of your fingers to squish the butter into the flour, pressing and breaking the butter into pea-sized pieces, but flat, not in chunks.",
      "Measure the buttermilk in a liquid measuring cup, then whisk in the egg. Pour the buttermilk mixture into the flour mixture. Gently fold the mixture together with a rubber spatula or plastic dough scraper until it forms a cohesive, but crumbly mass. Don't overmix. It's okay if the dough is slightly lumpy or a few dry bits remain.",
      "Transfer the dough to a lightly floured surface. Use your hands to gently knead the dough a few times, then press the dough into an 8-inch diameter disk about 1 1/2 inches thick. Use a long knife or a bench scraper to cut the disk into 8 equal-sized wedges.\n" +
      "\n" +
      "Place the wedges on the prepared baking sheet, spacing them at least 1-inch apart. Use a pastry brush to brush the tops of the scones lightly with buttermilk.",
      "Place the baking tray in the freezer and chill for 15 minutes.",
      "Bake the scones in the center of the oven until golden on top and browned underneath, about 20 minutes. Allow the scones to cool completely on the pan before adding the lemon glaze.",
      "While the scones cool, make the lemon glaze. In a small bowl, whisk together the powdered sugar and lemon juice until the glaze is smooth.",
      "Use a spoon to drizzle the scones with the lemon glaze. Allow the glaze to set for 10 minutes, then serve."],
    source:"https://www.simplyrecipes.com/lemon-scones-recipe-5272350",
    tags:["#easy breakfast"]
  },
  {
    id:15,
    name:"Spinach and Artichoke Quiche",
    image: "assets/img/Breakfast/3-breakfast.jpg",
    ingredients: ["Crust:\n" ,
      "\n" +
      "1 cup all-purpose flour\n" ,
      "1/2 teaspoon salt\n" ,
      "1/2 cup (1 stick, 4 ounces, 8 tablespoons) butter\n" ,
      "2 to 2 1/2 tablespoons water\n" ,
      "‎",
      "Quiche:\n" ,
      "\n" +
      "1/2 cup, packed, finely chopped artichoke hearts (cooked fresh or canned artichoke hearts packed in water)\n" ,
      "6 ounces cooked spinach (if using frozen, thaw first), squeezed to remove excess water (wrap in clean tea towel or several layers of paper towels and squeeze), finely chopped\n" ,
      "1 tablespoon butter\n" ,
      "1/2 cup minced shallots\n" ,
      "2 teaspoons grated lemon zest\n" ,
      "4 large eggs\n" ,
      "1 cup milk\n" ,
      "1/2 cup heavy whipping cream\n" ,
      "4 ounces goat cheese\n" ,
      "1 teaspoon salt\n" ,
      "1/4 teaspoon black pepper\n" ,
      "2 tablespoons minced chives or green onion greens"],
    method_name: ["Make the dough for the quiche crust:","Roll out the dough:","Cook the shallots:","Prepare the filling:","Bake the quiche:","Let cool before serving:"],
    method_details:["In a medium bowl, whisk together the flour and salt.\n" +
    "\n" +
    "Cut the butter into cubes and use your (clean) hands to work the butter into the flour until you have a mixture that looks like a coarse meal with pieces of butter no bigger than a pea.\n" +
    "\n" +
    "Sprinkle water onto the flour mixture a little at a time, and work the dough with your hands until the dough can be formed into a ball.\n" +
    "\n" +
    "Flatten the ball into a disk and wrap with plastic wrap. Chill for at least 1 hour.",
      "When you are ready to roll out the dough, remove the disk from the refrigerator and let come to room temp for 10 minutes.\n" +
      "\n" +
      "Roll out the dough on a lightly floured surface to a diameter 2 inches wider than your pan (I used a 9-inch pie pan). Drape the rolled out dough over the pie or tart pan and press the dough into the sides of the pan. Trim and crimp the edges.\n" +
      "\n" +
      "Place in freezer for 30 minutes to 1 hour.",
      "Melt butter in a small saucepan on medium heat. Add the minced shallots and cook 3 to 4 minutes until translucent. Remove from heat.",
      "Preheat oven to 375°F. Beat the eggs in a large bowl. Add the goat cheese and whisk until smooth. Whisk in the milk, cream, salt, pepper, chopped spinach, chopped artichokes, the cooked shallots, lemon zest, and the chives.",
      "Pour filling into the frozen pie crust. (If you are using a tart pan with a removable bottom, you may want to put the pan on a foil lined or rimmed sheet pan.)\n" +
      "\n" +
      "Place in oven. Bake at 375°F for 10 minutes, then reduce the heat to 350°F and cook for 30 minutes, or until the center of the quiche has set.",
      "Remove from oven and let sit and cool to room temperature before slicing and serving."],
    source:"https://www.simplyrecipes.com/recipes/spinach_and_artichoke_quiche/",
    tags:["#breakfast","#quiches"]
  },
  {
    id:16,
    name:"Simple Southwestern Breakfast Pizza",
    image: "assets/img/Breakfast/4-breakfast.jpg",
    ingredients: ["3 pork sausage patties\n" ,
      "1 large flour tortilla\n" ,
      "½ cup whole-milk plain Greek yogurt, divided\n" ,
      "⅓ cup salsa\n" ,
      "1 medium egg\n" ,
      "4 slices avocado\n" ,
      "1 tablespoon chopped fresh cilantro, or to taste\n" ,
      "1 tablespoon poblano peppers (about 1 1/4 pounds)\n" ,
      "1 pinch freshly ground black pepper to taste"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:"],
    method_details:["Preheat the oven to 350 degrees F (175 degrees C).",
      "Crumble sausage into a large skillet and cook until browned over medium-high heat, about 5 minutes. Drain grease and remove browned pork to a plate. Clean out skillet.",
      "Place flour tortilla into the skillet. Sprinkle 1/2 of the asadero cheese onto the tortilla and spread salsa over the cheese. Top with sausage crumbles and remaining cheese.",
      "Crack open the egg and carefully add to the middle of the pizza; cook for 12 minutes.",
      "Top pizza with avocado slices, chopped cilantro, crema con sal, and black pepper."],
    source:"https://www.allrecipes.com/recipe/281515/simple-southwestern-breakfast-pizza/",
    tags:["#breakfast"]
  },
  {
    id:17,
    name:"Apple Bread Pudding",
    image: "assets/img/Breakfast/5-breakfast.jpg",
    ingredients: ["For the bread pudding:\n" ,
      "\n" +
      "1 pound brioche or challah bread, cut into 1-inch cubes\n" ,
      "3 large apples, peeled and chopped into 1/2-inch pieces\n" ,
      "1/2 cup light brown sugar\n" ,
      "4 tablespoons unsalted butter\n" ,
      "1 teaspoon vanilla extract\n" ,
      "1 teaspoon cinnamon\n" ,
      "1/4 teaspoon salt\n" ,
      "2 1/2 cups whole milk\n" ,
      "4 large eggs\n" ,
      "1/2 cup sugar\n" ,
      "‎",
      "For the bourbon sauce:\n" ,
      "\n" +
      "1 cup light brown sugar\n" ,
      "1/2 cup unsalted butter\n" ,
      "1/4 cup heavy cream\n" ,
      "3 tablespoons bourbon"],
    method_name: ["Preheat the oven to 350°F.","Toast the bread:","Make the apple filling:","Assemble the bread pudding:","Bake:","Make the sauce and serve:"],
    method_details:["Grease a 9 x 13-inch casserole dish.",
      "Spread the cubes of bread out evenly on a baking sheet. Bake in the oven until lightly toasted, about 10 minutes.",
      "Meanwhile, add the diced apples, brown sugar, butter, vanilla, cinnamon, and salt to a medium saucepan over medium heat. Stir and cook until the apples are soft and the sugar is melted, about 5 minutes. Remove from heat and set aside.",
      "In a large bowl, whisk together the milk, eggs, and sugar.\n" +
      "\n" +
      "Add the bread cubes to the prepared casserole dish. Pour the apple filling on top. Using a large spoon or rubber spatula, toss the bread chunks and apple filling together until evenly distributed. Pour the egg and milk mixture on top. \n" +
      "\n" +
      "Let sit at room temperature for 15 minutes before baking so that the bread can soak up most of the liquid.",
      "Bake until the liquid has set and the bread on the surface of the casserole is golden brown, about 40 minutes. When the bread pudding is done baking, a sharp knife or toothpick inserted in the center should come out clean.",
      "While the bread pudding is baking, prepare the sauce. Combine the brown sugar and butter in a small saucepan over medium heat. Stir until the brown sugar is melted, 4 to 5 minutes. \n" +
      "\n" +
      "Add the heavy cream and continue to stir the mixture over heat for 1 to 2 minutes. Stir in the bourbon and let the sauce simmer for 1 minute. Remove from heat. As the sauce cools, mix it every 1 to 2 minutes to prevent the butter from separating.\n" +
      "\n" +
      "Pour the sauce over the bread pudding and serve warm."],
    source:"https://www.simplyrecipes.com/apple-bread-pudding-recipe-6500773",
    tags:["#apple pudding"]
  },
  {
    id:18,
    name:"Best Buckwheat Pancakes",
    image: "assets/img/Breakfast/6-breakfast.jpg",
    ingredients: ["1 cup buttermilk\n" ,
      "1 egg\n" ,
      "\n" +
      "3 tablespoons butter, melted\n" ,
      "\n" +
      "6 tablespoons all-purpose flour\n" ,
      "\n" +
      "6 tablespoons buckwheat flour\n" ,
      "\n" +
      "1 teaspoon white sugar\n" ,
      "\n" +
      "½ teaspoon salt\n" ,
      "\n" +
      "1 teaspoon baking soda\n" ,
      "\n" +
      "3 tablespoons butter"],
    method_name: ["Step 1:","Step 2:","Step 3:"],
    method_details:["In a medium bowl, whisk together the buttermilk, egg, and melted butter.",
      "In another bowl, mix together white flour, buckwheat flour, sugar, salt and baking soda. Pour the dry ingredients into the egg-mixture. Stir until the two mixtures are just incorporated.",
      "Heat a griddle or large frying pan to medium-hot, and place 1 tablespoon of butter, margarine or oil into it. Let the butter melt before spooning the batter into the frying pan, form 4 inch pancakes out of the batter. Once bubbles form on the top of the pancakes, flip them over, and cook them on the other side for about 3 minutes. Continue with this process until all of the batter has been made into pancakes."],
    source:"https://www.allrecipes.com/recipe/14096/best-buckwheat-pancakes/",
    tags:["#pancakes","#breakfast"]
  },
  {
    id:19,
    name:"Blueberry Lemon Breakfast Quinoa",
    image: "assets/img/Breakfast/7-breakfast.jpg",
    ingredients: ["1 cup quinoa\n" ,
      "\n" +
      "2 cups nonfat milk\n" ,
      "\n" +
      "1 pinch salt\n" ,
      "\n" +
      "3 tablespoons maple syrup\n" ,
      "\n" +
      "½ lemon, zested\n" ,
      "\n" +
      "1 cup blueberries\n" ,
      "\n" +
      "2 teaspoons flax seed"],
    method_name: ["Step 1:","Step 2:","Step 3:"],
    method_details:["Rinse quinoa in a fine strainer with cold water to remove bitterness until water runs clear and is no longer frothy.",
      "Heat milk in a saucepan over medium heat until warm, 2 to 3 minutes. Stir quinoa and salt into the milk; simmer over medium-low heat until much of the liquid has been absorbed, about 20 minutes. Remove saucepan from heat. Stir maple syrup and lemon zest into the quinoa mixture. Gently fold blueberries into the mixture.",
      "Divide quinoa mixture between 2 bowls; top each with 1 teaspoon flax seed to serve."],
    source:"https://www.allrecipes.com/recipe/230830/blueberry-lemon-breakfast-quinoa/",
    tags:["#blueberry","#breakfast"]
  },
  {
    id:20,
    name:"Sunshine Morning Muesli",
    image: "assets/img/Breakfast/8-breakfast.jpg",
    ingredients: ["¼ cup rolled oats\n" ,
      "\n" +
      "⅛ cup oat bran\n" ,
      "\n" +
      "1 tablespoon golden raisins\n" ,
      "\n" +
      "3 dried apricots, chopped\n" ,
      "\n" +
      "1 pinch ground cinnamon\n" ,
      "\n" +
      "½ cup plain yogurt\n" ,
      "\n" +
      "¼ cup milk, or as needed\n" ,
      "\n" +
      "1 teaspoon chopped walnuts"],
    method_name: ["Step 1:","Step 2:"],
    method_details:["In a medium bowl, mix together the oats, oat bran, raisins, apricots, and cinnamon. Stir in yogurt, cover, and refrigerate overnight.",
      "In the morning, pour the milk over the muesli, and sprinkle with walnuts. You may wish to add more milk depending on your preference."],
    source:"https://www.allrecipes.com/recipe/78092/sunshine-morning-muesli/",
    tags:["#cereal","#breakfast"]
  },
  {
    id:21,
    name:"Oyakodon (Japanese Chicken and Egg Rice Bowl)",
    image: "assets/img/Breakfast/9-breakfast.jfif",
    ingredients: ["1 tablespoon olive oil\n" ,
      "\n" +
      "4 skinless, boneless chicken thighs, cut into small pieces\n" ,
      "\n" +
      "1 onion, cut in half and sliced\n" ,
      "\n" +
      "2 cups dashi stock, made with dashi powder\n" ,
      "\n" +
      "¼ cup soy sauce\n" ,
      "\n" +
      "3 tablespoons mirin (Japanese rice wine)\n" ,
      "\n" +
      "3 tablespoons brown sugar\n" ,
      "\n" +
      "4 large eggs\n" ,
      "\n" +
      "4 cups hot cooked white rice"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:"],
    method_details:["Heat oil in a large skillet over medium heat. Add chicken and cook until beginning to brown, about 5 minutes. Add onion; cook and stir until onion is translucent, about 5 minutes.",
      "Pour in stock, then whisk in soy sauce, mirin, and brown sugar; stir until sugar dissolves. Bring to a boil, then lower heat and simmer until slightly reduced, about 10 minutes.",
      "Whisk eggs in a bowl until well-beaten, then pour into the hot stock mixture. Cover the skillet, reduce the heat, and steam until egg is cooked, about 5 minutes. Remove from the heat.",
      "Divide rice among 4 deep soup bowls and top with equal amounts of the soup mixture."],
    source:"https://www.allrecipes.com/recipe/128589/oyakodon-japanese-chicken-and-egg-rice-bowl/",
    tags:["#chicken","#breakfast"]
  },
  {
    id:22,
    name:"Greek Yogurt Oatmeal",
    image: "assets/img/Breakfast/10-breakfast.jpg",
    ingredients: ["½ cup rolled oats\n" ,
      "½ banana, sliced\n" ,
      "½ teaspoon ground cinnamon (Optional)\n" ,
      "1 pinch salt\n" ,
      "1 cup water\n" ,
      "¼ cup Greek yogurt\n" ,
      "2 tablespoons strawberry jam\n" ,
      "1 tablespoon peanut butter"],
    method_name: ["Step 1:","Step 2:"],
    method_details:["Combine oats, banana, cinnamon, and salt in a microwave-safe bowl; add water and stir. Cook in microwave until water is absorbed, 2 to 3 minutes. Stir to evenly distribute cinnamon; let stand until slightly cooled, about 3 minutes.",
      "Spoon Greek yogurt, strawberry jam, and peanut butter over oatmeal; stir.\n"],
    source:"https://www.allrecipes.com/recipe/244287/greek-yogurt-oatmeal/",
    tags:["#oatmeal","#breakfast"]
  },
]
export const recipesLunch=[
  {
    id:23,
    name:"Tortellini Salad",
    image: "assets/img/Lunch/1-lunch.jpg",
    ingredients: ["For the dressing:\n" ,
      "\n" +
      "1/3 cup extra virgin olive oil\n" ,
      "4 tablespoons fresh lemon juice (from about 2 lemons)\n" ,
      "2 tablespoons red wine vinegar\n" ,
      "2 cloves garlic, grated\n" ,
      "1 teaspoon dried oregano\n" ,
      "1/4 teaspoon salt\n" ,
      "1/4 teaspoon freshly ground black pepper\n" ,
      "1 small red onion, finely chopped (about 1 cup)\n" ,
      "‎",
      "For the salad:\n" ,
      "\n" +
      "2 (10-ounce) packages tortellini (any kind)\n" ,
      "1 small yellow bell pepper, chopped (about 1 cup)\n" ,
      "1 English cucumber, quartered lengthwise and thinly sliced (about 3 cups)\n" ,
      "3/4 cup pitted and sliced kalamata olives\n" ,
      "1 (14-ounce) can artichoke hearts, drained and roughly chopped\n" ,
      "8 ounces turkey summer sausage, quartered lengthwise and sliced (about 2 cups)\n" ,
      "6 ounces crumbled feta cheese\n" ,
      "1/2 cup finely chopped fresh basil leaves"],
    method_name: ["Boil water: ","Meanwhile, make the dressing:","Cook the tortellini:","Assemble the salad:","Chill before serving: "],
    method_details:["Bring a large pot of salted water to a boil over high heat.",
      "In a large bowl, whisk together the olive oil, lemon juice, vinegar, garlic, oregano, salt, and black pepper. Stir in the red onion. Set aside.",
      "Once the water comes up to a boil, cook the tortellini until al dente following package directions. Drain into a colander set in the sink. Rinse with cold running water until the pasta cools to room temperature. Drain well.",
      "Add the cooled tortellini, bell peppers, cucumbers, kalamata olives, artichokes, sausage, feta, and basil to the dressing. Toss well to combine. Taste and season with salt and black pepper.",
      "Cover the bowl with plastic wrap and refrigerate for at least 30 minutes before serving to chill and let the flavors come together. Toss together once more before serving."],
    source:"https://www.simplyrecipes.com/tortellini-salad-recipe-6281123",
    tags:["#lunch","#salad"]
  },
  {
    id:24,
    name:"Spicy Grilled Cheese Sandwich",
    image: "assets/img/Lunch/2-lunch.jfif",
    ingredients: ["2 tablespoons butter or margarine\n" ,
      "\n" +
      "4 slices white bread\n" ,
      "\n" +
      "2 slices American cheese\n" ,
      "\n" +
      "1 roma (plum) tomato, thinly sliced\n" ,
      "\n" +
      "¼ small onion, chopped\n" ,
      "\n" +
      "1 jalapeno pepper, chopped"],
    method_name: ["Step 1:"],
    method_details:["Heat a large skillet over low heat. Spread butter or margarine onto one side of two slices of bread. Place both pieces buttered side down in the skillet. Lay a slice of cheese on each one, and top with slices of tomato, onion and jalapeno. Butter one side of the remaining slices of bread, and place on top buttered side up. When the bottom of the sandwiches are toasted, flip and fry until brown on the other side."],
    source:"https://www.allrecipes.com/recipe/85901/spicy-grilled-cheese-sandwich/",
    tags:["#lunch","#sandwich"]
  },
  {
    id:25,
    name:"Old Bay Shrimp Rolls",
    image: "assets/img/Lunch/3-lunch.jpg",
    ingredients: ["For the crispy shallots:\n" ,
      "\n" +
      "2 cups thinly sliced shallots (from 3-4 large shallots)\n" ,
      "1 1/4 cups  vegetable or canola oil\n" ,
      "1/4 teaspoon kosher salt, divided\n" ,
      "‎",
      "For the lemony chive mayo:\n" ,
      "\n" +
      "1/2 cup mayonnaise\n" ,
      "2 tablespoons lemon juice\n" ,
      "2 tablespoons minced chives, plus more for garnish\n" ,
      "1 teaspoon grated garlic\n" ,
      "1/4 teaspoon cracked black pepper\n" ,
      "1/2 teaspoon kosher salt\n" ,
      "‎",
      "For the shrimp rolls:\n" ,
      "\n" +
      "1 pound large (26/30 count) shrimp, peeled, deveined, and tails removed\n" ,
      "1 tablespoon olive oil\n" ,
      "1 tablespoon Old Bay seasoning\n" ,
      "2 tablespoons softened, unsalted butter\n" ,
      "4 top-split (or “New England-style”) hot dog buns\n" ,
      "1 head of butter or Bibb lettuce"],
    method_name: ["Fry the crispy shallots:","Drain the shallots:","Make the lemony chive mayo:","Season the shrimp:",
      "Sear the shrimp:","Toast the buns:","Assemble the shrimp rolls:"],
    method_details:["Line a plate with paper towels before you begin frying the shallots.\n" +
    "\n" +
    "Add the thinly sliced shallots and oil to a small saucepan and place over medium heat. Bring the shallots and oil to a boil, then reduce heat to medium-low. Let the oil simmer for 15-20 minutes, stirring every 2-3 minutes, or until the bubbling fades and the shallots begin to turn a pale golden color.",
      "Once the shallots start to brown, stir constantly for about 1 minute or until they’re uniformly golden. Use a slotted spoon to remove them onto a paper towel-lined plate and spread them out evenly. Sprinkle with kosher salt and set aside.",
      "In a small bowl, whisk together the mayonnaise, lemon juice, chives, garlic, black pepper, and kosher salt until smooth. Reserve until ready to assemble the shrimp rolls.",
      "Pat the shrimp completely dry with paper towels and add to a large mixing bowl. Drizzle with olive oil and sprinkle with the Old Bay seasoning. Use your hands or a spoon to make sure each shrimp is evenly coated.",
      "Place a large nonstick skillet over high heat. When hot, add the seasoned shrimp in one even layer, without any additional oil. Sear the shrimp for 1 minute, or until they’ve begun to turn pink at the edges. \n" +
      "\n" +
      "Use tongs to turn them and sear the second side for another minute, or until the shrimp are just cooked through and curled. \n" +
      "\n" +
      "Remove the shrimp to a plate and reserve until ready to assemble.",
      "Wipe out the skillet and place over medium heat. Spread the softened butter on the outside edges of the top-split hot dog buns. Place the buns in the skillet and toast for 2-3 minutes on each side, or until golden brown and crisp. Remove to a serving platter.",
      "Line the inside of each toasted bun with 2 leaves of butter lettuce and top each with 1/4 of the seared shrimp. Drizzle with the lemony chive mayo, and sprinkle generously with the crispy shallots and reserved chives. "],
    source:"https://www.simplyrecipes.com/old-bay-shrimp-rolls-recipe-5547714",
    tags:["#lunch","#shrimp"]
  },
  {
    id:26,
    name:"Banh Mi",
    image: "assets/img/Lunch/4-lunch.jpg",
    ingredients: ["½ cup rice vinegar\n" ,
      "\n" +
      "¼ cup white sugar\n" ,
      "\n" +
      "¼ cup water\n" ,
      "\n" +
      "¼ cup matchstick-cut carrots\n" ,
      "\n" +
      "¼ cup peeled and matchstick-cut daikon radish\n" ,
      "\n" +
      "¼ cup thinly sliced white onion\n" ,
      "\n" +
      "1 skinless, boneless chicken breast half\n" ,
      "\n" +
      "1 pinch garlic salt, or to taste\n" ,
      "\n" +
      "ground black pepper to taste\n" ,
      "\n" +
      "1 (12 inch) French baguette\n" ,
      "\n" +
      "4 tablespoons mayonnaise\n" ,
      "\n" +
      "¼ cup thinly sliced cucumber\n" ,
      "\n" +
      "1 tablespoon fresh cilantro leaves\n" ,
      "\n" +
      "1 small jalapeno pepper, cut into 1/16-inch-thick matchsticks\n" ,
      "\n" +
      "1 wedge lime"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:","Step 6:","Step 7:","Step 8:","Step 9:","Step 10:","Step 11:"],
    method_details:["Combine rice vinegar, sugar, and water in a saucepan. Bring to a boil over medium heat, stirring until sugar has dissolved, about 1 minute. Allow the mixture to cool.",
      "Place carrot, radish, and onion in a bowl. Pour in cooled vinegar mixture and let marinate at least 30 minutes.",
      "While vegetables marinate, set an oven rack about 6 inches from the heat source and preheat the broiler. Lightly oil a slotted broiler pan.",
      "Sprinkle chicken breast with garlic salt and pepper.",
      "Place chicken on the prepared pan and broil, turning once, until browned and no longer pink in the center, about 6 minutes per side.",
      "Place chicken on a cutting board. Cut into bite-sized pieces.",
      "Slice baguette in half lengthwise. Pull out the soft center of the bread, leaving a cavity for the fillings.",
      "Lightly toast baguette under the broiler, 2 to 3 minutes.",
      "Drain off excess vinegar mixture after vegetables have marinated.",
      "To assemble the sandwich, spread each half of toasted baguette with mayonnaise. Layer chicken on the bottom half of the bread. Top with cucumber, drained pickled vegetables, cilantro, and jalapeno. Squeeze lime wedge over fillings and cover with top half of baguette.",
      "Cut into two 6-inch sandwiches to serve."],
    source:"https://www.allrecipes.com/recipe/187342/banh-mi/",
    tags:["#lunch","#chicken"]
  },
  {
    id:27,
    name:"Coconut Carrot Soup with Cumin Oil",
    image: "assets/img/Lunch/5-lunch.jpg",
    ingredients: ["For the coconut carrot soup:\n" ,
      "\n" +
      "3 tablespoons canola oil\n" ,
      "1 medium white or yellow onion, finely diced\n" ,
      "12 ounces (3 cups) carrots, cut into 1/8-inch rounds\n" ,
      "1 teaspoon kosher salt, divided plus more to taste\n" ,
      "1/8 teaspoon freshly ground black pepper, plus more to taste\n" ,
      "1 tablespoon minced fresh ginger\n" ,
      "1 tablespoon minced garlic\n" ,
      "1 (13.5 ounce) can full-fat coconut milk\n" ,
      "2 cups vegetable stock, plus more if needed\n" ,
      "2 teaspoons garam masala\n" ,
      "1/2 teaspoon mild chili powder, such as Kashmiri chili powder\n" ,
      "1/4 cup loosely packed cilantro, chopped, for garnish\n" ,
      "‎",
      "For the cumin oil:\n" ,
      "\n" +
      "2 tablespoons neutral oil, such as canola\n" ,
      "1 teaspoon cumin seeds\n" ,
      "1 clove garlic, thinly sliced"],
    method_name: ["Cook the aromatics:","Add the ginger and garlic:","Simmer the soup:","Blend the soup:","Make the cumin oil:","Serve the soup:"],
    method_details:["In a medium pot or Dutch oven, heat the 3 tablespoons of canola oil over medium heat. Add the onions and carrots, and cook for 10 to 15 minutes, occasionally stirring, until the onions are soft and translucent and a fork easily pierces through carrots. Season with 1/2 teaspoon salt and the black pepper.",
      "Turn the heat down to medium-low and stir in ginger and garlic. Cook for 2 to 3 minutes until ginger and garlic are fragrant and slightly softened.",
      "Stir in coconut milk, vegetable stock, garam masala, chili powder, and another 1/2 teaspoon salt. Increase the heat to medium-high and bring the soup to a boil, then reduce heat to medium-low to simmer for 10 minutes, stirring occasionally.",
      "Remove soup from the heat and using a handheld immersion bender, carefully blend directly in the pot until smooth. Return the blended soup to the pot and adjust seasoning to taste with salt and black pepper. If the soup is too thick for your liking, you can thin it out with more stock or water. Keep it warm on the stove while you prepare the cumin oil.",
      "In a small tadka pan or saucepan, heat the 2 tablespoons of neutral oil over medium heat. Once the oil begins to glisten and ripple, add the cumin seeds. If the oil is smoking, turn the heat down before adding the cumin to prevent them from burning. Once the cumin seeds start to sizzle, add the sliced garlic.\n" +
      "\n" +
      "Cook the cumin and garlic, occasionally swirling the pan until the garlic just begins to turn golden brown.",
      "Divide the soup among serving bowls and top each with 1/2 to 1 teaspoon of the cumin oil. Garnish with fresh cilantro and enjoy alongside naan or crusty bread."],
    source:"https://www.simplyrecipes.com/coconut-carrot-soup-with-cumin-oil-recipe-5211578",
    tags:["#lunch","#vegetarian"]
  },
  {
    id:28,
    name:"Grilled Chicken Salad Sandwich",
    image: "assets/img/Lunch/6-lunch.jpg",
    ingredients: ["1 cup mayonnaise\n" ,
      "⅛ teaspoon ground black pepper\n" ,
      "⅛ teaspoon garlic powder\n" ,
      "⅛ teaspoon celery salt\n" ,
      "4 cups chopped leftover grilled chicken\n" ,
      "2 celery stalks, sliced\n" ,
      "½ cup sweetened dried cranberries\n" ,
      "⅔ cup salted cashews\n" ,
      "8 slices bread, toasted\n" ,
      "4 tablespoons mayonnaise\n" ,
      "4 large red leaf lettuce leaves\n" ,
      "1 ripe tomato, sliced"],
    method_name: ["Step 1: ","Step 2: "],
    method_details:["Whisk together 1 cup of mayonnaise, pepper, garlic powder, and celery salt until combined. Combine the chicken, celery, cranberries, and cashews in a large bowl. Pour the mayonnaise mixture over the chicken mixture and stir until evenly combined.",
      "Spread 1/2 tablespoon of mayonnaise on each slice of toasted bread. Divide the chicken salad between four of the slices of toast; top each with a lettuce leaf and a slice of tomato. Complete each sandwich with the remaining toast slices."],
    source:"https://www.allrecipes.com/recipe/143587/grilled-chicken-salad-sandwich/",
    tags:["#lunch","#sandwich"]
  },
  {
    id:29,
    name:"BLT Wraps",
    image: "assets/img/Lunch/7-lunch.jpg",
    ingredients: ["1 pound bacon\n" ,
      "1 head butter lettuce, leaves roughly chopped\n" ,
      "3 small ripe tomatoes, sliced\n" ,
      "6 large burrito-size tortilla wraps\n" ,
      "‎",
      "For the easy chive mayo:\n" ,
      "\n" +
      "1/2 cup mayo\n" ,
      "2 tablespoons thinly sliced fresh chives\n" ,
      "1 tablespoon lemon juice\n" ,
      "1/2 teaspoon garlic powder\n" ,
      "1/8 teaspoon kosher salt"],
    method_name: ["Prep the oven: ","Cook the bacon: ","Make the chive mayo:","Assemble the wraps:"],
    method_details:["Preheat oven to 375˚F.",
      "Arrange the bacon on a few baking sheets with foil or elevate them on a wire rack, making sure the bacon is not overlapping.\n" +
      "\n" +
      "Bake the bacon for 15-20 minutes until it’s browned and crispy. Then remove the bacon from the baking sheet and let it drain on a few paper towels.",
      "In a medium bowl combine the mayo, chives, lemon juice, garlic powder, and salt. Set aside.",
      "Spread about 2 tablespoons of the chive mayo onto your wrap. Then layer with butter lettuce, tomato slices, followed by 3-4 strips of crispy bacon. \n" +
      "\n" +
      "Fold the edges over on the wrap and roll it into a tight cylinder. Cut the wrap in half for easier eating.\n" +
      "\n" +
      "Continue until all wraps are assembled."],
    source:"https://www.simplyrecipes.com/blt-wraps-recipe-5524667",
    tags:["#quick lunch"]
  },
  {
    id:30,
    name:"Avocado Tuna Salad",
    image: "assets/img/Lunch/8-lunch.jpg",
    ingredients: ["1 ripe avocado\n" ,
      "2 (5 ounce) cans flaked light tuna\n" ,
      "½ red apple, chopped\n" ,
      "½ cup chopped red onion\n" ,
      "½ cup chopped celery\n" ,
      "¼ cup chopped toasted walnuts\n" ,
      "2 tablespoons mayonnaise (Optional)\n" ,
      "1 tablespoon pickle juice\n" ,
      "1 teaspoon dried dill weed\n" ,
      "½ teaspoon Dijon mustard\n" ,
      "¼ teaspoon ground cumin\n" ,
      "salt and pepper to taste"],
    method_name: ["Step 1: "],
    method_details:["Cut avocado in half, scoop out the flesh into a large bowl, and mash avocado with the back of a fork or potato masher. Add tuna, apple, onion, celery, toasted walnuts, mayonnaise, pickle juice, dill, Dijon mustard, cumin, salt, and pepper; mix well."],
    source:"https://www.allrecipes.com/recipe/272787/avocado-tuna-salad/",
    tags:["#tuna","#salad"]
  },
  {
    id:31,
    name:"Pepperoni Rolls",
    image: "assets/img/Lunch/9-lunch.jpg",
    ingredients: ["1/4 cup warm water\n" ,
      "1 (.25-ounce) package (2 1/4 teaspoons) active dry yeast\n" ,
      "3 1/2 cups (451g) all-purpose flour, divided, plus more if needed\n" ,
      "1 teaspoon salt\n" ,
      "8 tablespoons (113g) unsalted butter, divided\n" ,
      "2 tablespoons honey\n" ,
      "3/4 cup buttermilk\n" ,
      "1 large large egg\n" ,
      "8 to 9 ounces (about 144 slices) thinly sliced pepperoni"],
    method_name: ["Proof the yeast and measure the flour:","Melt the butter, then add the milk, honey, and egg:","Make the dough:","Preheat the oven to 350°F:","Divide the dough and prep for baking:","Form the rolls, then let them rise:","Bake the rolls and serve:"],
    method_details:["In a small bowl, place 1/4 cup warm water and sprinkle the yeast over it. Let it sit until dissolved and creamy, about 5 minutes.\n" +
    "\n" +
    "Meanwhile, in a large mixing bowl, combine 3 cups (387g) flour and salt.",
      "Melt the butter, then add the milk, honey, and egg:\n" +
      "In a small saucepan, melt 4 tablespoons f the butter over medium-low heat. Whisk in the honey and buttermilk, and heat just until warm to the touch (do not boil). Remove from heat and whisk in the egg.",
      "Add the water and yeast mixture to the flour, along with the buttermilk mixture. Mix with a wooden spoon until the dough just comes together. At first it will be quite sticky. If needed, add the remaining 1/2 cup (64g) flour, bit by bit. Resist the temptation to add a lot of flour; you want a soft dough that’s still kneadable.\n" +
      "\n" +
      "Transfer to a clean counter and gently knead by hand until smooth and supple, about 5 minutes. I don’t need to flour my counter—if the dough sticks, it needs more flour. Place the dough in a large, greased bowl, cover, and let rise on your counter until doubled in bulk, 1 to 2 hours.",
      "Position racks in the upper and lower thirds and line two baking sheets with parchment.",
      "Divide the dough into 12 equal pieces and let them rest on a lightly floured surface for 10 minutes.\n" +
      "\n" +
      "Melt the remaining 4 tablespoons of butter. Divide the pepperoni into 12 roughly equal piles.",
      "Take a piece of dough and pat it into a square roughly 4 to 5 inches across. Imperfection is totally acceptable here, and in fact slightly preferable. Shingle the pepperoni slices over the square, leaving a 1/4-inch border around the dough. Roll up the dough and firmly pinch the bottom seam to seal. Place it seam-side-down on the baking sheet. Repeat with the remaining dough. You’ll wind up with 6 rolls per sheet.\n" +
      "\n" +
      "Brush the rolls with half of the melted butter. Cover each baking sheet with a clean dish towel and let rise for 30 minutes. The rolls will not puff up visibly.",
      "Bake until lightly browned, 30 to 40 minutes, rotating the sheets from top to bottom and back to front halfway through baking. Immediately after removing from the oven, brush with the remaining butter—you may need to rewarm the butter slightly before brushing. \n" +
      "\n" +
      "Serve warm or at room temperature."],
    source:"https://www.simplyrecipes.com/pepperoni-rolls-from-scratch-recipe-5324979",
    tags:["#easy lunch"]
  },
  {
    id:32,
    name:"Beef Noodle Soup",
    image: "assets/img/Lunch/10-lunch.jpg",
    ingredients: ["1 pound cubed beef stew meat\n" ,
      "1 cup chopped onion\n" ,
      "1 cup chopped celery\n" ,
      "1 cup chopped carrots\n" ,
      "¼ cup beef bouillon granules\n" ,
      "¼ teaspoon dried parsley\n" ,
      "1 pinch ground black pepper\n" ,
      "5 ¾ cups water\n" ,
      "2 ½ cups frozen egg noodles"],
    method_name: ["Step 1:","Step 2:","Step 3:"],
    method_details:["Sauté stew meat, onion, and celery in a large saucepan over medium-high heat until meat is browned on all sides, about 5 minutes.",
      "Stir in carrots, then season with bouillon, parsley, and pepper. Stir in water and add egg noodles.",
      "Bring to a boil, reduce heat to low, and simmer for 30 minutes."],
    source:"https://www.allrecipes.com/recipe/17794/beef-noodle-soup/",
    tags:["#lunch","#soup"]
  },
]

export const recipesDinner=[
  {
    id:33,
    name:"Homemade Chirashi",
    image: "assets/img/Dinner/1-dinner.jpg",
    ingredients: ["4 extra-jumbo unpeeled shrimp (about 3 ounces)\n" ,
      "1 ounce snow peas\n" ,
      "2 cups cooked sushi rice\n" ,
      "8 ounces sashimi-grade salmon, tuna, or yellow tail, cut into 1/4-inch cubes or slices\n" ,
      "4 slices tamagoyaki\n" ,
      "6 thin slices English cucumber (about 1/8 cucumber)\n" ,
      "1/4 cup microgreens (any kind)\n" ,
      "2 whole shiso leaves (optional)\n" ,
      "Shredded nori, to garnish\n" ,
      "Soy sauce, to serve\n" ,
      "Wasabi, to serve"],
    method_name: ["Steam the shrimp and snow peas: ","Meanwhile, assemble the chirashi: ","Garnish and serve: "],
    method_details:["Add about 1 inch of water in a pot large enough to hold a steamer basket inside. Add the steamer basket in the pot, making sure the water doesn’t touch the bottom of it. Place the shrimp and snow peas in the basket. Set the pot over high heat and bring it up to a boil. As soon as it comes to a boil, lower the heat to a simmer, cover the pot, and let steam for 4 minutes until the shrimp is pink and opaque and the snow peas are tender and bright green.",
      "Divide the rice into 2 bowls. Arrange the sashimi, tamagoyaki, cucumbers, microgreens, and shiso, if using, on top of each bowl.\n" +
      "\n" +
      "When the shrimp is cool enough to handle, peel and add 2 into each bowl along with the snow peas.",
      "Garnish each bowl with shredded nori and serve immediately with soy sauce and wasabi on the side for dipping the sashimi into."],
    source:"https://www.simplyrecipes.com/chirashi-sushi-recipe-6361879",
    tags:["#dinner","#salmon"]
  },
  {
    id:34,
    name:"Quick Beef Stir-Fry",
    image: "assets/img/Dinner/2-dinner.jpg",
    ingredients: ["2 tablespoons vegetable oil\n" ,
      "1 pound beef sirloin, cut into 2-inch strips\n" ,
      "1 ½ cups fresh broccoli florets\n" ,
      "1 red bell pepper, cut into matchsticks\n" ,
      "2 carrots, thinly sliced\n" ,
      "1 green onion, chopped\n" ,
      "1 teaspoon minced garlic\n" ,
      "2 tablespoons soy sauce\n" ,
      "2 tablespoons sesame seeds, toasted"],
    method_name: ["Step 1:","Step 2:"],
    method_details:["Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes.",
      "Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes."],
    source:"https://www.allrecipes.com/recipe/228823/quick-beef-stir-fry/",
    tags:["#dinner","#beef"]
  },
  {
    id:35,
    name:"Tacos al Pastor",
    image: "assets/img/Dinner/3-dinner.jpg",
    ingredients: ["For the marinade:\n" ,
      "\n" +
      "3 cups water\n" ,
      "4 dried cascabel or guajillo chiles, stemmed and deseeded\n" ,
      "2 dried ancho chiles, stemmed and deseeded\n" ,
      "1 dried pasilla chile, stemmed and deseeded\n" ,
      "1 large ripe pineapple\n" ,
      "3 cloves garlic\n" ,
      "1 tablespoon achiote paste\n" ,
      "1 tablespoon Mexican oregano\n" ,
      "1 teaspoon ground cumin\n" ,
      "1 teaspoon black peppercorns\n" ,
      "1/3 cup apple cider vinegar\n" ,
      "3 tablespoons olive oil\n" ,
      "3 tablespoons orange juice\n" ,
      "1 teaspoon kosher salt, plus more for cooking the pork\n" ,
      "‎",
      "For the tacos:\n" ,
      "\n" +
      "3 pounds (1.4 kilograms) pork shoulder steaks\n" ,
      "4 tablespoons olive oil, divided\n" ,
      "1 tablespoon ground ancho or guajillo chiles\n" ,
      "1 teaspoon kosher salt\n" ,
      "1 medium white onion, finely diced\n" ,
      "1 small bunch cilantro, finely chopped\n" ,
      "3 limes, cut into wedges\n" ,
      "4 tortilla corn tortillas"],
    method_name: ["Rehydrate the chiles: ","Prepare the pineapple: ","Make the adobada marinade: ","Marinate the pork: ","Prep the oven",
      "Sear the pork:","Bake the pork:","Roast the pineapple:","Meanwhile, warm the tortillas:","Slice the pork:","Assemble the tacos:"],
    method_details:["In a kettle or small saucepan, boil 3 cups water. \n" +
    "\n" +
    "Meanwhile, heat a large non-stick pan over medium heat. Add the cascabel, ancho, and pasilla chiles, and toast for about 2 minutes on each side until aromatic and slightly softened. Carefully pour the boiled water over the chiles right in the pan and place a large plate on top to make sure the chiles are completely submerged. Let them soak for 20 minutes, until they turn soft.",
      "Cut one third of the pineapple into large chunks. You’ll add these to the marinade. \n" +
      "\n" +
      "Cut the remaining pineapple into about 2 x 1/2-inch pieces. Place these in a bowl, cover with plastic wrap, and refrigerate until ready to use. When you’re ready to serve the tacos, you’ll roast these.",
      "In a blender, transfer the rehydrated chiles—discard the soaking water—and add the pineapple chunks, garlic, achiote paste, oregano, cumin, black peppercorns, vinegar, olive oil, orange juice, and salt. Blend until very smooth.",
      "In a large bowl, add the pork shoulder steaks and pour the adobada marinade on top. Use your hands to fully coat the meat with the marinade. Wash your hands and cover the bowl with plastic wrap. Let it marinate in the fridge for at least 3 hours or up to overnight.",
      "Preheat the oven to 400°F.",
      "Set a large pan with 1 tablespoon olive oil over high heat. You will sear the pork in batches. Once the pan is hot, place 3 steaks in the pan, making sure they don’t overlap. Sprinkle a pinch of salt over each steak. \n" +
      "\n" +
      "Sear for 2 minutes per side until golden brown and lightly charred. Transfer the meat onto a large baking dish. Sear the remaining pork.",
      "Pour the adobada marinade used to marinate the pork on top of the seared pork. Cover the baking dish with foil and bake for 20 minutes, until the pork is cooked through. Set it aside to rest while you roast the pineapple.",
      "Transfer the reserved pineapple onto a baking sheet and spread them out into an even layer. Drizzle on 1 tablespoon olive oil and sprinkle with ground ancho chiles and salt. Roast for 15 minutes until the edges are lightly charred.",
      "Warm up your corn tortillas over a hot comal or in a pan in batches, and keep them warm in a tortillero or by wrapping them in a clean tea towel.",
      "Slice the pork thinly with a very sharp knife and place it on a serving platter. Scrape the marinade on top of the sliced pork.",
      "Bring the sliced pork, roasted pineapples, warm tortillas, chopped onions, cilantro, and lime wedges to the table so that everyone can build their own tacos. For the perfect al pastor taco, add a spoonful of pork into a tortilla, top with a slice or two of pineapple, garnish with onions and cilantro, and then a generous squeeze a lime"],
    source:"https://www.simplyrecipes.com/tacos-al-pastor-recipe-5496915",
    tags:["#dinner","#tacos"]
  },
  {
    id:36,
    name:"Maple Salmon",
    image: "assets/img/Dinner/4-dinner.jpg",
    ingredients: ["¼ cup maple syrup\n" ,
      "2 tablespoons soy sauce\n" ,
      "1 clove garlic, minced\n" ,
      "¼ teaspoon garlic salt\n" ,
      "⅛ teaspoon ground black pepper\n" ,
      "1 pound salmon"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:"],
    method_details:["Stir together maple syrup, soy sauce, garlic, garlic salt, and pepper in a small bowl.",
      "Cut salmon into 4 equal fillets, place in a shallow glass baking dish, and coat with maple syrup mixture. Cover the dish and marinate salmon in the refrigerator for 30 minutes, turning once halfway.",
      "Preheat oven to 400 degrees F (200 degrees C).",
      "Place the baking dish in the preheated oven and bake salmon uncovered until flesh easily flakes with a fork, about 20 minutes."],
    source:"https://www.allrecipes.com/recipe/51283/maple-salmon/",
    tags:["#dinner","#salmon"]
  },
  {
    id:37,
    name:"Potato Knishes",
    image: "assets/img/Dinner/5-dinner.jpg",
    ingredients: ["For the dough:\n" ,
      "\n" +
      "2 1/2 cups all-purpose flour\n" ,
      "1 teaspoon baking powder\n" ,
      "1/2 teaspoon salt\n" ,
      "1/2 cup water\n" ,
      "1/2 cup neutral oil (like vegetable or canola)\n" ,
      "1 large egg, whisked\n" ,
      "1 teaspoon white vinegar\n" ,
      "‎",
      "For the filling:\n" ,
      "\n" +
      "3 tablespoons olive oil\n" ,
      "1 medium yellow onion, chopped\n",
      "1/4 teaspoon salt\n" ,
      "1/2 teaspoon black pepper\n" ,
      "1 pound russet potatoes, peeled and quartered\n" ,
      "2 tablespoons unsalted butter\n" ,
      "‎",
      "For the egg wash and serving:\n" ,
      "\n" +
      "1 large egg, whisked\n" ,
      "1 tablespoon water\n" ,
      "Mustard, for serving"],
    method_name: ["Prepare the dough:","Cook the onions:","Preheat the oven to 375°F.","Cook the potatoes and assemble the filling:",
      "Roll the knishes:","Form the knishes:","Brush with egg wash and bake:"],
    method_details:["Combine the flour, baking powder, and salt in the bowl of a food processor. Add the water, oil, egg, and vinegar and pulse until just combined. It will resemble a shaggy dough that no longer sticks to the side of the bowl. Transfer the dough to a large bowl and cover with a kitchen towel. Let rest for 1 hour at room temperature, or overnight in the refrigerator. ",
      "While the dough is resting, make the filling. Heat the olive oil in a medium skillet over medium heat. Add the onion and cook, stirring frequently, until they have browned and softened, 30 to 40 minutes. Remove from the heat and season with salt and pepper.",
      "Line a large baking sheet with parchment paper.",
      "Meanwhile, cook the potatoes in a pot of salted boiling water until fork tender, approximately 15 to 20 minutes. Drain and transfer to a medium bowl. Add the cooked onions to the potatoes along with the butter. Mash with a potato masher or fork until smooth. Let cool.",
      "On a lightly floured surface, roll the dough into a very thin rectangular sheet (approximately 10 x 20 inches).\n" +
      "\n" +
      "Place a 2-inch wide log of the potato mixture running about an inch from the bottom of the dough. Roll the dough around the filling and into a log. Not too tight—it should roll around the filling 3 to 5 times.",
      "Use your finger to make 11 indents equally spaced down the log approximately 2 inches apart. Use a small knife to cut the log at these points, making 12 knishes.\n" +
      "\n" +
      "Pinch at one end to seal; this will be the bottom of the knish. Pinch and twist at the other end or leave open.",
      "Combine the whisked egg and water in a small bowl. Place the knishes on the prepared baking sheet evenly spaced apart, pinched-side down. Use a pastry brush to brush each knish with the egg wash.\n" +
      "\n" +
      "Bake until golden brown, 40 to 45 minutes. Serve with deli-style mustard."],
    source:"https://www.simplyrecipes.com/potato-knishes-recipe-6455523",
    tags:["#dinner","#potatoes"]
  },
  {
    id:38,
    name:"Chicken Escabeche",
    image: "assets/img/Dinner/6-dinner.jpg",
    ingredients: ["3 tablespoons extra-virgin olive oil\n" ,
      "12 ½ ounces skinless, boneless chicken breast halves\n" ,
      "3 ½ ounces carrots, julienned\n" ,
      "3 ½ ounces white onion, thinly sliced\n" ,
      "3 ½ ounces red onion, thinly sliced\n" ,
      "2 bay leaves\n" ,
      "1 clove garlic, minced\n" ,
      "1 teaspoon ground black pepper\n" ,
      "½ teaspoon salt\n" ,
      "¼ cup red wine vinegar\n" ,
      "¼ cup dry white wine\n" ,
      "¼ cup water\n" ,
      "1 teaspoon achiote powder\n" ,
      "½ teaspoon cayenne pepper"],
    method_name: ["Step 1:","Step 2:"],
    method_details:["Heat oil over medium-high heat in a Dutch oven. Add chicken to the hot oil and brown on 1 side, about 5 minutes. Flip chicken; add carrots, white onion, red onion, bay leaves, garlic, black pepper, and salt. Mix until vegetables have softened and chicken has browned, about 8 minutes.",
      "Pour red wine vinegar, white wine, and water into the Dutch oven. Sprinkle with achiote powder and cayenne; stir well. Reduce heat to medium. Cover and simmer until chicken is no longer pink in the center and an instant-read thermometer inserted into the center reads at least 165 degrees F (74 degrees C), about 15 minutes."],
    source:"https://www.allrecipes.com/recipe/274330/chicken-escabeche/",
    tags:["#dinner","#chicken"]
  },
  {
    id:39,
    name:"Bucatini all'Amatriciana",
    image: "assets/img/Dinner/7-dinner.jpg",
    ingredients: ["1 pound dry bucatini\n" ,
      "1 tablespoon olive oil\n" ,
      "8 ounces guanciale, small dice\n" ,
      "1/4 teaspoon crushed red pepper flakes\n" ,
      "1 large yellow onion, small dice\n" ,
      "1/4 teaspoon kosher salt, plus more for pasta water\n" ,
      "1/8 teaspoon freshly ground black pepper\n" ,
      "1 cup dry white wine, like Pinot Gris or Chardonnay\n" ,
      " 1 (14- to 15-ounce) can crushed tomatoes\n" ,
      "1/4 cup freshly grated Pecorino Romano cheese, plus more for serving\n" ,
      "1 teaspoon finely chopped fresh parsley, for serving"],
    method_name: ["Cook the pasta: ","Start the sauce:","Cook the onions: ","Add the wine:","Add the tomato:","Add the pasta:"],
    method_details:["Bring a large pot of water (about 4 quarts) with a generous amount of salt to a boil over high heat. Add the pasta and cook until al dente following package instructions.",
      "Heat a large sauté pan over medium heat. Add the olive oil and once it’s hot (rippling, but not smoking) add the guanciale. Cook until golden brown, 7 to 8 minutes, stirring occasionally. Use a slotted spoon to transfer the crispy guanciale into a small bowl and set it aside. There will be residual fat left in the pan. Don’t discard it. Cook the onions in them.",
      "Reduce the heat to medium-low. Add the red pepper flakes and toast them for about 1 minute. Add the onions, salt, and black pepper. Cook until the onions are soft and translucent, stirring occasionally, about 8 minutes.",
      "Pull the pan off the heat and carefully add the white wine. Return the pan back to the stove top, increase the heat to high heat, and cook until the alcohol has burned off, about 5 minutes. The wine should be reduced by about three quarters.",
      "Pour in the tomatoes and simmer over medium heat for 8 minutes until the raw tomato flavor cooks off and the sauce reduces just a tiny bit. Stir in the cooked guanciale. Taste and adjust seasoning with salt and black pepper.",
      "Use tongs to add the cooked bucatini into the sauce and toss to evenly coat. Remove the pan from the heat. Sprinkle in 1/4 cup Pecorino and toss to coat.\n" +
      "\n" +
      "Serve the pasta with parsley and more cheese sprinkled on top. "],
    source:"https://www.simplyrecipes.com/bucatini-all-amatriciana-recipe-5509269",
    tags:["#easy dinner"]
  },
  {
    id:40,
    name:"Lasagna",
    image: "assets/img/Dinner/8-dinner.jpg",
    ingredients: ["1 pound sweet Italian sausage\n" ,
      "¾ pound lean ground beef\n" ,
      "½ cup minced onion\n" ,
      "2 cloves garlic, crushed\n" ,
      "1 (28 ounce) can crushed tomatoes\n" ,
      "2 (6 ounce) cans tomato paste\n" ,
      "2 (6.5 ounce) cans canned tomato sauce\n" ,
      "½ cup water\n" ,
      "2 tablespoons white sugar\n" ,
      "1 ½ teaspoons dried basil leaves\n" ,
      "½ teaspoon fennel seeds\n" ,
      "1 teaspoon Italian seasoning\n" ,
      "1 ½ teaspoons salt, divided, or to taste\n" ,
      "¼ teaspoon ground black pepper\n" ,
      "4 tablespoons chopped fresh parsley\n" ,
      "12 lasagna noodles\n" ,
      "16 ounces ricotta cheese\n" ,
      "1 egg\n" ,
      "¾ pound mozzarella cheese, sliced\n" ,
      "¾ cup grated Parmesan cheese"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:"],
    method_details:["In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.",
      "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.",
      "Preheat oven to 375 degrees F (190 degrees C).",
      "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.",
      "Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving."],
    source:"https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
    tags:["#dinner","#lasagna"]
  },
  {
    id:41,
    name:"Guyanese Chicken Curry",
    image: "assets/img/Dinner/9-dinner.jpg",
    ingredients: ["For the chicken:\n" ,
      "\n" +
      "4 pounds chicken legs and thighs, skin removed, and thighs cut in half\n" ,
      "1 lime\n" ,
      "1/2 teaspoon garam masala \n" ,
      "1/2 teaspoon Madras curry powder\n" ,
      "2 tablespoons green seasoning\n" ,"‎",
      "For the homemade green seasoning:\n" ,
      "\n" +
      "1 medium onion, roughly chopped\n" ,
      "10 cloves garlic, peeled\n" ,
      "2 wiri wiri peppers or 1 small Scotch bonnet or 1 habanero\n",
      "2 scallions\n" ,
      "2-3 tablespoons water\n" ,"‎",
      "For the curry paste:\n" ,
      "\n" +
      "2 tablespoons green seasoning\n" ,
      "1 1/2 teaspoons garam masala\n" ,
      "1 1/2 teaspoons Madras curry powder\n" ,
      "1/2 teaspoon turmeric powder\n" ,
      "1/2 teaspoons geera (ground roasted cumin) \n" ,
      "1/4 cup water\n" ,"‎",
      "For the curry:\n" ,
      "\n" +
      "1/2 cup neutral cooking oil such as canola, vegetable, or avocado\n" ,
      "1 small yellow onion, diced\n" ,
      "1 small scotch bonnet, habanero, 2 wiri wiri peppers\n" ,
      "6 cloves\n" ,
      "1/2 inch piece cinnamon stick\n" ,
      "1 small bay leaf\n" ,
      "1 tablespoon tomato paste\n",
      "1 1/2 teaspoons salt, plus more if needed\n",
      "Kettle with 4-6 cups boiling water\n" ,
      "2 medium russet potatoes, peeled and chopped lengthwise into 5-6 slices\n" ,
      "3 scallions, thinly sliced\n" ,
      "1/2 teaspoon geera (ground roasted cumin)"],
    method_name: ["Prep the chicken:","Make the green seasoning:","Marinate the chicken:","Make the curry paste: ","Cook the curry paste","Add the remaining ingredients:","Let the curry simmer:","Serve:"],
    method_details:["Put the chicken pieces in a large mixing bowl. Add enough water to come halfway up the bowl. Slice lime in half and squeeze the juice over the chicken. Set aside for 10 minutes. The acid from the lime helps to tenderize the meat and also aids in removing straggling pieces of fat. Drain the chicken and rinse with cold water 2 to 3 times.",
      "While the chicken soaks in the lime water, make the seasoning. In a blender or food processor add the onion, garlic, pepper, scallions, and water. Blend into a paste. The consistency should be thick like a smooth pesto sauce. ",
      "Dry the meat with a paper towel. Add the garam masala, curry powder, and the green seasoning. Massage into the meat, cover with plastic wrap or a clean dish towel, and set aside to marinate for a minimum of 30 minutes.",
      "In a small bowl combine the garam masala, curry powder, turmeric powder, geera, 2 tablespoons green seasoning, and water. Set aside.",
      "Heat the oil in a Dutch oven over medium heat. Add the curry paste and cook, stirring constantly, until the curry paste starts to look dry and a little browned. Add the chicken and  stir to coat in the curry paste.",
      "Add the onions, pepper, clove, cinnamon, bay leaf, tomato paste, and salt. Stir to combine and let cook, stirring occasionally, for 15 to 20 minutes. While the chicken is cooking it will release some liquid; let the chicken simmer in its juices until just a little is left. The chicken will begin to look dry with the spices almost seared on it. \n" +
      "\n" +
      "Pour in enough boiling water to come halfway up the pot.      \n" +
      "\n" +
      "Remove potatoes from the water and add to the curry. Stir to combine.",
      "Reduce the heat to medium-low. Let the curry simmer uncovered, stirring occasionally, until the gravy has reduced and starts to look thick, about 20 to 25 minutes. \n" +
      "\n" +
      "Add the scallions and geera and stir to combine. Remove from heat. Taste and adjust with additional salt if needed.",
      "Spoon curry over a plate of rice or serve with roti."],
    source:"https://www.simplyrecipes.com/guyanese-chicken-curry-recipe-5235736",
    tags:["#dinner","#chicken"]
  },
  {
    id:42,
    name:"Chicken Parmesan",
    image: "assets/img/Dinner/10-dinner.jpg",
    ingredients: ["4 skinless, boneless chicken breast halves\n" ,
      "Salt and freshly ground black pepper to taste\n" ,
      "2 large eggs\n" ,
      "1 cup panko bread crumbs, or more as needed\n" ,
      "¾ cup grated Parmesan cheese, divided\n" ,
      "2 tablespoons all-purpose flour, or more if needed\n" ,
      "½ cup olive oil for frying, or as needed\n" ,
      "½ cup prepared tomato sauce\n" ,
      "¼ cup fresh mozzarella, cut into small cubes\n" ,
      "¼ cup chopped fresh basil\n" ,
      "½ cup grated provolone cheese\n" ,
      "2 teaspoons olive oil"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:","Step 6:","Step 7:","Step 8:","Step 9:"],
    method_details:["Preheat an oven to 450 degrees F (230 degrees C).",
      "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.",
      "Beat eggs in a shallow bowl and set aside.",
      "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.",
      "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.",
      "Dip a flour-coated chicken breast in beaten eggs. Transfer breast to the bread crumb mixture, pressing crumbs into both sides. Repeat for each breast. Let chicken rest for 10 to 15 minutes.",
      "Heat 1/2 inch olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken in the hot oil until golden, about 2 minutes per side. The chicken will finish cooking in the oven.",
      "Transfer chicken to a baking dish. Top each breast with 2 tablespoons tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle remaining Parmesan over top and drizzle each with 1/2 teaspoon olive oil.",
      "Bake in the preheated oven until cheese is browned and bubbly and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."],
    source:"https://www.allrecipes.com/recipe/223042/chicken-parmesan/",
    tags:["#dinner","#chicken"]
  },
]

export const recipesDessert=[
  {
    id:43,
    name:"Honey Cake",
    image: "assets/img/Dessert/1-dessert.jpg",
    ingredients: ["2 cups (250g) all-purpose flour\n" ,
      "2 teaspoons baking powder\n" ,
      "1/4 teaspoon baking soda\n" ,
      "1/2 teaspoon salt\n" ,
      "1 teaspoon cinnamon\n" ,
      "1/4 teaspoon allspice\n" ,
      "1/4 teaspoon ground cloves\n" ,
      "1/4 teaspoon ground nutmeg\n" ,
      "1/2 cup (113g) unsalted butter, softened (plus 1 1/2 tablespoons for greasing the pan)\n" ,
      "3/4 cup (255g)honey\n" ,
      "1 tablespoon orange zest (from 1 orange)\n" ,
      "1 teaspoon vanilla extract\n" ,
      "2 large eggs, at room temperature\n" ,
      "1/2 cup (113g) whole milk, room temperature"],
    method_name: ["Preheat the oven to 350°F.","Mix the dry ingredients:","Mix the wet ingredients:","Add the dry ingredients to the wet ingredients:","Bake:"],
    method_details:["Grease a 10-inch non-stick Bundt pan with a generous coating of butter, making sure to get in all of the crevices.",
      "In a large bowl, whisk together the flour, baking powder, baking soda, salt, cinnamon, allspice, cloves, and nutmeg. Set aside.",
      "Add the butter and honey to a stand mixer or hand mixer with beater attachments. Mix on medium speed until combined. Add the orange zest and vanilla and mix on medium speed until incorporated, about 1 minute.\n" +
      "\n" +
      "Add the eggs to the butter mixture and mix on medium speed until combined. Add the milk and mix again.",
      "Add half of the dry ingredients to the wet ingredients and mix on low speed until just incorporated. Repeat with the remainder of the dry ingredients.",
      "Pour the batter into the prepared Bundt pan and bake until a toothpick inserted into the center of the cake comes out clean, about 35 minutes. \n" +
      "\n" +
      "Allow the finished cake to cool for 10 minutes before inverting it onto a plate. Serve warm."],
    source:"https://www.simplyrecipes.com/honey-cake-recipe-6500782",
    tags:["#dessert","#bunt cake"]
  },
  {
    id:44,
    name:"Banana Cream Pie",
    image: "assets/img/Dessert/2-dessert.jpg",
    ingredients: ["¾ cup white sugar\n" ,
      "⅓ cup all-purpose flour\n" ,
      "¼ teaspoon salt\n" ,
      "2 cups milk\n" ,
      "3 egg yolks, beaten\n" ,
      "2 tablespoons butter\n" ,
      "1 ¼ teaspoons vanilla extract\n" ,
      "1 (9 inch) baked pastry shell, cooled\n" ,
      "4 bananas, sliced"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:","Step 6:","Step 7:"],
    method_details:["Preheat the oven to 350 degrees F (175 degrees C).",
      "Combine sugar, flour, and salt in a saucepan. Gradually stir in milk. Cook, stirring constantly, over medium heat until mixture boils and thickens. Continue to stir and cook for 2 more minutes, then remove from the burner.",
      "Place egg yolks in a medium bowl. Whisk in a small amount of hot mixture, then immediately add egg yolk mixture to remaining hot mixture.",
      "Return the saucepan to the burner and cook, stirring constantly, for 2 more minutes. Remove the saucepan from the stove; stir in butter and vanilla.",
      "Fill pastry shell with sliced bananas. Cover with pudding.",
      "Bake until filling sets, 12 to 15 minutes.",
      "Chill pie for 1 hour before serving."],
    source:"https://www.allrecipes.com/recipe/12151/banana-cream-pie-i/",
    tags:["#dessert","#pie"]
  },
  {
    id:45,
    name:"Lemon Bars",
    image: "assets/img/Dessert/3-dessert.jpg",
    ingredients: ["For the shortbread crust:\n" ,
      "1 cup all-purpose flour\n" ,
      "½ cup unsalted butter at room temperature\n" ,
      "¼ cup confectioners' sugar\n" ,
      "¼ teaspoon vanilla extract\n" ,
      "¼ teaspoon salt\n" ,"‎",
      "For the lemon layer:\n" ,
      "2 large eggs\n" ,
      "1 large egg yolk\n" ,
      "1 cup white sugar\n" ,
      "2 tablespoons all-purpose flour\n" ,
      "¼ cup freshly squeezed lemon juice\n" ,
      "1 tablespoon freshly grated lemon zest\n" ,
      "1 teaspoon confectioners' sugar, or to taste"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:","Step 6:"],
    method_details:["Place an oven rack into middle position in oven and preheat oven to 350 degrees F (175 degrees C). Lightly oil an 8x8-inch baking dish.",
      "Place 1 cup flour and butter in a mixing bowl and mash with the back of a spatula or wooden spoon until thoroughly combined. Mix in 1/4 cup confectioners' sugar, vanilla extract, and salt; mash mixture together until mixture looks like a slightly crumbly cookie dough.",
      "Moisten your fingers with a little water and press dough into bottom of prepared baking dish. Use a fork to prick holes all over the crust.",
      "Bake crust on center rack in the preheated oven until crust edges are barely golden brown, 22 minutes.",
      "Beat eggs and egg yolks together in a bowl; whisk in white sugar and 2 tablespoons flour until smooth. Add lemon juice and lemon zest; whisk for 2 minutes. Pour lemon custard over crust.",
      "Bake on center rack until custard is set and top has a thin white sugary crust, 25 minutes. Let cool completely before cutting into bars. Dip knife into very hot water, run around the edge, and cut into 16 squares. Dust cookies with 1 teaspoon confectioners' sugar."],
    source:"https://www.allrecipes.com/recipe/232799/chef-johns-lemon-bars/",
    tags:["#dessert"]
  },
  {
    id:46,
    name:"Pawpaw Pudding",
    image: "assets/img/Dessert/4-dessert.jpeg",
    ingredients: ["2/3 cup (93g) unbleached all-purpose flour\n" ,
      "2/3 to 3/4 cup (132 to 150g) sugar, depending on the sweetness of the pawpaws\n" ,
      "1/4 teaspoon salt\n" ,
      "1/2 teaspoon baking soda\n" ,
      "1 cup pawpaw pulp (see recipe note)\n" ,
      "1/2 cup buttermilk\n" ,
      "1/4 cup half-and-half\n" ,
      "1 large egg\n" ,
      "1 large egg yolk\n" ,
      "2 teaspoons vanilla bean paste or vanilla extract\n" ,
      "3 tablespoons unsalted butter, melted and cooled\n" ,
      "Crème fraîche or whipped cream, for serving"],
    method_name: ["Preheat the oven to 350°F.","Make the batter:","Bake:","Cool and serve:"],
    method_details:["Position a rack in the middle. Use butter or cooking spray to grease an 8 x 8-inch baking dish, preferably glass or ceramic.",
      "In the bowl of a food processor, pulse the flour, sugar, salt, and baking soda to combine.\n" +
      "\n" +
      "In a large glass measuring cup or medium bowl, combine the pawpaw, buttermilk, half-and-half, egg and egg yolk, and vanilla. With the machine running, add the pawpaw-buttermilk mixture through the feed tube. Turn off the machine, scrape down the sides, and add the melted butter with the machine running. Your batter should have the consistency of pancake batter.",
      "Pour the batter into the greased dish. Bake until the center is set but still jiggly (like a pumpkin pie), 35 to 45 minutes. As it bakes the pudding may puff up, then deflate—this is normal. The edges will brown and the center will be flat, shiny, and amber-colored.",
      "Set on a wire rack to cool (the pudding will collapse as it cools). Serve at room temperature with crème fraîche or whipped cream. I like this for breakfast with a big dollop of Greek yogurt, but I could say that about most any dessert."],
    source:"https://www.simplyrecipes.com/baked-pawpaw-pudding-recipe-6541188",
    tags:["#easy dessert"]
  },
  {
    id:47,
    name:"Chocolate Chip Cookies",
    image: "assets/img/Dessert/5-dessert.jpg",
    ingredients: ["2 cups all-purpose flour\n" ,
      "½ teaspoon baking soda\n" ,
      "½ teaspoon salt\n" ,
      "¾ cup unsalted butter, melted\n" ,
      "1 cup packed brown sugar\n" ,
      "½ cup white sugar\n" ,
      "1 tablespoon vanilla extract\n" ,
      "1 egg\n" ,
      "1 egg yolk\n" ,
      "2 cups semisweet chocolate chips"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:"],
    method_details:["Preheat the oven to 325 degrees F (165 degrees C). Grease cookie sheets or line with parchment paper.",
      "Sift together the flour, baking soda and salt; set aside.",
      "In a medium bowl, cream together the melted butter, brown sugar and white sugar until well blended. Beat in the vanilla, egg, and egg yolk until light and creamy. Mix in the sifted ingredients until just blended. Stir in the chocolate chips by hand using a wooden spoon. Drop cookie dough 1/4 cup at a time onto the prepared cookie sheets. Cookies should be about 3 inches apart.",
      "Bake for 15 to 17 minutes in the preheated oven, or until the edges are lightly toasted. Cool on baking sheets for a few minutes before transferring to wire racks to cool completely."],
    source:"https://www.allrecipes.com/recipe/25037/best-big-fat-chewy-chocolate-chip-cookie/",
    tags:["#dessert","#cookies"]
  },
  {
    id:48,
    name:"No Bake Cookies",
    image: "assets/img/Dessert/6-dessert.jpg",
    ingredients: ["1 ¾ cups white sugar\n" ,
      "½ cup milk\n" ,
      "½ cup butter\n" ,
      "4 tablespoons unsweetened cocoa powder\n" ,
      "½ cup crunchy peanut butter\n" ,
      "3 cups quick-cooking oats\n" ,
      "1 teaspoon vanilla extract"],
    method_name: ["Step 1:"],
    method_details:["In a medium saucepan, combine sugar, milk, butter, and cocoa. Bring to a boil, and cook for 1 1/2 minutes. Remove from heat, and stir in peanut butter, oats, and vanilla. Drop by teaspoonfuls onto wax paper. Let cool until hardened."],
    source:"https://www.allrecipes.com/recipe/9832/no-bake-cookies-i/",
    tags:["#dessert","#cookies"]
  },
  {
    id:49,
    name:"Flourless Chocolate Cake",
    image: "assets/img/Dessert/7-dessert.jpg",
    ingredients: ["¾ cup white sugar\n" ,
      "½ cup water\n" ,
      "¼ teaspoon salt\n" ,
      "18 (1 ounce) squares bittersweet chocolate\n" ,
      "1 cup unsalted butter\n" ,
      "6 eggs"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:","Step 6:","Step 7:"],
    method_details:["Preheat the oven to 300 degrees F (150 degrees C). Grease a 10-inch round cake pan; set aside.",
      "Combine sugar, water, and salt in a small saucepan over medium heat. Stir until completely dissolved; set aside.",
      "Melt bittersweet chocolate in a microwave-safe glass or ceramic bowl in 15-second intervals, stirring after each interval, 1 to 3 minutes. Pour chocolate into the bowl of an electric mixer.",
      "Cut butter into pieces; beat butter, one piece at a time, into chocolate until combined. Beat in hot sugar water. Slowly beat in eggs, one at a time.",
      "Pour batter into the prepared cake pan. Have a pan larger than the cake pan ready; put the cake pan in the larger pan and fill the larger pan with boiling water halfway up the sides of the cake pan.",
      "Bake cake in the water bath in the preheated oven for 45 minutes. The center will still look wet. Place cake in the refrigerator until thoroughly chilled, 8 hours to overnight",
      "To unmold, dip the bottom of the cake pan in hot water for 10 seconds and invert onto a serving plate."],
    source:"https://www.allrecipes.com/recipe/8149/flourless-chocolate-cake-i/",
    tags:["#dessert","#cake","#chocolate"]
  },
  {
    id:50,
    name:"Easy Rhubarb Pie",
    image: "assets/img/Dessert/8-dessert.jpg",
    ingredients: ["1 cup white sugar\n" ,
      "2 tablespoons all-purpose flour\n" ,
      "1 egg\n" ,
      "½ teaspoon vanilla extract\n" ,
      "¾ cup all-purpose flour\n" ,
      "½ cup brown sugar\n" ,
      "⅓ cup butter, softened\n" ,
      "2 cups 1-inch pieces rhubarb\n"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:","Step 5:"],
    method_details:["Preheat the oven to 350 degrees F (175 degrees C).",
      "Mix white sugar, 2 tablespoons flour, egg, and vanilla in a small bowl until combined.",
      "Place 3/4 cup flour, brown sugar, and butter in another small bowl; mix until crumbly",
      "Place rhubarb into pie crust. Pour white sugar mixture over the rhubarb. Sprinkle with brown sugar mixture.",
      "Bake in the preheated oven until filling is bubbly and crust is golden brown, 30 to 40 minutes."],
    source:"https://www.allrecipes.com/recipe/273043/easy-rhubarb-pie/",
    tags:["#dessert","#pie"]
  },
  {
    id:51,
    name:"Caramel Brownies",
    image: "assets/img/Dessert/9-dessert.jpg",
    ingredients: ["For the caramel sause:",
      "1 cup (210g) sugar\n" ,
      "6 tablespoons (85g) butter (salted or unsalted)\n" ,
      "1/2 cup (120ml) heavy cream","‎",
      "For the brownies:",
      "1/3 cup caramel sauce, plus more for drizzling\n" ,
      "1 1/4 cup (168g) all-purpose flour\n" ,
      "1/4 cup (24g) Dutch processed cocoa powder\n" ,
      "3/4 cup (168g) unsalted butter\n" ,
      "3 ounces unsweetened chocolate, chopped\n" ,
      "1 1/4 cups (260g) granulated sugar\n" ,
      "1/4 cup (46g) brown sugar\n" ,
      "1 teaspoon kosher salt\n" ,
      "2 teaspoons vanilla extract\n" ,
      "3 large eggs\n" ,
      "1/2 to 3/4 teaspoon flake salt, for topping (optional)"],
    method_name: ["Make the caramel sauce:","Prepare the pan:","Prep dry ingredients:","Melt butter and chocolate:","Add sugar, salt, and vanilla:","Add eggs:","Finish batter:","Transfer the batter and add the caramel:","Swirl in caramel:","Bake:","Drizzle with more caramel and enjoy:"],
    method_details:["Heat up the sugar in a pan. Whisk until the sugar has started to melt. Add the butter and whisk until it has also melted. Finally, add the heavy cream. Whisk until the sauce is smooth. Let it cool for a bit.",
      "Preheat the oven to 325°F degrees. Coat an 8 x 8 square metal baking pan with cooking spray.\n" +
      "\n" +
      "Make a parchment sling by lining the pan with parchment paper and leaving an inch overhang on either side. This will make it easier to remove the brownies from the pan. Spray parchment and set aside.",
      "In a small bowl whisk flour and cocoa to break up any cocoa clumps and set aside.",
      "In a large pot (4 quart), set over medium low heat, add the butter and chocolate. Stir until both are melted and fully combined. Remove from heat.",
      "To the pot with the chocolate and butter add the granulated sugar, brown sugar, salt, and vanilla. The batter will look grainy. ",
      "Add eggs one at a time and stir vigorously after each addition until fully incorporated. The batter will become smooth and shiny. ",
      "Add flour and cocoa mixture to the batter. Use a spatula to stir it all together. The batter will be thick, and shiny like frosting.",
      "Scrape batter into the prepared baking dish. Smooth the top with your spatula, if necessary. Measure out about 1/3 cup of caramel sauce into a dish. Your caramel should be able to drizzle off the end of your spoon in thick ribbons. If it’s too cool and thick to drizzle then zap it in the microwave for a few seconds until it is.\n" +
      "\n" +
      "Using a spoon create nine dollops of caramel evenly over the top of the brownie. I prefer to dip my spoon slightly below the surface of the brownie when adding the caramel just to incorporated it a little better. ",
      "Use a knife swirl the caramel into “S” shapes throughout the batter. The batter is thick, so you are just swirling the very top layer. Leave some pockets of caramel. Sprinkle with flake salt, if using.",
      "Bake for 35-40 minutes or until the brownies reach an internal temperature of 210°F.",
      "Let brownies cool in the pan on a wire cooling rack to until room temperature. Drizzle with 3 to 4 tablespoons of additional caramel and another light sprinkle of sea salt."],
    source:"https://www.simplyrecipes.com/caramel-swirl-brownie-recipe-5112069",
    tags:["#dessert","#brownies"]
  },
  {
    id:52,
    name:"Chocolate Cupcakes",
    image: "assets/img/Dessert/10-dessert.jpg",
    ingredients: ["1 ⅓ cups all-purpose flour\n" ,
      "¾ cup unsweetened cocoa powder\n" ,
      "2 teaspoons baking powder\n" ,
      "¼ teaspoon baking soda\n" ,
      "⅛ teaspoon salt\n" ,
      "1 ½ cups white sugar\n" ,
      "3 tablespoons butter, softened\n" ,
      "2 large eggs\n" ,
      "¾ teaspoon vanilla extract\n" ,
      "1 cup milk"],
    method_name: ["Step 1:","Step 2:","Step 3:","Step 4:"],
    method_details:["Preheat the oven to 350 degrees F (175 degrees C). Line a muffin pan with paper or foil liners.",
      "Sift together flour, cocoa, baking powder, baking soda, and salt.\n",
      "Cream together sugar and butter in a large bowl until light and fluffy. Add eggs, one at a time, beating well after each addition. Stir in the vanilla. Add flour mixture in two batches, alternating with milk; beat well. Spoon batter into the prepared muffin cups, filling each 3/4 full.",
      "Bake in the preheated oven until a toothpick inserted into the centers comes out clean, 15 to 17 minutes. Remove from the oven and let cool before serving or frosting."],
    source:"https://www.allrecipes.com/recipe/17377/chocolate-cupcakes/",
    tags:["#dessert","#chocolate"]
  },
]
