import { useLocation, Link } from 'react-router-dom';

const ReturnButton = ({text}) => {

	const location = useLocation();
	const previousPath = location.state?.from || '/';
	
	return (
		<>
			<Link className='btn' to={previousPath}>{text}</Link>
		</>
	);
  };

export default ReturnButton;