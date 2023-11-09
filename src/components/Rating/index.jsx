import StarSVG from './StarSVG.jsx';

function Rating({ rating }) {
  return (
    <div>
      <StarSVG fill={rating} />
    </div>
  );
}

export default Rating