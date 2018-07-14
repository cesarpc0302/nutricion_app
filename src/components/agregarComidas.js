import '../stylesheets/agregarComidas.scss'
import foods from '../../resources/TablaComposicionAlimentos.json'
import { PropTypes, Component} from 'react'

const foodsList = Object.keys(foods);

export class AgregarComidas extends Component{
	constructor() {
    	super();
    	this.state = {
      		name: '',
      		shareholders: [{ name: '', cantidad: 0 }],
    	};
  	}

  	getCalories (){
  		let total = 0;
  		if (this.state.shareholders.length > 1) {
				for (var i = this.state.shareholders.length - 1; i >= 0; i--) {
  				total += this.state.shareholders[name]["Energia (kcal)"]
  			}
  		}
  		return total;
  	}

  	get value()	{
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

  	handleNameChange = (evt) => {
    	this.setState({ name: evt.target.value});
  	}

  	handleShareholderNameChange = (idx) => (evt) => {
    	const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      		if (idx !== sidx) return shareholder;
      		return { ...shareholder, name: evt.target.value };
    	});
    
    	this.setState({ shareholders: newShareholders });
  	}

  	handleShareholderCantidadChange = (idx) => (evt) => {
    	const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      		if (idx !== sidx) return shareholder;
      		return { ...shareholder, cantidad: evt.target.value };
    	});
    
    	this.setState({ shareholders: newShareholders });
  	}  	

  	handleSubmit = (evt) => {
    	const { name, shareholders } = this.state;
    	console.log(name);
    	console.log(shareholders);
    }
  
  	handleAddShareholder = () => {
    	this.setState({ shareholders: this.state.shareholders.concat([{ name: '', cantidad:0 }]) });
  	}
  
  	handleRemoveShareholder = (idx) => () => {
    	this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
  	}

	render () {
		return (
      		<form onSubmit={this.handleSubmit} className="formComidas">
        		<div>
	        		<input className="inputTime input" type="text" placeholder="Desayuno" value={this.state.name} onChange={this.handleNameChange}/>
	      			
	        		{this.state.shareholders.map((shareholder, idx) => (
	          			<div className="shareholder">
	          			    <button type="button" onClick={this.handleRemoveShareholder(idx)} className="button smallButton">-</button>
	            
	            			<div className="inputDiv">
	            				<input className="inputShareholder inputNumber input" type="number" onChange={this.handleShareholderCantidadChange(idx)}/>
								<input className="input inputMeal inputShareholder" ref="inputResort" type="text" list="foods-List" onChange={this.handleShareholderNameChange(idx)} />
								<datalist id="foods-List">
									{foodsList.map(
										(opt, i) => <option key={i}>{opt}</option>
									)}
								</datalist>
							</div>
	          			</div>
	        		))}
	        
	        		<button type="button" onClick={this.handleAddShareholder} className="button smallButton">+</button>
        		</div>
        		s
        		<button className="button buttonAdd">Agregar</button>
        		
      		</form>
    	)
  	}
}