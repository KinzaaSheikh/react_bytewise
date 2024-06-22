import PropTypes from 'prop-types'

const Card = ({ children, bg = 'bg-gray-100' }) => {
    Card.propTypes = {
        children: PropTypes.node.isRequired, // Required child of any type
        bg: PropTypes.string, // Optional string for background class
      }

  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      { children }
    </div>
  )
}

export default Card;