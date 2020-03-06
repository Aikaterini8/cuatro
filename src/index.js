import React from 'react';
import ReactDOM from 'react-dom';
import './CalcCss.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  fullaraki_radio: '',
      height: 0,
      width: 0,
	  type: '',
	  kinisi: 0,
	  aksonas: '',
	  ekptwsi: 0,
	  totalCost: 0,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "height") {
      if (val < 0 || val > 3) {
        err = <strong>The height must be between 0.1 to 3 m</strong>;
      }
    }
	if (nam === "width") {
      if (val < 0 || val > 3) {
        err = <strong>The width must be between 0.1 to 3 m</strong>;
      }
    }
	if (nam === 'ekptwsi') {
	  if (val < 0 || val > 40) {
		err = <strong>The discount must be between 0% to 40%</strong>;
	  }
	}
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  calculate(a, b, type, fullaraki_radio, kinisi) {
	  
	  let kin = 0;
	  
	  if(kinisi === 'imanta') {
			kin = 33;
	  }
	  else if (kinisi === 'moter') {
			kin = 89;
	  }
	  
	  if(fullaraki_radio === 'Η45_Πολυουρεθάνης') {
		let minCost = 13.09;
		let kouti = 0;
		let plaina = 0;
		let odhg = 0;
		let akson = 0;
		
		if(type === 'isia_14x17') {
			kouti = 12.00;
			plaina = 4.90;
			odhg = 3.30;
	        akson = 2.30;
			}
		if(type === 'isia_14x19') {
			kouti = 11.10;
			plaina = 4.16;
			odhg = 3.30;
			akson = 2.30;
			}
		if(type === 'isia_17x17') {
			kouti = 13.57;
			plaina = 5.30;
			odhg = 3.30;
		    akson = 2.30;
		    }
		if(type === 'isia_18x19') {
			kouti = 12.64;
			plaina = 4.70;
			odhg = 3.30;
			akson = 2.30;
		    }
		if(type === 'isia_20.6x20.6') {
			kouti = 18.88;
			plaina = 7.30;
			odhg = 3.30;
			akson = 2.30;
			}
		if(type === 'pompe_14x19') {
			kouti = 11.53;
			plaina = 4.20;
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_15.5x18.5') {
			kouti = 14.60;
			plaina = 4.80; 
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_18x19') {
			kouti = 14.60;
			plaina = 4.80;
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_20.6x20.6') {
			kouti = 19.07;
			plaina = 7.80;
			odhg = 1.83;
			akson = 1.30;
			}
		
		var totalCost = 0;
		if(a != 0 && b != 0) {
			totalCost = minCost + plaina + (a*kouti) + (a*akson) + (b*odhg) + (13*a*b) + kin;
		}

		return totalCost.toFixed(2);
	  }
	  else if(fullaraki_radio === 'Η43_Πολυουρεθάνης') {
		let minCost = 13.09;
		let tapes_parathuro = 0.90;
		let tapes_mpalkonoporta = 0.90;
		let kouti = 0;
		let plaina = 0;
		let odhg = 0;
		let akson = 0;
		
		if(type === 'isia_14x17') {
			kouti = 12.00;
			plaina = 4.90;
			odhg = 3.30;
	        akson = 2.30;
			}
		if(type === 'isia_14x19') {
			kouti = 11.10;
			plaina = 4.16;
			odhg = 3.30;
			akson = 2.30;
			}
		if(type === 'isia_17x17') {
			kouti = 13.57;
			plaina = 5.30;
			odhg = 3.30;
		    akson = 2.30;
		    }
		if(type === 'isia_18x19') {
			kouti = 12.64;
			plaina = 4.70;
			odhg = 3.30;
			akson = 2.30;
		    }
		if(type === 'isia_20.6x20.6') {
			kouti = 18.88;
			plaina = 7.30;
			odhg = 3.3;
			akson = 2.30;
			}
		if(type === 'pompe_14x19') {
			kouti = 11.53;
			plaina = 4.20;
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_15.5x18.5') {
			kouti = 14.60;
			plaina = 4.80; 
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_18x19') {
			kouti = 14.60;
			plaina = 4.80;
			odhg = 1.83;
			akson = 1.30;
			}
		
		if(type === 'pompe_20.6x20.6') {
			kouti = 19.07;
			plaina = 7.80;
			odhg = 1.83;
			akson = 1.30;
			}
		
		var totalCost = 0;
		if(a != 0 && b != 0) {
			totalCost = minCost + plaina + (a*kouti) + (a*akson) + (b*odhg) + (10*a*b);
		}
		/* total = minKostos + tapes_parathuro + kostos_plaina + (height * isia_14x17_kouti) + kostos_odhgos + 10*height*width; */
		return totalCost.toFixed(2);
	  }
		  
	  else {
		  totalCost = 0;
		  return totalCost;
	  }
  }
  
  suggested_cost(cost, kinisi) {
	  var suggest = 0;
	  let kin = 0;
	  
	  if(kinisi === 'imanta') {
			kin = 33;
	  }
	  else if (kinisi === 'moter') {
			kin = 89;
	  }
	  
	  
	  return suggest = (cost*1.15) + kin
  }
  
  discount(cost, disc, kinisi) {
	  var discountedCost = 0;
	  let kin = 0;
	  
	  if(kinisi === 'imanta') {
			kin = 33;
	  }
	  else if (kinisi === 'moter') {
			kin = 89;
	  }
	  
	  if(disc > 40) {
		  return (cost*(60/100) + kin).toFixed(2);
	  }
	  
	  if (disc >= 0 && disc <= 40) {
		  return (cost * ((100 - disc)/100) + kin).toFixed(2);
	  }
	  else {
		  return discountedCost = cost + kin;
	  }
  }
  render() {
    return (
	
	<body>
      <div class="topnav">
 		<a href="CalcPage.html">New Calculation</a>
	  </div>
	  
	  <div class="row">
  		<div class="columnCreated">
  		
    		<h1>Υπολογισμός Κόστους</h1>	
		</div>
	  
	  <form>
		<div class="row">
	      <div class="column2" style = {{textAlign: "left", marginLeft: "250px"}}>
		  <h1> Είδος Φυλλαράκι:</h1>
		  <h2>Φυλλαράκι Πολυουρεθάνης</h2>
		  <input type='radio' name = 'fullaraki_radio' value = 'Η45_Πολυουρεθάνης' onChange = {this.myChangeHandler} />Η45_Πολυουρεθάνης
		  <input type='radio' name = 'fullaraki_radio' value = 'Η43_Πολυουρεθάνης' onChange = {this.myChangeHandler} />Η43_Πολυουρεθάνης
		  <input type='radio' name = 'fullaraki_radio' value = 'Η45_Flat'          onChange = {this.myChangeHandler} />Η45 Flat
		  <input type='radio' name = 'fullaraki_radio' value = 'Η55_Πολυουρεθάνης' onChange = {this.myChangeHandler} />Η55_Πολυουρεθάνης
		  <input type='radio' name = 'fullaraki_radio' value = 'Η77_Πολυουρεθάνης' onChange = {this.myChangeHandler} />Η77_Πολυουρεθάνης
		  
		  <h2>Φυλλαράκι Αλουμινίου</h2>
		  <input type='radio' name = 'fullaraki_radio' value = '10X42_Αλουμινίου' onChange = {this.myChangeHandler} />10X42_Αλουμινίου
		  <input type='radio' name = 'fullaraki_radio' value = '10X41_Αλουμινίου' onChange = {this.myChangeHandler} />10X41_Αλουμινίου
		  <input type='radio' name = 'fullaraki_radio' value = '10X55_Αλουμινίου' onChange = {this.myChangeHandler} />10X55_Αλουμινίου
		  <input type='radio' name = 'fullaraki_radio' value = '19X77_Αλουμινίου' onChange = {this.myChangeHandler} />19X77_Αλουμινίου
		  
		  <h2>Πλάτος:</h2>
		  <input
			type='number'
			name='width'
			min = '0.1'
			step = '0.01'
			max = '3'
			onChange={this.myChangeHandler}
		  /> m
		  <h2>Ύψος:</h2>
		  <input
			type='number'
			name='height'
			min = '0.1'
			step = '0.01'
			max = '3'
			onChange={this.myChangeHandler}
		  /> m
		  <h1> Είδος Κουτιού:</h1>
		  <h2>Ίσιο:</h2>
		  <input type="radio" name="type" value="isia_14x17" onChange={this.myChangeHandler}/>14x17
		  <input type="radio" name="type" value="isia_14x19" onChange={this.myChangeHandler}/>14x19
		  <input type="radio" name="type" value="isia_17x17" onChange={this.myChangeHandler}/>17x17
		  <input type="radio" name="type" value="isia_18x19" onChange={this.myChangeHandler}/>18x19
		  <input type="radio" name="type" value="isia_20.6x20.6" onChange={this.myChangeHandler}/>20.6x20.6
		  
		  <h2>Πομπέ</h2>
		  <input type="radio" name="type" value="pompe_15.5x19" onChange={this.myChangeHandler}/>15.5x19
		  <input type="radio" name="type" value="pompe_20.5x21" onChange={this.myChangeHandler}/>20.5x21
		  
		  <h2>Θέρμο_Ίσιο & Πομπέ:</h2>
		  <input type="radio" name="type" value="Thermo_isio_15.5x21" onChange={this.myChangeHandler}/>15.5x21
		  <input type="radio" name="type" value="Thermo_isio_15.5x23" onChange={this.myChangeHandler}/>15.5x23
		  <input type="radio" name="type" value="Thermo_isio_18.5x21" onChange={this.myChangeHandler}/>18.5x21
		  <input type="radio" name="type" value="Thermo_isio_15.5x23" onChange={this.myChangeHandler}/>15.5x23
		  <input type="radio" name="type" value="Thermo_isio_20.5x25" onChange={this.myChangeHandler}/>20.5x25
		  <input type="radio" name="type" value="Thermo_isio_25x29" onChange={this.myChangeHandler}/>25x29
		  <h2>Εξωτερικό:</h2>
            <input type="radio" name="type" value="exo_15.5x15.5" onChange={this.myChangeHandler}/>15.5x15.5
            <input type="radio" name="type" value="exo_18.5x18.5" onChange={this.myChangeHandler}/>18.5x18.5
			<input type="radio" name="type" value="exo_20.6x20.6" onChange={this.myChangeHandler}/>20.6x20.6
		  
		  <h2>Κίνηση:</h2>
		  <input type="radio" name="kinisi" value="imanta" onChange={this.myChangeHandler}/>Με ιμάντα
		  <input type="radio" name="kinisi" value="moter" onChange={this.myChangeHandler}/>Μοτέρ
		  <input type="radio" name="kinisi" value="manivela" onChange={this.myChangeHandler}/>Μανιβέλα
		  <input type="radio" name="kinisi" value="Moter_Manivelas" onChange={this.myChangeHandler}/>Μοτέρ Μανιβέλας
		  
		  </div>
		  
		  <div class="column2" style = {{textAlign: "left", marginLeft: "0px", backgroundColor: "#F2F5A9",}}>
		  <h2>Συνολικό κόστος: {this.calculate(this.state.height,this.state.width, this.state.type, this.state.fullaraki_radio, this.state.kinisi)} €</h2>
		  <h2>Προτεινόμενη τιμή πώλησης: {(this.suggested_cost(this.calculate(this.state.height,this.state.width, this.state.type, this.state.fullaraki_radio), this.state.kinisi)).toFixed(2)} €</h2>
		  <h2>Έκπτωση</h2>
		  <input type='number' name = 'ekptwsi' min = '0' max = '40' onChange={this.myChangeHandler}/> %
		  <h2>Τελική τιμή: {(this.discount((this.calculate(this.state.height,this.state.width, this.state.type, this.state.fullaraki_radio)*1.15), this.state.ekptwsi, this.state.kinisi))} €</h2>	
		  </div>
		 </div>
		</form>
	  </div>
	</body>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
