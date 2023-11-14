import StarSVG from './StarSVG.jsx';

function Rating({ rating }) {
  return (
    <div className='rating-icon'>
      <StarSVG fill={rating} />
    </div>
  );
}

export default Rating