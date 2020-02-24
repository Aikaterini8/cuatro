import React from 'react';
import ReactDOM from 'react-dom';
import './CalcCss.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
	  type: '',
	  odhgos: '',
	  aksonas: '',
	  ekptwsi: 0,
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
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  calculate(a, b, type, odhgos, aksonas) {
	  let minCost = 18.76;
	  let tapes_parathuro = 0.90;
	  let tapes_mpalkonoporta = 0.90;
	  let kouti = 0;
	  let plaina = 0;
	  let odhg = 0;
	  let akson = 0;
	  
	  if(type === 'isia_14x17') {
		  kouti = 13.06;
		  plaina = 4.30;
		  if(odhgos === 'yes') {
			  odhg = 3.76;
		  }
		  if(aksonas === 'yes') {
			  akson = 2.50;
		  }
	  }
	  if(type === 'isia_14x19') {
		  kouti = 11.10;
		  plaina = 4.16;
		  if(odhgos === 'yes') {
			  odhg = 3.76;
		  }
		  if(aksonas === 'yes') {
			  akson = 2.50;
		  }
	  }
	  if(type === 'isia_17x17') {
		  kouti = 14.70;
		  plaina = 5.17;
		  if(odhgos === 'yes') {
			  odhg = 3.76;
		  }
		  if(aksonas === 'yes') {
			  akson = 2.50;
		  }
	  }
	  if(type === 'isia_18x19') {
		  kouti = 14.70;
		  plaina = 5.17;
		  if(odhgos === 'yes') {
			  odhg = 3.76;
		  }
		  if(aksonas === 'yes') {
			  akson = 2.50;
		  }
	  }
	  if(type === 'isia_20x20') {
		  kouti = 18.88;
		  plaina = 7.30;
		  if(odhgos === 'yes') {
			  odhg = 3.76;
		  }
		  if(aksonas === 'yes') {
			  akson = 2.50;
		  }
	  }
	  if(type === 'pompe_14x19') {
		  kouti = 11.53;
		  plaina = 4.20;
		  if(odhgos === 'yes') {
			  odhg = 1.83;
		  }
		  if(aksonas === 'yes') {
			  akson = 1.30;
		  }
	  }
	  if(type === 'pompe_15x18') {
		  kouti = 14.60;
		  plaina = 4.80;
		  if(odhgos === 'yes') {
			  odhg = 1.83;
		  }
		  if(aksonas === 'yes') {
			  akson = 1.30;
		  }
	  }
	  if(type === 'pompe_18x19') {
		  kouti = 14.60;
		  plaina = 4.80;
		  if(odhgos === 'yes') {
			  odhg = 1.83;
		  }
		  if(aksonas === 'yes') {
			  akson = 1.30;
		  }
	  }
	  if(type === 'pompe_20x20') {
		  kouti = 19.07;
		  plaina = 7.80;
		  if(odhgos === 'yes') {
			  odhg = 1.83;
		  }
		  if(aksonas === 'yes') {
			  akson = 1.30;
		  }
	  }
	  var totalCost = 0;
	  totalCost = minCost + tapes_parathuro + plaina + (a*kouti) + (a*akson) + (b*odhg) + (10*a*b);
	  
	  /* total = minKostos + tapes_parathuro + kostos_plaina + (height * isia_14x17_kouti) + kostos_odhgos + 10*height*width; */
	  return totalCost.toFixed(2);
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
		  <h2>Ύψος:</h2>
		  <input
			type='number'
			name='height'
			min = '0.1'
			step = '0.01'
			max = '3'
			onChange={this.myChangeHandler}
		  /> m
		  <h2>Πλάτος:</h2>
		  <input
			type='number'
			name='width'
			min = '0.1'
			step = '0.01'
			max = '3'
			onChange={this.myChangeHandler}
		  /> m
		  <h2>Ίσιο:</h2>
		  <input type="radio" name="type" value="isia_14x17" onChange={this.myChangeHandler}/>14x17
		  <input type="radio" name="type" value="isia_14x19" onChange={this.myChangeHandler}/>14x19
		  <input type="radio" name="type" value="isia_17x17" onChange={this.myChangeHandler}/>17x17
		  <input type="radio" name="type" value="isia_18x19" onChange={this.myChangeHandler}/>18x19
		  <input type="radio" name="type" value="isia_20x20" onChange={this.myChangeHandler}/>20.6x20.6
		  <h2>Πομπέ</h2>
		  <input type="radio" name="type" value="pompe_14x19" onChange={this.myChangeHandler}/>14x19
		  <input type="radio" name="type" value="pompe_15x18" onChange={this.myChangeHandler}/>15.5x18.5
		  <input type="radio" name="type" value="pompe_14x19" onChange={this.myChangeHandler}/>18x19
		  <input type="radio" name="type" value="pompe_20x20" onChange={this.myChangeHandler}/>20.6x20.6
		  <h2>Οδηγός</h2>
		  <input type="radio" name="odhgos" value="no" onChange={this.myChangeHandler}/>Όχι
		  <input type="radio" name="odhgos" value="yes" onChange={this.myChangeHandler}/>Ναι
		  <h2>Άξονας Κατωκάσι</h2>
		  <input type="radio" name="aksonas" value="no" onChange={this.myChangeHandler}/>Όχι
		  <input type="radio" name="aksonas" value="yes" onChange={this.myChangeHandler}/>Ναι
		  <p></p>
		  {this.state.errormessage}
		  </div>
		  
		  <div class="column2" style = {{textAlign: "left", marginLeft: "0px", backgroundColor: "#F2F5A9",}}>
		  <h2>Συνολικό κόστος: {this.calculate(this.state.height,this.state.width, this.state.type, this.state.aksonas, this.state.odhgos)} €</h2>
		  <h2>Προτεινόμενη τιμή πώλησης: {(this.calculate(this.state.height,this.state.width, this.state.type, this.state.aksonas, this.state.odhgos)*1.15).toFixed(2)} €</h2>
		  <h2>Έκπτωση</h2>
		  <input type='number' name = 'ekptwsi' min = '0' max = '100' onChange={this.myChangeHandler}/> %
		  <h2>Τελική τιμή: {((this.calculate(this.state.height,this.state.width, this.state.type, this.state.aksonas, this.state.odhgos)*1.15)*(100-this.state.ekptwsi)/100).toFixed(2)} €</h2>
		  </div>
		 </div>
		</form>
	  </div>
	</body>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
