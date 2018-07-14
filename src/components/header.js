import FaPieChart from 'react-icons/lib/fa/pie-chart'
import '../stylesheets/header.scss'

export const Header = () => (
	<div className='header'>
		<div className='header-option'>
			<span><FaPieChart /></span>
		</div>
		<div className='header-option'>
			<span>Consulta</span>
		</div>
		<div className='header-option'>
			<span>Menus</span>
		</div>	
	</div>
)