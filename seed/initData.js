const db = require('../db')
const { Type, Recipe, Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Type.deleteMany({});
        await Recipe.deleteMany({});
        await Ingredient.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
};

const main = async () => {

    await resetCollections();   

  const type1 = await new Type({
    ethnicity: 'Italian',
    famous_chef: 'Da Vinci',
    have_tried: true
  })
  type1.save()

  const type2 = await new Type({
    ethnicity: 'French',
    famous_chef: 'Julia Child',
    have_tried: true
  })
  type2.save()

  const type3 = await new Type({
    ethnicity: 'Mexican',
    famous_chef: 'Gabriel Iglesias',
    have_tried: true
  })
  type3.save()

  const recipeArray = [
    {
      type_id: type1._id,
      name: 'Lasagna',
      preptime: 30,
      totaltime: 60,
      calories: 200,
      difficulty: 'easy',
    },
    {
        type_id: type1._id,
        name: 'Pizza',
        preptime: 30,
        totaltime: 60,
        calories: 300,
        difficulty: 'medium',
    },
    {
        type_id: type2._id,
        name: 'Creme Brulee',
        preptime: 30,
        totaltime: 60,
        calories: 400,
        difficulty: 'medium',
    },
    {
        type_id: type2._id,
        name: 'Souffle',
        preptime: 30,
        totaltime: 60,
        calories: 500,
        difficulty: 'hard',
    },
    {
        type_id: type3._id,
        name: 'Burrito',
        preptime: 30,
        totaltime: 60,
        calories: 250,
        difficulty: 'easy',
    },
    {
        type_id: type3._id,
        name: 'Churro',
        preptime: 30,
        totaltime: 60,
        calories: 350,
        difficulty: 'hard',
    }
  ]

  //Sebastian did magic here??? 
  const recipes = await Recipe.insertMany(recipeArray)
  console.log('Created recipes!')
  
  const ingredientArray  = [
      {
          recipe_id: recipes[0]._id,
          name: "pasta",
          weight_oz: 3,
          price: 5
        },
    ]
    
    // ingredientArray.save()
    // recipeArray.save()

    await Ingredient.insertMany(ingredientArray)
    console.log('Created ingredients!')

}

const run = async () => {
  await main()
  db.close()
}

run()