import pancake from '../assets/meals/images/pancake-stack.jpg'
import mac from '../assets/meals/images/mac-and-cheese.jpg'

export default function MealItem({ meal }) {
    const imgSrc = '../assets/meals/' + meal.image
    console.log(imgSrc)
    return (
      <li className="w-[20vw]">
          <img src={mac} alt={meal.name} />
      </li>
    );
  }