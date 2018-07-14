import '../stylesheets/welcome.scss'

export const Welcome = () => (
	<div className='welcome'>
		<div className='consulta half-display'>
			<h3>Consulta</h3>
			<ul>
  				<li>Agregar Persona</li>
  				<li>Cargar Persona</li>
  				<ul>
      				<li>ABCD</li>
      				<li>Seguimiento</li>
      				<li>Menu</li>
    			</ul>
			</ul>
		</div>
		<div className='menus half-display'>
			<h3>Menus</h3>
			<ul>
  				<li>Preparaciones</li>
  				<li>Plantillas</li>
  				<li>Costos</li>
  				<li>Recetas</li>
			</ul>
		</div>
	</div>
)