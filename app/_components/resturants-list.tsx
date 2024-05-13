import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="[&::-webkit-scrollbar]:hidden} flex gap-4 overflow-scroll">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
