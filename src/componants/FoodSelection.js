import React from 'react'
import FoodMenu from './FoodMenu';

const FoodSelection = () => {
  return (
    <div className="mt-8 bg-white ">
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-bold">Our Menu</h3>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-orange-700">
          TODAY'S SPECIALITY
        </h2>
      </div>
      <div className="menu_container grid lg:grid-cols-4 gap-y-6">
        <FoodMenu
          img="https://media.istockphoto.com/id/177042346/photo/salmon-fishcakes-over-white-background.jpg?s=612x612&w=0&k=20&c=hn4F3YhWsVa3KlI5SDSA6JHiuYyT9qkwjqlYyNwcJRQ="
          category="Seafood"
          name="Crab cakes "
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
        <FoodMenu
          img="https://thumbs.dreamstime.com/b/spaghetti-bolognese-black-serving-platter-fresh-basil-parmesan-44237816.jpg"
          category="Pasta"
          name="Spaghetti Bolognese "
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
        <FoodMenu
          img="https://thumbs.dreamstime.com/b/lasagna-11155296.jpg"
          category="Pasta"
          name="Lasagna"
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
        <FoodMenu
          img="https://t3.ftcdn.net/jpg/00/72/34/10/360_F_72341041_pWud5KYhe9pWLEKnimzKWwqcAThsgcZM.jpg"
          category="Soup"
          name="Chicken pot pie"
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
        <FoodMenu
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz2MduV60gYBlR-LtqXso74WtBD2sGIAyaw&usqp=CAU"
          category="Poultry"
          name="Fried Chicken "
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
        <FoodMenu
          img="https://media.istockphoto.com/id/583847258/photo/delicious-homemade-peach-cobbler.jpg?s=612x612&w=0&k=20&c=pet6aDiMNVPhpEVkCDM3TsghsYXUv2LsnWnxXSz7Z9s="
          category="Dessert"
          name="Peach Cobbler "
          info="Lorem ipsum dolor, sit amet cons ectetur adipis icing"
          price={20}
        />
      </div>
    </div>
  );
}

export default FoodSelection
